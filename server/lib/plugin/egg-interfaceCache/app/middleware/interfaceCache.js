/**缓存接口
 * 1，接口地址作为redis中的key
 * 2，查询redis，有缓存，返回返回接口
 * 3，没有缓存，将接口返回结果保存到redis中
 */
module.exports = (options) => {
  return async (ctx, next) => {
    const { url } = ctx.request;
    const cahce = await ctx.app.redis.get(url);

    if (options.include.includes(url)) {
      if (cahce) {
        ctx.body = JSON.parse(cahce);
        return;
      } else {
        await next(); // next执行完之后 才能得到接口返回的数据
        await ctx.app.redis.set(
          url, // key -> url
          JSON.stringify(ctx.response.body), // value
          "EX", // 过期时间
          options.expire // 10s
        );
      }
    } else {
      await next();
    }
  };
};
