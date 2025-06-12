require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require("express"); //Pro Javascript
//import { express } from "express"; /Pro TypeScript

const app = express();

app.get("/",async (req,res) =>{

     const data = await db.data();
     res.json(data)
    // res.json({
    //     name: "Gustavo",
    //     years: "18",
    //     height: "1.78",
    // })

});

app.get("/clientes", async (req,res) =>{

    const clientes = await db.selectCustormers();
    res.json(clientes)

});


app.listen(port)
console.log("esta rodando o servidor")