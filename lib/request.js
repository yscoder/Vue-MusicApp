var http = require('http');

module.exports = function(options) {
    return new Promise(function(resolve, reject) {
        var req = http.request(options, function(res) {

            var body = '';

            res.setEncoding('utf8');
            res.on('data', function(data) {
                body += data;
            });

            res.on('end', function() {

                resolve(body);
            });

        });

        req.on('error', function(e) {
            reject(e);
        });

        req.end();
    });
}
