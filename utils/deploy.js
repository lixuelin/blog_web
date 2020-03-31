const scpClient = require("scp2");
const config = require("../config/service.config").service;
// const chalk = require("chalk");
scpClient.scp("dist/", config, function(err) {
  if (err) {
    console.log("发布失败.");
    throw err;
  } else {
    console.log("Success! 成功发布到");
  }
});
