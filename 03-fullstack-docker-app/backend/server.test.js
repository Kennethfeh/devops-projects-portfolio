const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const { createApp } = require('./server');

test('health endpoint works', async () => {
  const res = await request(createApp()).get('/api/health');
  assert.equal(res.status, 200);
  assert.equal(res.body.status, 'healthy');
});

test('notes API creates notes', async () => {
  const app = createApp();
  const createRes = await request(app).post('/api/notes').send({ text: 'hello' });
  assert.equal(createRes.status, 201);
  const listRes = await request(app).get('/api/notes');
  assert.ok(listRes.body.find((n) => n.text === 'hello'));
});
