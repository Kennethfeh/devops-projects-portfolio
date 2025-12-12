const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const { createApp } = require('./server');

test('message endpoint responds', async () => {
  const res = await request(createApp()).get('/api/message');
  assert.equal(res.status, 200);
});
