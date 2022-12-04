const express = require("express");
const router = express.Router();
const {
  createComment,
  getComments,
  getComment,
  deleteComment,
  updateComment,
} = require("../controller/comments/comments");

router.post("/", createComment);
router.get("/", getComments);
router.get("/:commentId", getComment);
router.delete("/:commentId", deleteComment);
router.put("/:commentId", updateComment);
module.exports = router;
