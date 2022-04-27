const BaseService = require("./base");

class HouseService extends BaseService {
  async hot() {
    return this.run(async (ctx, app) => {
      const result = await ctx.model.House.findAll({
        limit: 4,
        order: [
          ["showCount", "DESC"], 
          // 按照showCount字段的降序进行排序
        ],
        attributes: {
          exclude: ["startTime", "endTime", "publishTime"], 
          // 去掉不需要的key
        },
        include: [
          {
            model: app.model.Imgs,
            limit: 1,
            attributes: ['url']
          }
        ]
      });

      return result;
    });
  }
}

module.exports = HouseService;
