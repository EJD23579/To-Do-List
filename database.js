const {Client} = require ('pg');
const client = new Client({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    port: process.env.PG_PORT,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE
})

//client.connect();
//client.query(`SELECT * FROM items`, (err,res) =>{
//    if (!err){
//        console.log(res.rows);
//    }
//    else{
//        console.log(err.message);
//    }
//    client.end;
//})

module.exports = client;