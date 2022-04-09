const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://harry123:harry321@cluster0.576cx.mongodb.net/SahilDB", { useNewUrlParser: true}, {useUnifiedTopology: true})

//create a data schema

const logschema = {
    Firstname: String,
    Lastname: String,
    Email: String,
    Pass:String,
    Cpass:String
}

const Form = mongoose.model("Form",logschema);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})


app.post("/", function(req, res){
    let newForm = new Form({
        Firstname: req.body.Firstname,
        Lastname: req.body.Lastname,
        Email: req.body.Email,
        Pass:req.body.Pass,
        Cpass:req.body.Cpass
    });
    newForm.save();
    res.redirect('/');
})


app.listen(3000, function(){
    console.log("server is running on 3000");
})