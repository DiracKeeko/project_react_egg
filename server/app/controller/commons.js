const Controller = require("egg").Controller;
const BaseController = require("./base");

class CommonsController extends BaseController {
  async citys() {
    const { ctx, app } = this;
    try {
      const result = await app.httpclient.request(
        "https://apis.imooc.com/?icode=89773B5DA84CA283",
        {
          dataType: "json",
        }
      );
      // console.log(result)
      if (result.status === 200) {
        const cityArr = [
          [
            { label: '杭州', value: '10001' },
            { label: '苏州', value: '10002' },
            { label: '上海', value: '10003' },
            { label: '绍兴', value: '10004' },
            { label: '嘉兴', value: '10005' }
          ]
        ]
        this.success(cityArr);
      }
      // if (result.status === 200 && result.data.citys) {
      //   this.success(result.data.citys);
      // } 
      else {
        this.error("获取城市数据失败");
      }
    } catch (error) {
      this.error("获取城市数据失败");
    }
  }
}

module.exports = CommonsController;
