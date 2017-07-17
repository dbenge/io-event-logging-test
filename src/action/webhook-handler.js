var request = require('request-promise');
var documentdb = require('documentdb');

function logData(postData) {
  var options = {
    method: 'post',
    body: postData,
    json: true,
    url: 'https://requestb.in/15rsccl1'
  }

  request(options, function (error, response, data) {
    if (!error) {
      console.log(body);
    }
  });
}

function main(params) {
  /* respond to the challenge request with an echo */
  if (params.challenge) {
    return { "challenge": params.challenge };
  }

  if(params.echo){
    return { "echo": params.echo };
  }

  logData(params);
}

//exports.main = myEntrypoint;
