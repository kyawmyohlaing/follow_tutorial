var StellarSdk = require('stellar-sdk');
var  server = new StellarSdk.Server('http://165.22.32.19:8000',{allowHttp: true});


server.accounts()
  .accountId("GB3D7L2YEHKGCIOTGCHPUOZGBBT6VRRSJ6BW6XRQU2GO5FG7KPQHEAG2")
  .call()
  .then(function (accountResult) {
    console.log(accountResult);
  })
  .catch(function (err) {
    console.error(err);
  })