module.exports = {
  set token(key) {
    // this.set(arg1, arg2); // arg1是想要得到的，请求头中的key
    this.set("token", key)
  }
}