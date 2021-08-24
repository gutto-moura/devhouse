const indexControler = {
    pgManutencao:(req,res)=>{
        res.render("manutencao");
    },
    pgHome:(req,res)=>{
        res.render("home");
    },
    pgBlog:(req,res)=>{
        res.render("blog");
    },
    pgContato:(req,res)=>{
        res.render("contato",{titulo:"CONTACT-US"});
    },
    pgDepoimento:(req,res) =>{
        res.render("depoimentos",{depoimentos,titulo:"depoimentos"});
    }
}
module.exports = indexControler;