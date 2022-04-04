const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const { post } = require('../controllers/homeRoutes');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Comment, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId'
});

Comment.belongsTo(Post, {
  foreignKey: 'postId'
});

module.exports = { User, Post, Comment };