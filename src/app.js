const express=require('express');
require("./db/conn")
const path=require('path')
const app=express();
const user=require("./models/usermessage")
const port=process.env.PORT||3000;
const hbs=require('hbs');
const User = require('./models/usermessage');
//setting the path
const staticpath=path.join(__dirname,"../public");
const templatepath=path.join(__dirname,"../templates/views");
const partialpath=path.join(__dirname,"../templates/partials");

//middleware
app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")))
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")))
app.use('/jquery',express.static(path.join(__dirname,"../node_modules/jquery/dist")))
app.use(express.static(staticpath))
app.use(express.urlencoded({extended:false}))
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath);
//routing
app.get("/",(req,res)=>{
     res.render("index")
})
app.get("/contact",(req,res)=>{
    res.render("contact")
})
app.post("/contact",async(req,res)=>
{
    try {
        // res.send(req.body);
        const userData=new User(req.body);
        await userData.save();
        res.status(201).render("index");
    } catch (error) {
       res.status(500).send(error); 
    }

})
//server
app.listen(port,()=>{
    console.log(`server listening at ${port}`);
})