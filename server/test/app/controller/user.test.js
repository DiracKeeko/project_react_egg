'use strict';

const { app } = require('egg-mock/bootstrap');

describe('user test', () => {
  // 语法 it("描述", 回调函数);
  // 回调函数有同步和异步两种模式
  it('/user/index test', () => {
    return app.httpRequest()
      .get('/user')
      .expect(200)
      .expect('user index');
  });

  it('/user/lists test', async () => {
    await app.httpRequest()
      .get('/user/lists')
      .expect(200)
      .expect('[{"id":123}]');
  });

  it('/user/detail test', async () => {
    await app.httpRequest()
      .get('/user/detail?id=2')
      .expect(200)
      .expect('2');
  });

  it('/user/detail2/:id test', async () => {
    await app.httpRequest()
      .get('/user/detail2/3')
      .expect(200)
      .expect('3');
  });

  it('/user/add test', async () => {
    await app.httpRequest()
      .post('/user/add')
      .send({ name: 'John', age: 18 })
      .expect(200)
      .expect({
        code: 0,
        data: {
          name: 'John',
          age: 18,
        },
        msg: '',
      });
  });
});
