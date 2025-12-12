const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const { createApp } = require('./server');

test('service1 responds with metadata', async () => {
  const res = await request(createApp()).get('/api/service1');
  assert.equal(res.status, 200);
  assert.equal(res.body.service, 'service1');
});
