const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,

  // 方式1 配置代理，不够灵活，只能配置1个服务器
  devServer:{
    proxy:'http://localhost:5000'
  }

  // 方式2
  // devServer:{
  //   proxy:{
  //     '/proapi':{
  //       target:'http://localhost:5000',
  //       //重写路径
  //       pathRewrite:{'^/proapi':''}

  //       //支持ws
  //       // ws:true,
  //       //控制host值
  //       // changeOrigin:true
  //     },
  //     '/carapi':{
  //       target:'http://localhost:5001',
  //       //重写路径
  //       pathRewrite:{'^/carapi':''}

  //       //支持ws
  //       // ws:true,
  //       //控制host值
  //       // changeOrigin:true
  //     }
  //   }
  // }
})
