const User = require("./user");
const Blogpost = require("./blogposts");
const Comments = require("./comments");

User.hasMany(Blogpost, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Blogpost.belongsTo(User, {
  foreignKey: "user_id",
});

Blogpost.hasMany(Comments, {
  foreignKey: "blogpost_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(Blogpost, {
  foreignKey: "blogpost_id",
});

module.exports = { User, Blogpost, Comments };
