const fs = require('fs');
const got = require('got');
const ora = require('ora');

const spinner = ora();

const TEST_DATA = require('./data.json');
