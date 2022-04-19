"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {

  encode(str = ''){
    return new Buffer(str).toString("base64");
  }
  decode(str = ''){
    return new Buffer(str, "base64").toString();
  }

  async index() {
    const { ctx } = this;

    // ***************cookie***************
    // ctx.cookies.set("zh", "测试"); // 会报错, egg.js 无法设置中文cookie
    ctx.cookies.set("zh", "中文测试", {
      encrypt: true
    });

    // const zhUnEncrypt = ctx.cookies.get("zh");
    // console.log("zhUnEncrypt->", zhUnEncrypt); // undefined
    // 加密过的cookie key 无法直接获取
    // ↓ 需要在get时也配置encrypt
    const zh = ctx.cookies.get("zh", {
      encrypt: true
    });
    // console.log("zh->", zh) // 中文测试

    ctx.cookies.set("base64", this.encode("中文base64"));
    const base64 = this.decode(ctx.cookies.get("base64"));

    
    // ***************session***************
    // 获取session
    const session = ctx.session.user;
    const zhSession = ctx.session.zh;
    console.log("session->", session);
    console.log("zhSession->", zhSession); // session直接支持中文


    const user = ctx.cookies.get("user");
    // ↓ render app/view/ 目录下面的文件
    await ctx.render(
      "user.html",
      {
        id: 100,
        name: "admin",
        lists: ["js", "ts", "php"],
        user: user ? JSON.parse(user) : null,
        zh,
        base64
      },
      {
        delimiter: "%", // 指定这个文件渲染的定界符
      }
    );
  }

  async lists() {
    const { ctx, app } = this;
    // console.log("mysql->", app.mysql);
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 1000);
    // });

    // const res = await ctx.service.user.lists(); // 调用service.user
    // const res = await ctx.model.User.findAll(); // egg-sequelize操作
    const res = await ctx.model.User.findAll({ 
      // where: {
      //   id: 7
      // }
      limit: 5, //每页5条
      offset: 0 //偏移量
    }); // egg-sequelize操作

    ctx.body = res;
  }

  async login() {
    const { ctx } = this;
    const body = ctx.request.body;
    ctx.cookies.set("user", JSON.stringify(body), {
      maxAge: 1000 * 60 * 10,
      httpOnly: false, // httpOnly 默认为true
    });

    // 设置session, egg.js中已经封装了,操作起来比cookie简单
    ctx.session.user = body;
    ctx.session.zh = "中文测试";
    ctx.session.test = "test";

    ctx.body = {
      status: 200,
      data: body,
    };
  }

  async logout() {
    const { ctx } = this;
    
    // 清楚cookie
    ctx.cookies.set("user", null);

    //清除session
    ctx.session.user = null;

    ctx.body = {
      status: 200,
    };
  }

  async detail() {
    const { ctx } = this;
    // console.log("ctx.query->", ctx.query); // 如 {id: 100}
    // query ↓ 对应query型 /user?id=2
    // const res = await ctx.service.user.detail(10);
    const res = await ctx.model.User.findByPk(ctx.query.id);
    console.log("res->", res);
    ctx.body = res;
  }

  async detail2() {
    const { ctx } = this;
    // console.log("ctx.params->", ctx.params); // 如 {id: 200}
    // params ↓ 对应restful型路由 /user/:id  -> /user/3
    const res = await ctx.service.user.detail2(ctx.params.id);
    ctx.body = res;
  }

  async add() {
    const { ctx } = this;

    // const rule = {
    //   name: { type: "string" },
    //   age: { type: "number" },
    // };
    // ctx.validate(rule);

    // const res = await ctx.service.user.add(ctx.request.body);
    const res = await ctx.model.User.create(ctx.request.body);
    ctx.body = {
      code: 0,
      data: res,
      msg: "",
    };
    // const res = await ctx.service.user.add(ctx.request.body);
  }

  // ↓ edit方法使用put请求，put的参数与post类似
  async edit() {
    const { ctx } = this;
    // const res = await ctx.service.user.edit(ctx.request.body);
    const user = await ctx.model.User.findByPk(ctx.request.body.id);
    if (!user) {
      ctx.body = {
        code: 1,
        msg: "err, id not found",
      };
      return;
    }
    const res = await user.update(ctx.request.body);
    console.log("res->", res);
    ctx.body = {
      code: 0,
      data: res,
      msg: "",
    };
  }

  // ↓ delete方法使用delete请求，delete的参数与post类似
  async del() {
    const { ctx } = this;
    // const res = await ctx.service.user.del(ctx.request.body.id);
    const user = await ctx.model.User.findByPk(ctx.request.body.id);
    if (!user) {
      ctx.body = {
        code: 1,
        msg: "err, id not found",
      };
      return;
    }
    const res = await user.destroy(ctx.request.body.id);
    ctx.body = {
      code: 0,
      data: res,
      msg: "",
    };
  }
}

module.exports = UserController;
