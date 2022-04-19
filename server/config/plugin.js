'use strict';

const path = require('path');

/** @type Egg.EggPlugin */
// module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
// };

exports.validate = {
  enable: true,
  package: 'egg-validate',
};

exports.ejs = {
  enable: true,
  package: 'egg-view-ejs'
};

// ↓ auth是一个插件(不同于中间件) 插件放置于app/lib/plugin/egg-auth
exports.auth = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-auth')
  // package: "xxx", // package指向第三方包名, path指向插件, 
  // package属性和path属性互斥
};
// auth还要在 root/app.js中有额外的配置 app.config.coreMiddleware.push('auth');

exports.info = {
  enable: true,
  path: path.join(__dirname, '../lib/plugin/egg-info')
};

exports.mysql = {
  enable: true,
  package: "egg-mysql"
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize'
};