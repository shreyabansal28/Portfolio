const mongoose=require("mongoose");
//creating a database
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost:27017/myproject",{
    useNewUrlParser:true,
    useUnifiedTopology:true,

}).then(()=>{
    console.log("Connection of database successfull");
}).catch((error)=>{
    console.log(error);
})