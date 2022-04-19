'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async lists() {
    try {
      const { ctx, app } = this;
      // 查询整张表 mysql.select("user"); mysql.selset("表名");
      const res = await app.mysql.select("user"); // egg-mysql操作
      return res;
    } catch (err) {
      console.log("err->", err);
      return null;
    }
  }
  async detail(id) {
    return {
      id,
      name: 'John',
      age: 18,
    };
  }
  async detail2(id) {
    try {
      const { app } = this;
      // 查询单条数据 mysql.get("表名", {});
      const res = await app.mysql.get("user", {id}); 
      return res;
    } catch (err) {
      console.log("err->", err);
      return null;
    }
  }
  async add(params) {
    try {
      const { app } = this;
      // 插入单条数据 表结构有两列name, pwd params也必须对应{name: "xxx", pwd: "yyy"} 否则会报错
      const res = await app.mysql.insert("user", params);
      return res;
    } catch (err) {
      console.log("err->", err);
      return null;
    }
  }
  async edit(params) {
    try {
      const { app } = this;
      // 修改数据
      const res = await app.mysql.update("user", params);
      return res;
    } catch (err) {
      console.log("err->", err);
      return null;
    }
  }
  async del(id) {
    try {
      const { app } = this;
      // 删除数据
      const res = await app.mysql.delete("user", {id});
      return res;
    } catch (err) {
      console.log("err->", err);
      return null;
    }
  }

}

module.exports = UserService;
