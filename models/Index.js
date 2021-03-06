const User = require("./User");
const Blogpost = require("./Blogpost");
const Comments = require("./Comment");

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
