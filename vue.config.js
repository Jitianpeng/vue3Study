const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
    devServer: {
        host: 'localhost',
        open: true,
    },
    css: {
        loaderOptions: {
        less: {
            lessOptions: {
            javascriptEnabled: true
            }
        }
        }
    }
})
