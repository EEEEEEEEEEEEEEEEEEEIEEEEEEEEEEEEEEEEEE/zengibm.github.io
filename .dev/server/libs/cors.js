module.exports = function(obj = {}) {
  new_obj = {
    ...obj,
    origin: function(ctx) {
      if (ctx.url === "/login") {
        return "*"; // 允许来自所有域名请求
      }
      return "http://localhost:9999"; /** 这样就能只允许 http://localhost: 8080 这个域名的请求了 */
    },
    exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
    maxAge: 5,
    credentials: true,
    allowMethods: ["GET", "POST", "DELETE"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"]
  };
  const cors = require("koa-cors");
  return cors(new_obj);
};
