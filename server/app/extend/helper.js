const dayjs = require('dayjs');

module.exports = {
  base64Encode(str = "") {
    return new Buffer(str).toString("base64");
  },
  time() {
    return dayjs().format("YYYY-MM-DD HH:mm:ss")
  },
  timestamp(date) {
    return new Date(date).getTime(); // 返回时间戳
  },
  unPick(source, arr) {
    if(Array.isArray(arr)) {
      const obj = {};
      for (let i in source) {
        if (!arr.includes(i)) {
          obj[i] = source[i];
        }
      }
      return obj;
    }
  }
}