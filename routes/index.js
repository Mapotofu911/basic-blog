var posts = require("./posts");

module.exports = function(app) {

  app.get("/", function(req, res) {

  //affiche tous les articles en BDD en GET car ne passe pas de paramètre par la route et on ne récupère pas de données via un formulaire
  app.db.collection("articles").find({}, {"sort" : ['datefield', 'asc']} ).toArray(function (error, results) {
        if (error) throw error;
        //console.log(results);
        res.render("index", {"articles" : results});
    });
  });

  // Register posts endpoint
  posts(app);
}
