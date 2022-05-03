/* eslint valid-jsdoc: "off" */

"use strict";
const path = require("path");

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1645458417257_5743";

  // add your middleware config here
  config.middleware = ["httpLog"];

  // ↓ 配置 httpLog middleware options
  config.httpLog = {
    type: "test",
  };

  config.allowHosts = ['localhost:8000', '127.0.0.1:8000'];

  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.view = {
    mapping: {
      ".html": "ejs", // 以.html结尾的文件用ejs模板引擎渲染
    },
    root: path.join(appInfo.baseDir, "app/html"), // 配置模板引擎的根目录为app/html
    // ↓ 模板多目录配置
    // root: [
    //   path.join(appInfo.baseDir, "app/html"),
    //   path.join(appInfo.baseDir, "app/view")
    // ].join(",")
  };
  config.ejs = {
    // delimiter: "$" // 定界符<$= id $>, 这里修改是修改全局的定界符
    delimiter: "%",
  };

  config.static = {
    prefix: "/assets/", // 静态资源路径默认前缀
    dir: path.join(appInfo.baseDir, "app/assets"), // 静态资源放置路径
  };

  config.session = {
    key: "KEEKO_SESS", // 设置session的key, 默认值是EGG_SESS
    httpOnly: true,
    maxAge: 1000 * 60, // 60秒过期
    renew: true, // 在过期时间到1/2 maxAge的时候如果再次访问，会重置maxAge
  };

  config.auth = {
    exclude: ["/api/user/login", "/api/user/register"],
  };

  config.mysql = {
    app: true, // 是否将mysql挂载到app下  true (默认)
    agent: false, // 是否挂载到代理下面 false (默认)
    client: {
      host: "127.0.0.1",
      port: "3306",
      user: "root",
      password: "root",
      database: "egg",
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'root',
    database: 'egg_house',
    define: {
      timestamps: false,
      freezeTableName: true
    }
  };

  config.jwt = {
    secret: 'keeko'
  }

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: 'keeko',
      db: 0
    }
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    salt: 'keeko',
    redisExpire: 60 * 60 * 24
  };

  return {
    ...config,
    ...userConfig,
  };
};
