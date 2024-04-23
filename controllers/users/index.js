const signup = require("./signup");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const subscription = require("./subscription");
const updateAvatar = require("./updateAvatar");
const verifyEmail = require("./verifyEmail");
const resendVerifyEmail = require("./resendVerifyEmail");

module.exports = {
  signup,
  login,
  logout,
  current,
  subscription,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};
