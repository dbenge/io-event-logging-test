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
  if (params.challenge) {
    return { "challenge": params.challenge };
  }
  
  if(params.echo){
    return { "echo": params.echo };
  }
  
  logData(params);
}
