# basic-blog

Dépendances :

 Expressjs
 MongoDB
 Body-parser
 Consolidate.js
 Pug

Pour créer la base de données :

 Démarrer mongoDB
 - service mongod start

 Ouvrir le Shell mongo
  - mongo
  - use blog
  - load("chemin/vers/script2.js")
  - Réessayer d'ajouter un article une deuxième fois si on obtient l'erreur suivante : (node:8817) UnhandledPromiseRejectionWarning: Unhandled   promise rejection (rejection id: 1): BulkWriteError: E11000 duplicate key error collection: blog.articles index: _id_ dup key: { : 10 }
  
Dump de la base de données dans le fichier dump/blog.


 
 

