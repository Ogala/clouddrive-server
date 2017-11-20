//require mongoose
var mongoose = require('mongoose');


//define a schema
var Schema = mongoose.Schema;

var MyFileSchema = new Schema({
    path_id: Number,
    parent_id: Number,
    name: String,
    file_path: String,
    size: Number,


});


//virtual for file url
MyFileSchema
.virtual('url')
.get(function() {
    return '/folder/file' + this._id
});

//export model
module.exports = mongoose.model('MyFile', MyFileSchema);
