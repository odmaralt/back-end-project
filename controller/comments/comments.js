const express = require("express");

const router = express.Router();
const Comment = require("../../models/commentSchema");
exports.createComment = async (request, response, next) => {
  const body = request.body;
  try {
    const createdComment = await Comment.create({ ...body });
    return response.status(201).json(createdComment);
  } catch (err) {
    return response.status(500).json({ message: err });
  }
};
exports.getComments = async (request, response, next) => {
  const comments = Comment.find({}, (err, allComments) => {
    if (err) {
      response.status(500).json({ message: "Cannot retrieve data" });
    }
    response.status(200).json(allComments);
  });
  console.log(comments);
};
exports.getComment = async (request, response, next) => {
  const { commentId } = request.params;
  try {
    const comment = await Comment.findById(commentId)
      .populate("ownerId")
      .populate("postId");
    response.status(200).json(comment);
  } catch (err) {
    response.status(500).json({ error: err });
  }
};
exports.deleteComment = async (request, response, next) => {
  const { commentId } = request.params;
  try {
    await Comment.findOneAndRemove({ _id: commentId });
    response
      .status(202)
      .json({ message: "You've succesfully deleted your comment" });
  } catch (err) {
    response.status(500).json({ error: err });
  }
};

exports.updateComment = async (request, response, next) => {
  const { commentId } = request.params;
  try {
    await Comment.findOneAndUpdate({ _id: commentId }, request.body, {
      new: true,
    })
      .then((res) => {
        response
          .status(202)
          .json({
            Comment: res,
            message: "You've succesfully updated your comment",
          });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    response.status(500).json({ error: err });
  }
};
