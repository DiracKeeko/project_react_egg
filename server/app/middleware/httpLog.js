const dayjs = require("dayjs");
const fs = require("fs");

module.exports = options => {
  return async (ctx, next) => {
    // console.log("ctx->", ctx);
    console.log("options in httpLog middleware->", options);
    const sTime = Date.now();
    const startTime = dayjs().format("YYYY-MM-DD HH:mm:ss");
    const req = ctx.request;
    await next();
    const log = {
      method: req.method,
      url: req.url,
      data: req.body,
      startTime,
      endTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
      timeLength: Date.now() - sTime
    }
    // console.log("log->", log);
    const data = dayjs().format("YYYY-MM-DD HH:mm:ss")
      + " [httpLog] " + JSON.stringify(log) + "\r\n";
    // fs.appendFileSync(ctx.app.baseDir + "httpLog.log", data)
  }
}