const { response } = require("express");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/UserModel");

const createUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    let user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "There is already a user with that mail",
      });
    }

    user = new UserModel(req.body);

    //Password encription
    const salt = bcrypt.genSaltSync();
    user.password = bcrypt.hashSync(password, salt);

    await user.save();

    res.status(201).json({
      ok: true,
      data: {
        uid: user.id,
        name: user.name,
      },
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
