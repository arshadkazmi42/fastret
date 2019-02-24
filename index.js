const deepEqSkip = require('deep-eq-skip');
const isObj = require('is-obj');

const { api } = require('./lib');


const fastRet = async function(data) {

  // Checkes if input is a valid json
  if (!isObj(data)) throw new Error('Invalid JSON');

  // Processing api data from json
  const response = await api(data);
  return deepEqSkip(response, data.response, data.skip_keys);
};


module.exports = fastRet;
