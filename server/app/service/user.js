'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async getUser(username) {
    try {
      const { ctx } = this;
      const res = await ctx.model.User.findOne({
        where: { username }
      })
      return res;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async add(params) {
    try {
      const { ctx } = this;
      const res = ctx.model.User.create(params);
      return res;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

}

module.exports = UserService;
