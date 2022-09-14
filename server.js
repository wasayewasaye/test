
const express=require("express");
const path=require("path");
const ejs=require("ejs");
const bodyParser= require("body-parser");
const fs = require("fs").promises;
const router = require("./routes/about.js");

 const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static('public'))
app.use('/styles', express.static(path.join(__dirname + 'public')));

app.use('/about', router);

app.get('/',(req,res)=>{
    res.render('index')
})


app.listen(3000,()=>{
    console.log(`express server running on `);
});

