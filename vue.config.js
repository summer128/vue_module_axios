module.exports = {
    devServer: {
      open: true,
      proxy: {
        '/news': {
        //  接口请求路径
          target: `http://m.taiecloud.com`,
          changeOrigin: true,
          pathRewrite: {
            '^/news': ''
          }
        }
      }
    }
  }

//   目前没有用到
