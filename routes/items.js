var express = require('express');
var router = express.Router();
const client = require('../database');
var itemList = [];
/* Populate item list */
client.connect();
client.query(`SELECT * FROM items`,(err,res)=>{
  if (!err){
    itemList = res.rows;
  }
  else {
    console.log(err);
  }
})
/*GET page template*/
router.get('/',(req,res,next) =>{
    res.render("items",{title: 'Items', items: itemList })
})


module.exports = router;
