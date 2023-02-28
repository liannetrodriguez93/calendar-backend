const { response } = require("express");

const createUser = (req, res = response) => {
  res.json({
    ok: true,
    msg: "register",
  });
};

const login = (req, res = response) => {
  res.json({
    ok: true,
    msg: "login",
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
  refreshToken
};
