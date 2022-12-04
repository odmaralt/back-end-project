const express = require("express");
const {
  authRegister,
  authLoginWithJwt,
} = require("../authentication/authMiddleware");
const { createUser } = require("../controller/users/users");
const router = express.Router();

router.post("/signUp", authRegister, createUser);
router.post("/login", authLoginWithJwt);

module.exports = router;
