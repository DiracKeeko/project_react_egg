module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const House = app.model.define('house', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: STRING(50),
    info: STRING(150),
    addres: STRING(200),
    price: INTEGER,
    publishTime: {
      type: DATE,
      get(){
        return new Date(this.getDataValue('publishTime')).getTime()
      }
    },
    cityCode: STRING,
    showCount: INTEGER,
    startTime: {
      type: DATE,
      get(){
        return new Date(this.getDataValue('startTime')).getTime()
      }
    },
    endTime: {
      type: DATE,
      get(){
        return new Date(this.getDataValue('endTime')).getTime()
      }
    }
  });
  
  return House;
}