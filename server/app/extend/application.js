// 对application的扩展，扩展名必须用application.js
const path = require('path');
module.exports = {
  // 方法扩展
  // ↓ 获取package.json中的内容
  package(key) {
    const pack = getPack();
    return key ? pack[key] : pack;
  },

  // 属性扩展
  get allPackage() {
    return getPack();
  }
}

function getPack() {
  const filePath = path.join(process.cwd(), 'package.json');
  const pack = require(filePath); // pack就是package.json中的内容
  return pack;
}