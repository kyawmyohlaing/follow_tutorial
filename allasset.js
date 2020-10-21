var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('http://165.22.32.19:8000',{allowHttp: true});

server.assets()
  .call()
  .then(function (result) {
    console.log(result.records);
  })
  .catch(function (err) {
    console.log(err)
  })