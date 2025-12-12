const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const { createApp } = require('./server');

test('service2 responds with status', async () => {
  const res = await request(createApp()).get('/api/service2');
  assert.equal(res.status, 200);
  assert.equal(res.body.service, 'service2');
});
