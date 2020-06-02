const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
const HtmlWebpackPlugin = require("html-webpack-plugin");

const cdn = {
  css: [
    "https: //unpkg.com/vant/lib/vant-css/index.css",
    "https://s1.pstatp.com/cdn/expire-1-M/highlight.js/9.15.6/styles/github.min.css",
  ],
  js: [
    "https://lib.baomitu.com/vue/2.6.11/vue.runtime.min.js",
    "https://lib.baomitu.com/vue-router/3.1.3/vue-router.min.js",
    "https://lib.baomitu.com/vuex/4.0.0-alpha.1/vuex.min.js",
    "https://lib.baomitu.com/axios/0.19.2/axios.min.js",
    "https://s0.pstatp.com/cdn/expire-1-M/highlight.js/9.15.6/highlight.min.js",
  ],
};

const cdn_js = [
  "https://lib.baomitu.com/vue/2.6.11/vue.runtime.min.js",
  "https://lib.baomitu.com/vue-router/3.1.3/vue-router.min.js",
  "https://lib.baomitu.com/vuex/4.0.0-alpha.1/vuex.min.js",
  "https://lib.baomitu.com/axios/0.19.2/axios.min.js",
  "https://s0.pstatp.com/cdn/expire-1-M/highlight.js/9.15.6/highlight.min.js",
];

const externals = {
  hljs: "hljs",
  vue: "Vue",
  vant: "Vant",
  vuex: "Vuex",
  "vue-router": "VueRouter",
  axios: "axios",
};

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: "./",
  pages: {
    admin: {
      entry: "./src/pages/admin/main.js",
      template: "./public/admin.html",
      filename: "admin.html",
    },
    index: "./src/main.js",
  },
  devServer: {
    port: 8088,
  },
  lintOnSave: false,
  chainWebpack: (config) => {
    config
      .entry("index")
      .add("babel-polyfill")
      .end();
    config.resolve.alias.set("@", resolve("src")).set("@less", resolve("src/assets/less"));

    // 生产环境配置
    if (isProduction) {
      // 删除预加载
      config.plugins.delete("preload");
      config.plugins.delete("prefetch");
      // 压缩代码
      config.optimization.minimize(true);
      // 分割代码
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          vendors: {
            name: "chunk-vendors",
            minChunks: 11,
            test: /[\\/]node_modules[\\/]/,
            priority: 2,
            chunks: "all",
          },
          vant: {
            name: "vendors-vant",
            test: /[\\/]node_modules[\\/]vant[\\/]/,
            chunks: "initial",
            reuseExistingChunk: true,
            enforce: true,
            priority: 3,
          },
          common: { name: "common", chunks: "initial", minChunks: 2, maxInitialRequests: 5, priority: 1 },
        },
      });
      // 生产环境注入cdn

      // config.plugin("html").tap((args) => {
      //   args[0].cdn = cdn;
      //   return args;
      // });
    }
  },
  configureWebpack: (config) => {
    if (isProduction) {
      // 为生产环境修改配置...
      config.externals(externals);
      config.plugins.push(
        //生产环境自动删除console
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
        }),
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i,
          threshold: 10240,
          minRatio: 0.8,
        }),
        new HtmlWebpackPlugin({
          filename: "index.html",
          template: "public/index.html",
          inject: "body",
          minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            // more options:
            // https://github.com/kangax/html-minifier#options-quick-reference
          },
          // necessary to consistently work with multiple chunks via CommonsChunkPlugin
          chunksSortMode: "dependency",
          d_path: "22",
        })
        // new HtmlWebpackPlugin({
        //   filename: "admin.html",
        //   template: "public/admin.html",
        //   inject: "body",
        //   minify: {
        //     removeComments: true,
        //     collapseWhitespace: true,
        //     removeAttributeQuotes: true,
        //     // more options:
        //     // https://github.com/kangax/html-minifier#options-quick-reference
        //   },
        //   // necessary to consistently work with multiple chunks via CommonsChunkPlugin
        //   chunksSortMode: "dependency",
        //   cdn: "11",
        // })
      );
    }
  },
  productionSourceMap: false,
  css: {
    extract: true,
    sourceMap: false,
    requireModuleExtension: true,
    // css预设器配置项
    // loaderOptions: {
    //   // pass options to sass-loader
    //   less: {
    //     // 引入全局变量样式,@使我们设置的别名,执行src目录
    //     data: `
    //             @import "@less/reset.less";
    //         `,
    //   },
    // },
  },
};
