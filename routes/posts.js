const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const {check, validationResult} = require('express-validator/check');

const User = require('../models/User');
const Post = require('../models/Posts');
// @route   GET api/posts
// @desc    GET all users posts
// @access  Public
router.get('/', async (req, res) =>{
    try {
        const posts = await Post.find().sort({ date: -1});
        res.json(posts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   POST api/posts
// @desc    add new post
// @access  Private
router.post(
    '/', 
    auth, 
    async(req, res) =>{
      const { tag, content} = req.body;

      try { 
          const newPost = new Post({
              tag,
              content
          });

          const post = await newPost.save();

          res.json(post);
      } catch (err) {
          console.error(err.message); 
          res.status(500).send('Server Error')
      }
});

// @route   PUT api/posts/:id
// @desc    Update post
// @access  Private
router.put('/:id', auth, async (req, res) =>{
    const { tag, content } = req.body;

    const postFeilds = {};
    if(tag) postFeilds.tag = tag;
    if(content) postFeilds.content = content;

    try {
        let post = await Post.findById(req.params.id);

        if(!post) return res.status(404).json({ msg: ' Post not found '});

        

        post = await Post.findByIdAndUpdate(req.params.id,
            {$set: postFeilds },
            {new: true}); 

            res.json(post)
    } catch (err) {
        console.error(err.message); 
          res.status(500).send('Server Error')
    }
});

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete('/:id',auth, async (req, res) =>{
    try {
        let post = await Post.findById(req.params.id);

        if(!post) return res.status(404).json({ msg: ' Post not found '});

        await Post.findByIdAndRemove(req.params.id); 
        res.json({ msg:'post deleted' })
    } catch (err) {
        console.error(err.message); 
          res.status(500).send('Server Error')
    }
});

module.exports = router;