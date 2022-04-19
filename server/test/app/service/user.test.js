'use strict';

const { app, assert } = require('egg-mock/bootstrap');

// ↓ service单元测试
describe('service user test', () => {
  it.only('user detail', async () => {
  // it('user detail', async () => {
    const ctx = app.mockContext();
    const user = await ctx.service.user.detail(10);
    assert(user); // 断言  user存在
    assert(user.id === 10); // 断言 user.id === 10
  });
});
