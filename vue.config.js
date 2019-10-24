const path = require('path')

// 获取src目录在硬盘的全路径，比如'f:\code\admin-pc\src'
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/vue-cli3-lerna-ui/',

    transpileDependencies: [
        /@vt/
    ],
    devServer: {
        port: '9527',
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            // 基础系统的ip地址
            [process.env.VUE_APP_BASE_API]: {
                target: `http://10.100.172.150:9110`,
                changeOrigin: true,
                pathRewrite: {
                    ['^' + process.env.VUE_APP_BASE_API]: ''
                }
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: 'admin-pc',
        resolve: {
            alias: {
                '@': resolve('src'),
                '@vt': resolve('packages')
            }
        }
    }
}
