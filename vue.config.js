const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const isPro = process.env.NODE_ENV === "production";
const externals = { vue: "Vue", vuex: "Vuex", "vue-router": "VueRouter", axios: "axios", vant: "Vant", hljs: "hljs" };
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "./",
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src")).set("@less", resolve("src/assets/less"));

    if (isPro) {
      config.plugins.delete("preload");
      config.plugins.delete("prefetch");
      config.optimization.minimize(true);
    }
  },
  configureWebpack: (config) => {
    if (isPro) {
      config.externals = externals;
      config.plugins.push(
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_debugger: true,
              drop_console: true,
            },
          },
          sourceMap: false,
          parallel: true,
        })
      );
    }
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    requireModuleExtension: true,
  },
};
