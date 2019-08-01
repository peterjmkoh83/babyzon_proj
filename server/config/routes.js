const products = require("../controllers/products.js");
const users = require("../controllers/users.js");
const path = require('path');

module.exports = function(app) {
   app.get("/api/products", products.getAll);
   app.get('/api/products/:category',products.category);
   app.get('api/products/:name',products.name);
   app.get("/api/products/:id", products.getOne);
   app.post("/api/products/new", products.create);
   app.put("/api/products/edit/:id", products.update);
   app.delete("/api/products/:id", products.delete);
   app.get("/api/users", users.allUser);
   app.get("/api/users/:id", users.getOneUser);
   app.post("/api/users/new", users.createUser);
   app.put("/api/users/edit/:id", users.updateUser);
   app.all('*',(req,res)=>{
      res.sendFile(path.resolve('./public/dist/public/index.html'));
    });
}