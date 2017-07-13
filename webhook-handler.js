var request = require('request-promise');

function logData(data) {
  var url ='https://requestb.in/u0g37mu0'
  request(url, function (error, response, data) {
    if (!error) {
      console.log(body);
    }
  });
}

function main(params) {
  /* respond to the challenge request with an echo */
  var challenge = params.challenge;
  if (challenge) {
    return { "challenge": challenge };
  }
  
  logData(params);
}
