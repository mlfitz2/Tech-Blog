const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    if (!req.session.logged_in) {
        res.status(403).send();
        return
    }

    try {
        await Comment.create({
            comment: req.body.newComment,
            user_id: req.session.user_id,
            post_id: req.body.postId
        });
        res.status(200).json({ message: `New comment added` });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `${error}` });
    };
});

module.exports = router;