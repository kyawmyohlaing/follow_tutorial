var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('http://165.22.32.19:8000',{allowHttp: true});

server.accounts()
  .accountId("GB3D7L2YEHKGCIOTGCHPUOZGBBT6VRRSJ6BW6XRQU2GO5FG7KPQHEAG2")
  .call()
  .then(function (account) {
    return account.data({key: 'user-id'})
  })
  .then(function(dataValue) {
    console.log(dataValue)
  })
  .catch(function (err) {
    console.log(err)
  })