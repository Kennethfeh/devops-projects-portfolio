const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const { createApp } = require('./server');

test('gateway aggregates service responses', async () => {
  const mockFetch = async (url) => {
    if (url.includes('service1')) {
      return { json: async () => ({ service: 'service1', message: 'ok' }) };
    }
    if (url.includes('service2')) {
      return { json: async () => ({ service: 'service2', status: 'green' }) };
    }
    throw new Error('unexpected url');
  };
  const res = await request(createApp(mockFetch)).get('/api/aggregate');
  assert.equal(res.status, 200);
  assert.equal(res.body.service1.service, 'service1');
  assert.equal(res.body.service2.service, 'service2');
});
