const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

router.get( '/',async (req, res) => {
    const comments= await Comment.find();
    console.log(comments);
    res.json(comments);
});

router.post( '/', async (req, res) => {
    const {description, idmovie, email} = req.body;
   const comment= new Comment({ description, idmovie, email});
    console.log(comment);
    await comment.save();
    res.json({status: 'Comment was created'});
});


module.exports = router;