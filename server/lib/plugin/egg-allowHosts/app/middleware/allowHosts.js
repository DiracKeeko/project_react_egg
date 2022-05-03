module.exports = (options) => {
  return async (ctx, next) => {
    const { referer } = ctx.request.header;
    // console.log(referer)
    if (referer) {
      const url = new URL(referer);
      // console.log("url->", url); // url是一个对象
      if (options.includes(url.host)) {
        await next();
      } else {
        ctx.body = {
          status: 403,
          errMsg: `host ${url.host} 被禁止`,
        };
      }
    } else {
      await next();
    }
  };
};
