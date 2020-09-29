module.exports = {
  productionSourceMap: false,
  transpileDependencies: [
    "vuetify"
  ],
  publicPath: '', //相对路径
  outputDir: 'blog',
  // 配置转发代理
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/mapi': {
        target: 'https://autumnfish.cn/',
        changeOrigin: true, //true允许跨域
        ws: true,
        pathRewrite: {'^/api' : ''} //rewrite重写
      },
      '/api': {
        target: 'http://127.0.0.1:3000/api/',
        changeOrigin: true, //true允许跨域
        pathRewrite: {'^/api' : ''} //rewrite重写
      }
    }
  }
}
