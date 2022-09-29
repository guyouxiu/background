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
        target: process.env.VUE_APP_SERVE_URL,
        changeOrigin: true,
        pathRewrite: {
          ["^"+process.env.VUE_APP_PASE_API]: ''
        }


      }
    }
  },
  lintOnSave: false,
  productionSourceMap: false
})
