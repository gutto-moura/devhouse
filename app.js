const express = require('express');
const rotasDeProdutos = require("./routes/produtos");
const rotasAdmimProdutos = require("./routes/produtos");
const methodOverride = require('method-override');
const totalDevHouse = require("./routes");
const path = require('path');


let app = express();
//CONFIGURANDO O TEMPLATE ENGINE
app.set('view engine','ejs');
app.set('views',path.resolve("views"));
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));
app.use(rotasDeProdutos);
app.use(totalDevHouse);
app.use(rotasAdmimProdutos);

app.listen(4000,()=>console.log("SERVIDOR OK NA PORTA 4000"));
