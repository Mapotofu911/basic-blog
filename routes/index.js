var posts = require("./posts");

module.exports = function(app) {

  app.get("/", function(req, res) {

  //affiche tous les articles en BDD
  app.db.collection("articles").find({}, {"sort" : ['datefield', 'asc']} ).toArray(function (error, results) {
        if (error) throw error;
        //console.log(results);
        res.render("index", {"articles" : results});
    });
  });

  // Register posts endpoint
  posts(app);
}
