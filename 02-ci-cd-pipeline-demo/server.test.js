const test = require('node:test');
const assert = require('node:assert/strict');
const request = require('supertest');
const { createApp } = require('./server');

test('build-info returns metadata', async () => {
  const res = await request(createApp()).get('/build-info');
  assert.equal(res.status, 200);
  assert.equal(res.body.service, 'ci-cd-pipeline-demo');
});
