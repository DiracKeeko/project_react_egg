module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const House = app.model.define("house", {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: STRING(50),
    info: STRING(150),
    addres: STRING(200),
    price: INTEGER,
    publishTime: {
      type: DATE,
      get() {
        return new Date(this.getDataValue("publishTime")).getTime();
        // 在读数之后，将publishTime字段转化为时间戳
      },
    },
    cityCode: STRING,
    showCount: INTEGER,
    startTime: {
      type: DATE,
      get() {
        return new Date(this.getDataValue("startTime")).getTime();
      },
    },
    endTime: {
      type: DATE,
      get() {
        return new Date(this.getDataValue("endTime")).getTime();
      },
    },
  });

  // 多表关联
  // 一个房子对应多个图片， hasMany  -> 一对多  hasMany
  House.associate = () => {
    app.model.House.hasMany(app.model.Imgs, { foreignKey: "houseId" });
  };

  return House;
};
