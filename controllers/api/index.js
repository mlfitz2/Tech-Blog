const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const dashboardRoutes = require('./dashboardRoutes');

//router routes
router.use('/posts', postRoutes);
router.use('/users', userRoutes);
router.use('/comment', commentRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
