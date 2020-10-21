var request = require('request');
    var StellarSdk = require('stellar-sdk');
    
    var pair = StellarSdk.Keypair.random();
    
    console.log("Secret: " + pair.secret());
    console.log("Public: " + pair.publicKey());
    
    request.get({
      url: 'http://165.22.32.19:8000',
      qs: { addr: pair.publicKey() },
      json: true
    }, function(error, response, body) {
      if (error || response.statusCode !== 200) {
        console.error('ERROR!', error || body);
      }
      else {
        console.log('SUCCESS! You have a new account :)\n', body);
    
        request.get({
            url: 'http://165.22.32.19:8000/accounts/' + pair.publicKey(),        
            json: true
          }, function(error, response, body) {
            if (error || response.statusCode !== 200) {
              console.error('ERROR!', error || body);
            }
            else {
              console.log(body);
            }
          });
      }
    });