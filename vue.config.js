const path = require("path");

// 获取src目录在硬盘的全路径，比如'f:\code\admin-pc\src'
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: '/vue-cli3-lerna-ui/',

  transpileDependencies: [
    /@vt/
  ],
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "admin-pc",
    resolve: {
      alias: {
        "@": resolve("src"),
        "@vt": resolve("packages"),
      }
    }
  },
}
