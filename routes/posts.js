const express = require('express');
const router = express.Router();

// @route   GET api/posts
// @desc    GET all users posts
// @access  Public
router.get('/', (req, res) =>{
    res.send('Get all contacts');
});

// @route   POST api/posts
// @desc    add new post
// @access  Private
router.post('/', (req, res) =>{
    res.send('Add post');
});

// @route   PUT api/posts/:id
// @desc    Update post
// @access  Private
router.put('/:id', (req, res) =>{
    res.send('Update post');
});

// @route   DELETE api/posts/:id
// @desc    Delete post
// @access  Private
router.delete('/:id', (req, res) =>{
    res.send('Delete contact');
});

module.exports = router;