const products = require("../controllers/products.js");

module.exports = function(app) {
   app.get("/api/products", products.getAll);
   app.get('/api/products/:category',products.category);
   app.get("/api/products/:id", products.getOne);
   app.post("/api/products/new", products.create);
   app.put("/api/products/edit/:id", products.update);
   app.delete("/api/products/:id", products.delete);
   app.all('*',(req,res)=>{
      res.sendFile(path.resolve('./public/dist/public/index.html'));
    });
}