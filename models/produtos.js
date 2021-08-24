const {v4:generateID} = require("uuid");
const produtoModel = {
listaDeProdutos: [
    {
        id: generateID(),
        nome: "site",
        descricao: "elaboração de site",
        imagem: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.site.com.br%2Fwp-content%2Fuploads%2Fhome-monitor.jpg&imgrefurl=https%3A%2F%2Fwww.site.com.br%2F&tbnid=NlrfOluQuN0LLM&vet=12ahUKEwjV4PvNh7jyAhVvtpUCHTvWBBIQMygHegUIARDTAQ..i&docid=VUvH24qtQsFb_M&w=562&h=339&q=site&ved=2ahUKEwjV4PvNh7jyAhVvtpUCHTvWBBIQMygHegUIARDTAQ",
    }
],
cadastrarProduto: function(nome,descricao,imagem){
        const novoProduto = {
            id: generateID(),
            nome,
            descricao,
            imagem,
        };
        return this.listaDeProdutos.push(novoProduto);
    },
     removerProduto: function(id){
        const novosProdutos = this.listaDeProdutos.filter((produto) => produto.id != id);

        if(novosProdutos.length >=  this.listaDeProdutos.length) return false;

        this.listaDeProdutos = novosProdutos;
        return true;
    },
};

module.exports = produtoModel;