const Api = require("./api");
console.log(Api[process.env.NODE_ENV]);

module.exports = {
  service: {
    host: "59.110.231.214",
    port: 22,
    username: "root",
    password: "LXL121314$%",
    path: "/var/www/html",
  },
  api: Api[process.env.NODE_ENV],
};
