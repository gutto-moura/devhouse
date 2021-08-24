const express = require('express');
const produtoController = require("../controllers/produtoControler");
const routes = express.Router();

routes.get("/admin/cadastroProduto",produtoController.cadastrarProdutos);
routes.get("/admin/produtos",produtoController.listarProdutosAdmin);

module.exports = routes;