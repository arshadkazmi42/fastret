const rp = require('request-promise');


const api = async function({url, method, headers={}, body={}}) {
  try {
    const options = {
      method: method,
      uri: url,
      headers: headers,
      json: true
    };

    // Adding body to options if not empty
    if (Object.keys(body).length > 0) {
      options[body] = body;
    }

    return await rp(options);
  } catch (err) {
    throw err;
  }
};


module.exports = api;
