const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8889,
    host: "localhost",
    open: true,
    https: false,
    proxy: {
      [process.env.VUE_APP_PASE_API]: {
        target: 'VUE_APP_SERVE_URL',
        changeOrigin: true,
        pathRewrite: {
          "^/guyouxiu": ''
        }


      }
    }
  },
  lintOnSave: false,
  productionSourceMap: false
})
