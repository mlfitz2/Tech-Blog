const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//home screen
router.post('/', withAuth, async (req, res) => {
    try {
        Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.session.user_id
        });
        res.status(200).json({ message: `New post created` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `${error}`});
    }
})

//pull user's posts
router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
          include: [
            {
              model: User,
              attributes: [
                'username'
              ]
            },
            {
              model: Comment
            }
          ],
          order: [
            ['created_at', 'DESC']
          ],
          where: {
              user_id: req.session.user_id
          }
        });
    
        const posts = postData.map((post) => post.get({ plain: true }));
        res.status(200).render('dashboard', {
          posts,
          logged_in: req.session.logged_in,
          username: req.session.username
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `${error}`});
    }
});


router.put('/:id', withAuth, async (req, res) => {
    try{
        const postData = await Post.update(
            {
                content: req.body.content
            },
            {
                where: {
                    id: req.params.id
                }
            }
        );
        if(!postData[0]) {
            res.status(404).json({message: 'No post with this id exists.'});
            return;
          }
            res.status(200).json({ message: `Post updated` });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: `${error}`});
    }
});

//delete post
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.destroy(
        {
          where: {
            id: req.params.id
          }
        }
      );
        if(!postData) {
          res.status(404).json({message: 'No post with this id exists.'});
          return;
        }
          res.status(200).json({ message: `Post deleted` });
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: `${error}` });
        };
  });

module.exports = router;