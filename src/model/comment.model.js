const mongoose = require("mongoose");
const schema = mongoose.Schema;
const commentSchema = new schema({
  person: { type: String },
  organization: { type: String },
  comment: { type: String },
  rating: { type: Number },
});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
