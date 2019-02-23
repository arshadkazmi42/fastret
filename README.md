# fastret

[![Build Status](https://travis-ci.com/arshadkazmi42/fastret.svg?branch=master)](https://travis-ci.com/arshadkazmi42/fastret)

Fastret helps you to test your REST api quickly, just by passing api details as json

> Give us a :star: if you like our work :heart:

## Install

```
$ npm install fastret --save
```

## Usage

```javascript
const fastRet = require('fastret');

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

const isPassed = await fastRet(GET_API);
// Output -> true
```

## Contributing

Interested in contributing to this project?
You can log any issues or suggestion related to this library [here](https://github.com/arshadkazmi42/fastret/issues/new)

Read our contributing [guide](CONTRIBUTING.md) on getting started with contributing to the codebase

## Contributors

Thank you to all the contributors who have helped us in making this project better :raised_hands:

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>

## Libraries

List of libraries using `fastret`

 - [FastRet Framework](http://github.com/arshadkazmi42/fastret-framework)
