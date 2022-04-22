'use strict';

const Controller = require('egg').Controller;
const md5 = require('md5');

class UserController extends Controller {

  async jwtSign() {
    const { ctx, app } = this;
    const username = ctx.request.body.username;
    const token = app.jwt.sign({
      username
    }, app.config.jwt.secret);
    ctx.session[username] = 1;
    return token;
  }

  async register() {
    const { ctx, app } = this;
    const params = ctx.request.body;
    const user = await ctx.service.user.getUser(params.username);

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

    const token = await this.jwtSign();
    if (res) {
      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(res.dataValues, ['password']),
          createTime: ctx.helper.timestamp(res.createTime),
          token
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
    const { ctx, app } = this;
    const { username, password } = ctx.request.body;
    const user = await ctx.service.user.getUser(username, password);
    if (user) {
      // 语法: app.jwt.sign(payload, secret key)
      const token = await this.jwtSign()
      ctx.session[username] = 1;

      ctx.body = {
        status: 200,
        data: {
          ...ctx.helper.unPick(user.dataValues, ['password']),
          createTime: ctx.helper.timestamp(user.createTime),
          token
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
