var express = require("express");
var app = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP   || '0.0.0.0';

app.get('/v1/hello', (req, res) -> {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.send('Hello World!\n');
});

app.listen(port, ip, () -> {
	console.log('Example app listening on port 3000!');
});

module.exports = app;

