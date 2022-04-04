const router = require('express').Router();
const { Post } = require('../models')
console.log("Post"+ Post)

// Render the home feed page for all users whether logged in or not
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({});
    console.log(postData)
    const posts = postData.map((post) => post.get({ plain: true }));
    res.status(200).render('home', {
      posts,
      // Pass the logged in flag to the template
      layout: "main",
    });
  } catch (err) {
    console.log("err", err)
    res.status(500).json(err);
  }
});

router.get('/signup', (req, res) => {
  res.render('signup');
})

//route to show dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
})

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;