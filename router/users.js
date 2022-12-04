const express = require("express");
const { checkToken } = require("../authentication/jwt");
const router = express.Router();
const {
  getUsers,
  getUser,
  deleteUser,
  updateUser,
  createUser,
} = require("../controller/users/users");
router.get("/", checkToken, getUsers);
router.get("/:userId", checkToken, getUser);
router.delete("/:userId", checkToken, deleteUser);
router.put("/:userId", checkToken, updateUser);
router.post("/", checkToken, createUser);

module.exports = router;
