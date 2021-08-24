const express = require("express");
const path = require('path')
const indexControler = require("../controllers/indexController");  //IMPORTANDO O INDEXCONTROLLER
const depoimentos = require('../models/depoimentos'); //IMPORTANDO ARQUIVO DE BANCO DE DADOS 

const routes = express.Router();

//routes.get('/',(req,res)=>res.send("BEM VINDO!"));
routes.get('/manutencao', indexControler.pgManutencao
    //res.sendFile(path.resolve("views","manutencao.html"));
);
routes.get('/', indexControler.pgHome           //CONFIGURAÇÃO DO TEMPLATE ENGINE
    //res.sendFile(path.resolve("views","home.html"));
);
routes.get('/home',(req,res)=>{
    res.redirect("/");
});
routes.get('/blog', indexControler.pgBlog
    //res.sendFile(path.resolve("views","blog.html"));
);
routes.get('/contato', indexControler.pgContato             //PASSANDO UM OBJETO COMO PARAMETRO
    //res.sendFile(path.resolve("views","contato.html"));
);

routes.get("/depoimentos",indexControler.pgDepoimento);
/*routes.get("/cadastrar-depoimento",indexControler.cadastrarDepoimento);*/
  /*routes.post("/cadastrar-depoimento",indexController.cadastrarDepoimento); */

module.exports = routes;
