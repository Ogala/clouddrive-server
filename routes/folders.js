//
//
var express = require('express');
var router = express.Router();
//require controller modules
var file_controller = require('../controllers/fileController');
var folder_controller = require('../controllers/folderController');

///FOLDER ROUTES///

/* GET home page. Will display list of folders*/
router.get('/', folder_controller.folder_list);

/*upload folder*/
router.post('/upload', folder_controller.folder_upload);

/*get request to delete folder*/
router.get('/delete', folder_controller.folder_delete_get);

/*post request to delete folder*/
router.post('/delete', folder_controller.folder_delete_post);

/*get detail of a folder*/
//router.get('/:id', folder_controller.folder_detail);


///FILE ROUTES///

/*get detail of a file*/
router.get('/file/:id', file_controller.file_detail);

/*upload file*/
router.post('/file/upload', file_controller.file_upload);

/*download file*/
router.post('/file/download', file_controller.file_download);

/*get request to delete file*/
router.get('/file/delete', file_controller.file_delete_get);

/*post request to delete file*/
router.post('/file/delete', file_controller.file_delete_post);


module.exports = router;