var request = require('request-promise');
var documentdb = require('documentdb');

function logData(postData) {
  var options = {
    method: 'post',
    body: postData,
    json: true,
    url: 'https://requestb.in/u0g37mu0'
  }
  
  request(options, function (error, response, data) {
    if (!error) {
      console.log(body);
    }
  });   
}

function myEntrypoint(params) {
  /* respond to the challenge request with an echo */
  if (params.challenge) {
    return { "challenge": params.challenge };
  }
  
  if(params.echo){
    return { "echo": params.echo };
  }
  
  logData(params);
}

exports.default = myEntrypoint;
