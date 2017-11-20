//require mongoose
var mongoose = require('mongoose');


//define a schema
var Schema = mongoose.Schema;

var FolderSchema = new Schema({
    path_id: Number,
    parent_id: Number,
    name: String,
    file_path: String,
    size: Number,
    files: [{type: Schema.ObjectId, ref: 'Files'}],


});

//virtual for folder url
FolderSchema
.virtual('url')
.get(function() {
    return '/folder/' + this._id
});

//export model
module.exports = mongoose.model('Folder', FolderSchema);
