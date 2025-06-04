require("dotenv").config();

const port = process.env.PORT;

const express = require("express");

const app = express();

app.get("/",(req,res) =>{

    res.json({

        message: "funcionando"
    })

});



app.listen(port)
console.log("esta rodando o servidor")