ing /*
  wsk action update --kind nodejs:6 dbenge.io-event-logging-test.master_io-event-log/handle-webhook action.zip
  manage accounts https://accounts.adobe.com/#
  https://ims-na1.adobelogin.com/ims/authorize/v1?response_type=code&client_id=7c2b2a20e6f440e0a68432d93089b434&scope=AdobeID%2Copenid%2Ccreative_sdk
*/
var request = require('request-promise');
var DocumentDBClient = require('documentdb').DocumentClient;
var AuthDao = require('./models/authDao');
var docdbUtils = require('./models/docdbUtils');
var docDbClient; //db client instance
var authDatabaseId = "AdobeTest";
var authCollectionId = 'test';
var docDbEndpoint = "https://bucky-cosmos-db.documents.azure.com:443/";
var docDbMasterKey="";

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

function storeAuth(document,callback){
  console.info("in store auth with document",document);

  var authDao = new AuthDao(docDbClient, authDatabaseId, authCollectionId);
  authDao.init(function(err,db){
    if (err) {
        console.error("AuthDao init error",err);
        callback(err);
    }else{
        console.info("Storing document");
        authDao.addItem(document,function(err2,doc){
          if (err2) {
              console.error("AuthDao save error",err2);
              callback(err2);
          }else{
              console.info("AuthDao save",doc);
              callback(null,doc);
              /*find the document
              authDao.find('SELECT * FROM c where c.test = "data2"', function(err3,results){
                  if (err3) {
                      console.error("AuthDao find error",err3);
                  }else{
                      console.info("AuthDao find results",results);
                  }
              })
              */
          }
        });
    }
  });
}

function getAuthDatabaseUrl(){
    return "dbs/"+authDatabaseId;
}

function main(params) {
  return new Promise(function(resolve, reject) {
    /* setup the doc db client with host and auth */
    docDbClient = new DocumentDBClient(docDbEndpoint, {"masterKey": docDbMasterKey});

    /* respond to the challenge request with an echo */
    if (params.challenge) {
      resolve({ "challenge": params.challenge });
    }else if (params.subAction == "getUserToken"){
        console.info("handling call to get existing users auth token");
        resolve({ "message": "handling call to get existing users auth token" });
    }else{
        console.info("handling call and storing auth");
        storeAuth(params,function(err,doc){
            if(err){
                reject(err);
            }else{
                resolve({ "message": "authStoreComplete" });
            }
        });
    }
  })
}

exports.main = main;
