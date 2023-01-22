const { model, Schema } = require("mongoose");

const CommentSchema = new Schema({
  message: {
    type: String,
    required: [true, "A message is required"],
    minLength: [5, "Your comment must be at least 5 characters"],
    maxLength: [100, "Your comment must be less than a 100 characters"],
  },
  ownerId: { type: Schema.ObjectId, ref: "User", required: true },
  postId: { type: Schema.ObjectId, ref: "Post", required: true },
  publishedDate: { type: Date, default: Date.now },
});
const commentModel = model("Comment", CommentSchema);
module.exports = commentModel;
