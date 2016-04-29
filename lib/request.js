var http = require('http');
var url = require('url');
var querystring = require('querystring');

function request(method, urlStr, args) {

    var option = url.parse(urlStr);
    option.method = method;

    if(args) {
        var query = '?' + querystring.stringify(args) + (option.query ? '&' + option.query : '');
        option.path = option.pathname + query;
    }
  
    return new Promise(function(resolve, reject) {

        var req = http.request(option, function(res) {

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

module.exports = function(url) {

    return {
        get: function(args) {
            return request('GET', url, args);
        },
        post: function(args) {
            return request('POST', url, args);
        },
        put: function(args) {
            return request('PUT', url, args);
        },
        delete: function(args) {
            return request('DELETE', url, args);
        }
    };

};
