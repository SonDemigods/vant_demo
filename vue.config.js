const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  // outputDir: '../docs',
  publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
  },
};