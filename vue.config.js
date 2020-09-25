module.exports = {
  productionSourceMap: false,
  transpileDependencies: [
    "vuetify"
  ],
  // 配置转发代理
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/api/',
        changeOrigin: true, //true允许跨域
        pathRewrite: {'^/api' : ''} //需要rewrite重写的, 如果在服务器端做了处理则可以不要这段
      }
    }
  }
}
