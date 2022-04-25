// ↓ 插件可以处理业务逻辑 (与之对比，中间件更适合处理请求)
module.exports = (options) => {
  // console.log("options", options);
  return async (ctx, next) => {
    const url = ctx.request.url;
    console.log("url", url);
    const user = ctx.session[ctx.username];

    if (!user && !options.exclude.includes(ctx.request.url.split("?")[0])) {
      ctx.body = {
        status: 1001,
        errMsg: "用户未登录",
      };
    } else {
      await next();
    }
  };
};
