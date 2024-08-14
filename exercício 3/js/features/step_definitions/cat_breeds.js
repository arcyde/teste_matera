const axios = require('axios');
const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

const BASE_URL = 'https://catfact.ninja';
let response;

Given('I am making a GET request to the valid {string} endpoint', function (endpoint) {
  this.endpoint = `${BASE_URL}/breeds`;
  response = null;
});

When('I send the valid request', async function () {
  response = await axios.get(this.endpoint);
});

Then('I should receive a succesful {string} response', function (statusCode) {
  assert.strictEqual(response.status, 200, `Status code should be ${statusCode}, not ${response.status}`);
});

Then('the response body should contain a list of cat breeds', function () {
  const data = response.data;
  assert.ok(data.hasOwnProperty('data'), 'Response body does not contain valid "data"');
  assert.ok(Array.isArray(data.data), 'Response body invalid');
  assert.ok(data.data.length > 0, 'Response body is empty');
});

Given('I am making a GET request to the invalid {string} endpoint', function (endpoint) {
  this.endpoint = `${BASE_URL}/invalid-route`;
  response = null;
});

When('I send the invalid request', async function () {
  try {
    response = await axios.get(this.endpoint);
  } catch (error) {
    response = error.response;
  }
});

Then('I should receive a unsuccesful {string} response', function (statusCode) {
  assert.strictEqual(response.status, 404, `Status code should be ${statusCode}, not ${response.status}`);
});
