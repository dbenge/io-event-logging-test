var request = require('request-promise');
var DocumentDBClient = require('documentdb').DocumentClient;
var docDbClient;
var databaseId;
var collectionId = 'AdobeAuth';
var docDbHost;
var docDbAuthKey;

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

function storeAuth(){
  var authDao = new AuthDao(docDbClient, databaseId, collectionId);
}

function main(params) {
  /* respond to the challenge request with an echo */
  if (params.challenge) {
    return { "challenge": params.challenge };
  }
  
  /* setup the doc db client with host and auth */
  docDbClient = new DocumentDBClient(docDbHost, {
    masterKey: docDbAuth
  });

  if(params.echo){
    return { "echo": params.echo };
  }

  logData(params);
}

exports.main = main;
