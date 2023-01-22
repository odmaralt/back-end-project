const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: {
    type: String,
    required: [true, "A title is required"],
    minLength: [1, "Your title must be at least 1 character"],
    maxLength: [100, "Your title must be less than a 100 characters"],
  },
  text: {
    type: String,
    required: [true, "Text is required"],
    minLength: [1, "Your text must be at least 1 character"],
    maxLength: [200, "Your text must be less than 200 characters"],
  },
  image: {
    type: String,
    required: [true, "An image url is required"],
  },
  publishedDate: { type: Date, default: Date.now },
  ownerId: { type: Schema.ObjectId, ref: "User", required: true },
});

const postModel = model("Post", PostSchema);
module.exports = postModel;
