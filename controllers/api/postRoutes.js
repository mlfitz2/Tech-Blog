const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// retrieve data including comments for a single post
router.get('/:id', async (req, res) => {
    try { 
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: [
                        'username'
                    ]
                },
                {
                    model: Comment, 
                    include: [{model: User, attributes: ['username']}]
                }
            ]
        });
        if (!postData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;   
        }
          // strip the data to normalize it. 
          const post = postData.get({ plain: true});
          res.status(200).render('post', {
            post,
            // Pass the logged in flag to the template
            logged_in: req.session.logged_in,
            username: req.session.username
          });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `${error}` });
    };
});

module.exports = router;