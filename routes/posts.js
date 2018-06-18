module.exports = function(app) {

  //rediection sur le formulaire de création si la request est vide sinon insérer en BDD
  app.post("/post/create", function(req, res) {
    console.log(req.body);
    if(Object.keys(req.body).length === 0) //On vérifie si la request est vide
    {
      res.render("creerarticle.html");
    }
    else
    {
      //récupération du formulaire et insertion en BDD
      getNextSequence("articleid", function(err, result){
          console.log("ID : " + result);
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
    }
  });

  //suppression d'un article par id avec post sinon on pourrais supprimer un article en passant l'id en paramètre dans l'URL
  app.post("/post/supprimer", function(req, res) {

    var id = parseInt(req.body.id, 10);
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
