const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "./",
  pages: {
    admin: "./src/pages/admin/main.js",
    index: "./src/main.js"
  },
  devServer: {
    port: 8088
  },
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("assets", resolve("src/assets"));
  }
};
