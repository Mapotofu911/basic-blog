module.exports = function(app) {

  //rediection sur le formulaire de création
  app.get("/post/create", function(req, res) {
    res.render("creerarticle.html");
  });

  //récupération du formulaire et insertion en BDD
  app.post("/post/created", function(req, res) {
      console.log(req.body);
      getNextSequence("articleid", function(err, result){
          console.log("hi : " + result);
          app.db.collection('articles').insert({
              "_id": result,
              "date": new Date().toISOString(),
              "titre": req.body.titre,
              "auteur": req.body.auteur,
              "résumé": req.body.résumé,
              "contenu": req.body.contenu,
            });
      });
      res.redirect("/");
  });

  //suppression d'un article par id
  app.get("/post/supprimer/:id", function(req, res) {

    var id = parseInt(req.params.id, 10);
    var name = "_id";
    var query = {};
    query[name] = id;

    app.db.collection("articles").remove(query,function (error, results) {
      if (error) throw error;
      console.log(query);
      console.log("Deleted : " + results);
      res.redirect("/");
    });
  });

  //affichage d'un article
  app.get("/post/:id", function(req, res) {

    var id = parseInt(req.params.id, 10);
    var name = "_id";
    var query = {};
    query[name] = id;

    app.db.collection("articles").find(query).toArray(function (error, results) {
      if (error) throw error;
      console.log(query);
      console.log(results);
      res.render("unarticle", {"articles" : results});
    });
  });

  //auto incrémentaion de id d'articles
 function getNextSequence(name, callback) {
    app.db.collection("counters").findAndModify( { _id: name }, null, { $inc: { sequence_value: 1 } }, function(err, result){
      //if(err) callback(err, result);
      console.log(result.value.sequence_value);
      callback(err, result.value.sequence_value);
      } 
    );
  }
}
