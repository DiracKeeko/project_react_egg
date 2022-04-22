module.exports = {
  "printWidth": 80, // 单行长度
  "singleQuote": true, // 是否使用单引号
  "trailingComma": "all",
  "quoteProps": "preserve", // 保持对象key的引号，不做修改
  "overrides": [
    {
      "files": ".prettierrc",
      "options": { "parser": "json" }
    }
  ]
}