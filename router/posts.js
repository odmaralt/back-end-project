const express = require("express");
const router = express.Router();
const {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  getUserPosts,
  getUserPost,
  getPostComments,
  getPostComment,
} = require("../controller/posts/posts");
router.get("/", getPosts);
router.get("/:postId", getPost);
router.post("/", createPost);
router.put("/:postId", updatePost);
router.delete("/:postId", deletePost);
router.get("/:userId/posts", getUserPosts);
router.get("/:userId/posts/:postId", getUserPost);
router.get("/:postId/comments", getPostComments);
router.get("/:postId/comments/:commentId", getPostComment);

module.exports = router;
