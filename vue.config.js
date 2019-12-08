module.exports = {
  pages: {
    admin: {
      // 应用入口配置，相当于单页面应用的main.js，必需项
      entry: "src/modules/admin/admin.js",
      // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
      template: "public/admin.html",
      // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
      filename: "admin.html",
      // 标题，可选项，一般情况不使用，通常是在路由切换时设置title
      // 需要注意的是使用title属性template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: "admin page"
      // 包含的模块，可选项
      // chunks: ['admin']
    },
    index: "src/main.js"
  },
  lintOnSave: false,
  devServer: {
    open: false, // 是否自动打开页面
    host: "0.0.0.0", // 域名
    port: "8080", // 端口号
    https: false, // 是否使用https
    hotOnly: true, // 热更新
    proxy: {
      // 配置跨域
      "/": {
        target: "http://0.0.0.0:8088/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          // 使用 '/api代替target'
          "^/": ""
        }
      }
    }
  }
};
