module.exports = {
  getParams(key) {
    // ↓ 这里的this 就是ctx上下文
    const method = this.request.method;
    if (method === 'GET') {
      return key ? this.query[key] : this.query;
    } else {
      return key ? this.request.body[key] : this.request.body;
    }
  }
}