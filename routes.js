const express = require('express')
const route = express.Router()
const bodyParser = require('body-parser')
const mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: '*****',
    password: '******',
    database: 'my_db'
  })
connection.connect()


route.use(bodyParser.urlencoded({extended:false}))
route.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
route.post('/',(req,res)=>{
    console.log(req.body)
    connection.query(`INSERT INTO customer VALUES ('${req.body.name}' , '${req.body.pass}','${req.body.email}','${req.body["'1st'"]}','${req.body["'2nd'"]}')`, function (err, rows, fields) {
        if (err) throw err})
})
module.exports=route;