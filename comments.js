// create we server

// import express
const express = require('express');
const router = express.Router();

// import controller
const commentController = require('../controllers/comment_controller');

// import passport
const passport = require('passport');

// create route for create comment
router.post('/create', passport.checkAuthentication, commentController.create);

// create route for delete comment
router.get('/destroy/:id', passport.checkAuthentication, commentController.destroy);

// export router
module.exports = router;

// mnake router as a package

// Path: index.js
// create we server