"use strict";

const Controller = require("egg").Controller;
const md5 = require("md5");
const BaseController = require("./base");

class UserController extends BaseController {
  async jwtSign({id, username}) {
    const { ctx, app } = this;
    const token = app.jwt.sign(
      {
        id,
        username,
      },
      app.config.jwt.secret
    );
    // ctx.session[username] = 1;
    await app.redis.set(username, token, "EX", app.config.redisExpire);
    return token;
  }
  parseResult(ctx, res) {
    return {
      ...ctx.helper.unPick(res.dataValues, ["password"]),
      createTime: ctx.helper.timestamp(res.createTime),
    };
  }

  async register() {
    const { ctx, app } = this;
    const params = ctx.params();
    const user = await ctx.service.user.getUser(params.username);

    if (user) {
      this.error("用户已存在");
      return;
    }

    const res = await ctx.service.user.add({
      ...params,
      password: md5(params.password + app.config.salt),
      createTime: ctx.helper.time(),
    });

    if (res) {
      const token = await this.jwtSign({ 
        id: res.id, 
        username: res.username 
      });
      this.success({
        ...parseResult(ctx, res),
        token,
      });
    } else {
      this.error("注册用户失败");
    }
  }

  async login() {
    const { ctx, app } = this;
    const { username, password } = ctx.params();
    const user = await ctx.service.user.getUser(username, password);
    if (user) {
      // 语法: app.jwt.sign(payload, secret key)
      const token = await this.jwtSign({
        id: user.id,
        username: user.username
      });
      // ctx.session[username] = 1;
      this.success({
        ...this.parseResult(ctx, user),
        token,
      });
    } else {
      this.error("该用户不存在");
    }
  }
  async detail() {
    const { ctx } = this;
    // ctx.username -> app/extend/context.js
    const user = await ctx.service.user.getUser(ctx.username);

    if (user) {
      this.success({
        ...this.parseResult(ctx, user),
      });
    } else {
      this.error("该用户不存在");
    }
  }
  async logout() {
    const { ctx } = this;
    ctx.body = {
      status: 200,
      data: "ok",
    };
    try {
      ctx.session[ctx.username] = null; // --todo redis替换后删掉
      this.success("ok");
    } catch (err) {
      this.error("退出登录失败");
    }
  }
  async edit() {
    const { ctx } = this;
    const res = ctx.service.user.edit({
      ...ctx.params(),
      updateTime: ctx.helper.time(),
      sign: ctx.helper.escape(ctx.params('sign')), // escape -> 过滤html标签
    });
    this.success(res);
  }
}

module.exports = UserController;
