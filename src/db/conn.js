const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Registration", {

}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection 404 error`);
})


var contactSchema = new mongoose.Schema({
    firstname: String,
    lastname : String,
    email    : String,
    phoneno  : Number
});
var contact = mongoose.model('contact', contactSchema);
module.exports = contact;
