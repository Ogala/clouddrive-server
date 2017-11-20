'use strict'
var formidable = require('formidable');
var mongoose = require('mongoose');
var grid = require('gridfs-stream');
var fs = require('fs');
var util = require('util');
//import file model
var myfile = require('../models/myfile');

//diplays all files
exports.file_list = function (req, res, next){
    res.send('NOT YET IMPLEMENTED');
};

//diplays all files
exports.file_detail = function (req, res, next){
    res.send('file detail NOT YET IMPLEMENTED' + req.params.id);
};

//upload a file
exports.file_upload = function (req, res, next){
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

//upload a file
exports.file_download = function (req, res, next){
    res.send('file upload NOT YET IMPLEMENTED');
};

//handle file delete on get
exports.file_delete_get = function (req, res, next){
    res.send('file delete get NOT YET IMPLEMENTED' + req.params.id);
    
};

//handle file delete on post
exports.file_delete_post = function (req, res, next){
    res.send('file delete post NOT YET IMPLEMENTED' );

};