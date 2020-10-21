var EventSource = require('eventsource');
var es = new EventSource('https://165.22.32.19/accounts/GB3D7L2YEHKGCIOTGCHPUOZGBBT6VRRSJ6BW6XRQU2GO5FG7KPQHEAG2/payments',{allowHttp: true});
es.onmessage = function(message) {
    var result = message.data ? JSON.parse(message.data) : message;
    console.log('New payment:');
    console.log(result);
};
es.onerror = function(error) {
    console.log('An error occurred!');
}