var express = require('express');
var dotenv = require('dotenv').config();
const client = require('../database');
var router = express.Router();
var itemList = [];



/* GET home page. */
router.get('/', function(req, res, next) {
res.render('index', { title: 'Lists', items: itemList });
});


router.use(express.json());
router.use(express.urlencoded({extended: true})); 

/* GET items listing. */
router.post('/items',(req,res,next) =>{
    console.log(req.body);
    newitem = req.body;
    client.query(`INSERT INTO items(title,content,category,date_created)
                  VALUES('${req.body.title}','${req.body.content}','${req.body.category}',
                  CURRENT_DATE)`,(err,res) =>{
      if (!err){
       console.log("Submit Successful");
       
      }
      else{
        console.log(err);
      }
    })
    res.redirect('/items');
  })




module.exports = router;
