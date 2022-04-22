'use strict';

const Controller = require('egg').Controller;
const md5 = require('md5');

class UserController extends Controller {
  async register() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    const user = await ctx.service.user.getUser(params.username);
    const dayjs = require('dayjs');

    if (user) {
      ctx.body = {
        status: 500,
        errMsg: '用户已存在',
      };
      return;
    }

    const res = await ctx.service.user.add({
      ...params,
      password: md5(params.password + app.config.salt),
      createTime: ctx.helper.time()
    });
    if (res) {
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(res.dataValues, ['password']),
          createTime: ctx.helper.timestamp(res.createTime)
        }
      };
    } else {
      ctx.body = {
        status: 200,
        data: '注册用户失败',
      };
    }
  }

  async login() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    const user = await ctx.service.user.getUser(username, password);
    if (user) {
      ctx.session.userId = user.id;
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(user.dataValues, ['password']),
          createTime: ctx.helper.timestamp(user.createTime)
        }
      }
    } else {
      ctx.body = {
        status: 500,
        errMsg: "该用户不存在"
      }
    }
  }
}

module.exports = UserController;
