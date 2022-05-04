module.exports = (app) => {
  const store = {};
  app.sessionStore = {
    async get(key) {
      console.log("store->", store);
      return store[key];
    },
    async set(key, value, maxAge) {
      store[key] = value;
    },
    async destroy(key) {
      store[key] = null;
    },
  };

  const mids = app.config.coreMiddleware;
  app.config.coreMiddleware = [
    ...mids,
    ...["interfaceLimit", "allowHosts", "notFound", "auth"],
  ];

  // 先后顺序有要求，先判断接口是否存在，再判断auth
  
};
