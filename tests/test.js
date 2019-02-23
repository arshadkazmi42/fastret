const expect = require('chai').expect;

const fastRet = require('../index');

const GET_API = {
  'url': 'https://jsonplaceholder.typicode.com/todos/1',
  'headers': {},
  'body': {},
  'method': 'GET',
  'skip_keys': ['title'],
  'response': {
    'userId': 1,
    'id': 1,
    'title': 'delectus aut aute',
    'completed': false
  }
};

const POST_API = {
  'url': 'https://jsonplaceholder.typicode.com/posts',
  'headers': {},
  'body': {
    'title': 'Test title',
    'body': 'Test post api body'
  },
  'method': 'POST',
  'skip_keys': ['id'],
  'response': {
    'title': 'Test title',
    'body': 'Test post api body'
  }
};

describe('GET APIs', () => {
  it('should match response with expected', async () => {
    const isPassed = await fastRet(GET_API);
    expect(isPassed).to.equal(true);
  });
  it('should not match response with expected', async () => {
    GET_API.skip_keys = [];
    const isPassed = await fastRet(GET_API);
    expect(isPassed).to.equal(false);
  });
});

describe('POST APIs', () => {
  it('should match response with expected', async () => {
    const isPassed = await fastRet(POST_API);
    expect(isPassed).to.equal(true);
  });
  it('should not match response with expected', async () => {
    POST_API.skip_keys = [];
    const isPassed = await fastRet(POST_API);
    expect(isPassed).to.equal(false);
  });
});
