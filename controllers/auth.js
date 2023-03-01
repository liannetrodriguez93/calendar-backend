const { response } = require("express");
const bcrypt = require("bcryptjs");

const UserModel = require("../models/UserModel");
const { generateJWT } = require("../helpers/jwt");

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

    //Generate JWT
    const validPassword = bcrypt.compareSync(password, user.password);

    res.status(201).json({
      ok: true,
      msg: {
        uid: user.id,
        name: user.name,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Server error",
    });
  }
};

const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "User or password are wrong",
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "User or password are wrong",
      });
    }

    //Generate JWT
    const token = await generateJWT(user.id, user.name);

    res.json({
      ok: true,
      msg: {
        uid: user.id,
        name: user.name,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: "Server error",
    });
  }
};

const refreshToken = (req, res = response) => {
  try {
    res.json({
      ok: true,
      msg: "refresh",
    });
  } catch (error) {
    
  }
};

module.exports = {
  createUser,
  login,
  refreshToken,
};
