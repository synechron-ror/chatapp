var http = require('http'),
    faye = require('faye')
    fs = require('fs');

var bayeux = new faye.NodeAdapter({
  mount:    '/faye',
  timeout:  45
});

// Handle non-Bayeux requests
var server = http.createServer(function(request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('This is a non-Bayeux request');
  response.end();
});


var serverAuth = {
  incoming: function(message, callback) {
    // Let non-subscribe messages through
    if (message.channel !== '/meta/subscribe')
      return callback(message);

    // Get subscribed channel and auth token
    var subscription = message.subscription,
        msgToken     = message.ext && message.ext.authToken;

    // Find the right token for the channel
    fs.readFile('./tokens.json', function(err, content) {
      var registry = JSON.parse(content.toString()),
          token    = registry[subscription];

      // Add an error if the tokens don't match
      if (token !== msgToken)
        message.error = 'Invalid subscription auth token';

      // Call the server back now we're done
      callback(message);
    });
  }
};

bayeux.addExtension(serverAuth);

bayeux.attach(server);
server.listen(8000);

