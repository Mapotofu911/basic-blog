
db.articles.createIndex({'id':1}, {unique: true});
for (var i = 0; i < 10; i++) 
{
   db.articles.insert({"id": i, "titre": "Titre de l'article ", "date": "04/06/2018", "auteur": "LeGrandRaph", "résumé": "résumé de l'article", "contenu": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eleifend sem id diam dictum fermentum. Nullam commodo, nibh sit amet molestie euismod, elit erat vulputate justo, a bibendum justo nulla id nisl. Nunc laoreet neque et consectetur feugiat. Ut id pulvinar enim, sit amet iaculis felis. Nam ullamcorper lectus quam, ac egestas erat cursus ac. Aliquam sed libero tempor, pellentesque quam sed, ornare libero. Etiam non bibendum leo. Vivamus ultrices odio metus, sit amet accumsan nisi dignissim eget. Nunc consectetur justo diam, at cursus augue euismod quis. Sed pulvinar gravida ex. Pellentesque venenatis aliquam elit nec scelerisque."})
}
