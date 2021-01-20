const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/create/new"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
