const express = require("express");
const router = express.Router();
const Post = require("../../models/postsSchema");
const Comment = require("../../models/commentSchema");
exports.getPosts = async (request, response, next) => {
  Post.find({}, (err, allPosts) => {
    if (err) {
      response.status(500).json({ message: "Cannot retrieve data" });
    }
    response.status(200).json(allPosts);
  });
};
exports.getUserPosts = async (request, response, next) => {
  const { userId } = request.params;
  Post.find({ ownerId: userId }, (err, userPosts) => {
    if (err) {
      response.status(500).json({ message: "Cant retrieve the user posts" });
    }
    response.status(200).json(userPosts);
  });
};
exports.getUserPost = async (request, response, next) => {
  const { userId, postId } = request.params;
  Post.find({ _id: postId }, (err, post) => {
    if (err) {
    }
    response.status(200).json(post);
  });
};

exports.getPostComments = async (request, response, next) => {
  const { postId } = request.params;

  try {
    const comments = await Comment.find({ postId: postId }).populate("ownerId");
    response.status(200).json(comments);
  } catch (err) {
    response.status(500).json({ message: "Cant retrieve the user posts" });
  }
};

exports.getPostComment = async (request, response, next) => {
  const { postId, commentId } = request.params;
  Comment.find({ _id: commentId }, (err, comment) => {
    if (err) {
    }
    response.status(200).json(comment);
  });
};

exports.getPost = async (request, response, next) => {
  const { postId } = request.params;
  try {
    const post = await (await Post.findById(postId)).populate("ownerId");
    response.status(200).json(post);
  } catch (err) {
    response.status(500).json({ error: err });
  }
};

exports.createPost = async (request, response, next) => {
  const body = request.body;
  try {
    const createdPost = await Post.create({ ...body });
    return response.status(201).json(createdPost);
  } catch (err) {
    return response.status(500).json({ message: err });
  }
};
exports.deletePost = async (request, response, next) => {
  const { postId } = request.params;
  try {
    await Post.findOneAndRemove({ _id: postId });
    response
      .status(202)
      .json({ message: "You've succesfully deleted the post" });
  } catch (err) {
    response.status(500).json({ error: err });
  }
};

exports.updatePost = async (request, response, next) => {
  const { postId } = request.params;
  try {
    await Post.findOneAndUpdate({ _id: postId }, request.body, { new: true })
      .then((res) => {
        response.status(202).json({
          Post: res,
          message: "You've succesfully updated the post",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    response.status(500).json({ error: err });
  }
};
