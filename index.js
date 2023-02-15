import express from "express";
import mysql from "mysql";

const app = express()
app.use(express.urlencoded({extended:true}));


const db = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"valorant" //nome do banco de dados
});

//código que faz a conexão com o banco de dados

app.use(express.json());

app.get("/", (req, res) =>{
    res.json("Oi, este é o backend")
});

//Selecionar todos as skins do banco de dados
app.get("/skins", (req, res) =>{
    const q = "SELECT * FROM skins" //skins é o nome da tabela.
    db.query(q,(err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

//CRIAR UMA SKIN NO BANCO
app.post("/skins", (req,res)=>{
    const q = "INSERT INTO skins (`name`, `edition`, `collection`, `weapon`, `price`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.edition,
        req.body.collection,
        req.body.weapon,
        req.body.price
    ]

    db.query(q,[values], (err,data)=>{
        if(err) return res.json(err)
        return res.json({message: "Skin criada com sucesso", Skin: values})
    })
})


//DELETAR UMA SKIN DO BANCO
app.delete("/skins/:id", (req, res)=>{
    const skinsId = req.params.id;
    const q = "DELETE FROM skins WHERE id = ?"

    db.query(q,[skinsId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Deletada com sucesso!")
    })
})

//ATUALIZAR UMA SKIN NO BANCO
app.put("/skins/:id", (req, res)=>{
    const skinsId = req.params.id;
    const q = "UPDATE skins SET `name` = ?, `edition`= ?, `collection`= ?, `weapon`= ?, `price` = ? WHERE id = ?"

    const values = [
        req.body.name,
        req.body.edition,
        req.body.collection,
        req.body.weapon,
        req.body.price
    ]
    db.query(q,[...values,skinsId], (err,data)=>{
        if(err) return res.json(err)
        return res.json("Atualizada com sucesso!")
    })
})



app.listen(8800, () => {
    console.log("servidor rodando em: http://localhost:8800")
});