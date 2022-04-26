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

  // push的先后顺序有要求，先判断接口是否存在，再判断auth
  app.config.coreMiddleware.push('notFound');
  app.config.coreMiddleware.push('auth');
  // console.log(app.config.coreMiddleware);
};
