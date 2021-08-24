const express = require('express');
const produtoController = require("../controllers/produtoControler");
const routes = express.Router();
/*
routes.get("/produtos/lista",produtoController.listarProdutos);

routes.get("/produto/:id",(req,res) => {
    if(typeof Number(req.params.id) !== "number"){
        return res.send("DEVE DIGITAR UM NUMERO");
    }
    res.send("PAGINA DE PRODUTOS");

});
*/
routes.get("/admin/cadastro-produto",produtoController.cadastrarProduto);
routes.get("/admin/produtos",produtoController.listarProdutosAdmin);
routes.post("/salvar-produto",produtoController.salvarProduto);
routes.delete("/deletar-produto/:id", produtoController.deletarProduto);

module.exports = routes;