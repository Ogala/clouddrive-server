'use strict'
//import folder model
var Folder = require('../models/folder');

//diplays all folders
exports.folder_list = function (req, res, next){
    res.send('folde list NOT YET IMPLEMENTED');
};

//diplays all folders
exports.folder_detail = function (req, res, next){
    res.send('folder detail NOT YET IMPLEMENTED' + req.params.id);
};

//upload a folder
exports.folder_upload = function (req, res, next){
    console.log(req);
    var form = new formidable.IncomingForm();
    form.uploadDir = __dirname + "/data";
    form.keepExtensions = true;
    form.parse(req, function(err, fields, files) {
        console.log("fields ... " + fields);
        console.log("files ... " + files);
        if (!err) {
          console.log('uploadeding... ' + files.file.path);
          grid.mongo = mongoose.mongo;
          //var conn = mongoose.createConnection('..mongo connection string..');
          db.once('open', function () {
          var gfs = grid(conn.db);
          var writestream = gfs.createWriteStream({
              filename: files.file.name
          });
          fs.createReadStream(files.file.path).pipe(writestream);
       });
     }        
   });
   form.on('end', function() {        
       res.send('Completed ..... go and check fs.files & fs.chunks in  mongodb');
   });
};

//handle folder delete on get
exports.folder_delete_get = function (req, res, next){
    res.send('folder delete get NOT YET IMPLEMENTED' + req.params.id);
    
};

//handle folder delete on post
exports.folder_delete_post = function (req, res, next){
    res.send('folder delete post NOT YET IMPLEMENTED' );

};