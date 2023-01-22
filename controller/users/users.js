const express = require("express");
const { hashFunction } = require("../../bcrypt/bcrypt");
const router = express.Router();
const User = require("../../models/usersSchema");

exports.getUsers = async (request, response, next) => {
  try {
    const users = await User.find();
    response.status(200).json({
      message: true,
      data: users,
    });
  } catch (error) {
    return response.status(400).json({ message: error, data: null });
  }
};
exports.getUser = async (request, response, next) => {
  const { userId } = request.params;

  try {
    const user = await User.findById(userId);
    response.status(200).json(user);
  } catch (err) {
    response.status(500).json({ error: err });
  }
};
exports.deleteUser = async (request, response, next) => {
  const { userId } = request.params;
  try {
    await User.findOneAndRemove({ _id: userId });
    response.status(202).json({ message: "succesfully deleted user" });
  } catch (err) {
    response.status(500).json({ error: err });
  }
};

exports.updateUser = async (request, response, next) => {
  const { userId } = request.params;
  try {
    await User.findOneAndUpdate({ _id: userId }, request.body, { new: true })
      .then((res) => {
        response
          .status(202)
          .json({ User: res, message: "succesfully updated user" });
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    response.status(500).json({ error: err });
  }
};
exports.createUser = async (request, response, next) => {
  const body = request.body;
  if (!body.password) {
    return response.status(404).json({ message: "Bad request" });
  }
  const hashedPassword = hashFunction(body.password);
  try {
    const createdUser = await User.create({
      ...body,
      password: hashedPassword,
    });
    return response.status(201).json(createdUser);
  } catch (err) {
    return response.status(500).json({ message: err });
  }
};
