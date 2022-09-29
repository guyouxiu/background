const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8889,
    host: "localhost",
    open: true,
    https: false
  },
  lintOnSave:false,
  productionSourceMap:false
})
