const express = require("express");
const path = require("path")
const app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
const { userInfo } = require("os");
var contact=require("./db/conn");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
app.set('view engine','hbs');

app.get("/", (req, res) => {
    res.render("form")
});
app.post("/Contact", function(req, res)  {
   var std=new contact({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phoneno: req.body.phoneno,  });
    std.save(function(err,result){
        res.json(result);
    });
}); 



app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})
