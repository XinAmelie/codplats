const { defineConfig } = require('@vue/cli-service')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const webpack = require('webpack')

const port = process.env.port || process.env.npm_config_port || 9528 // dev port

module.exports = defineConfig({

  devServer: {
    host: 'localhost.charlesproxy.com', // 远程调试
    // host: '192.168.1.106',
    port,
    allowedHosts: 'all', // 想要配置域名运行vue的项目，必须加这个参数  http://khiqdd.natappfree.cc/#/login
    proxy: {
      // 当地址中有/api的时候会触发代理机制
      '/api': {
        // 要代理的服务器地址  这里不用写 api
        // debug调试用 http://localhost.charlesproxy.com:8000/
        // 联调 http://localhost.charlesproxy.com:8999/
        target: 'http://localhost.charlesproxy.com:8999/',
        changeOrigin: true // 是否跨域
      }
    }
  },
  // 配置webpack的插件
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery',
        process: 'process/browser'
      })

    ]
  },
  transpileDependencies: true,
  lintOnSave: false
})
