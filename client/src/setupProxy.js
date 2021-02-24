const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    ["/recipes", "/authentication"],
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true
    })
  );
};
