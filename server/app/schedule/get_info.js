const Subscription = require("egg").Subscription;

class getInfo extends Subscription {
  static get schedule() {
    return {
      // interval: 3000, // 单位ms
      cron: "*/30 * * * * *", // 这里的*/3 等价于上面的interval: 3000
      // ↑  s min h d m w // 目前只支持6个参数
      type: "worker", // "all" / "worker"  
      // "all"->所有的worker都执行这个定时任务
      // "worker"-> master进程会制定一个worker进程来单独执行这个定时任务
    }
  }

  async subscribe() {
    // 在这个方法里执行业务逻辑
    // const info = "INFO";
    const info = this.ctx.info;
    console.log(Date.now() / 1000, info);
  }
}

// module.exports = getInfo;
module.exports = undefined;