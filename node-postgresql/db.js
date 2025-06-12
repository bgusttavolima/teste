async function connect() {

    //aqui e uma verificacao para nao deixar duplicar a conexao
    if(global.connection)
        return global.connection.connect();

    // Aqui está importando a classe Pool do pacote pg, que é o driver de PostgreSQL para Node.js
    const {Pool} = require("pg");
    //aqui ele cria um pool de conexao com a string de conexao do projeto
    const pool = new Pool({
        connectionString: process.env.CONNECTION_STRING

    });
    //aqui tem uma funcao await que vai esperar a conexao ser bem sucedida e devolver um console.log
    const client = await pool.connect();
    console.log("criou o pool de conexao");

    //aqui ele vai dar um client.query na data do banco e vai usar res.
    // rows[0] para especificar a informacao que vai ser pega
    const res = await client.query("select now()");
    console.log(res.rows[0]);

    //Libera essa conexão para que o pool possa reutilizá-la no futuro.
    client.release();
    
    //Salva o pool de conexões na variável global para que ele possa ser reutilizado.
    global.connection = pool;

    //Retorna uma nova conexão do pool para quem chamou a função.
    return pool.connect();
}

connect();

async function selectCustormers(){

    const client = await connect();
    const res = await client.query("select * from  usuarios"); //EDITADO PRA TESTE
    return res.rows;
}

async function data(){

    const client = await connect();
    const res = await client.query("select * from usuarios"); //EDITADO PRA TESTE
    return res.rows;
}

module.exports = {
    data,
    selectCustormers

}

