require("dotenv").config();

const db = require("./db");

const port = process.env.PORT;

const express = require("express");

const app = express();

app.get("/",(req,res) =>{

    res.json({

        name: "Gustavo",
        years: "18",
        height: "1.78",
    })

});


app.listen(port)
console.log("esta rodando o servidor")