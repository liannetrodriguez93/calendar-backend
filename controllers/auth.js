const { response } = require("express");
const { validationResult } = require("express-validator");
const UserModel = require("../models/UserModel");

const createUser = async (req, res = response) => {
  console.log('req', req);

  try {
    const user = new UserModel(req.body);
    await user.save();
  
    res.status(201).json({
      ok: true,
      msg: "register",
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Server error",
    });
  }
};

const login = (req, res = response) => {
  const { email, password } = req.body;

  res.json({
    ok: true,
    msg: "login",
    email,
    password,
  });
};

const refreshToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: "refresh",
  });
};

module.exports = {
  createUser,
  login,
  refreshToken,
};
