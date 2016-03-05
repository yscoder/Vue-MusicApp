var request = require('../lib/request');
var api = require('../lib/api');
var kuwo = api.kuwo;

exports.index = function() {

    return {
        title: 'Music'
    };
};

exports.search = function(key, pn) {

    return request(kuwo.searchUrl + '?type=music')
        .get({
            key: key,
            pn: pn
        })
        .then(function(body) {
            return kuwo.parse(body, key, pn);
        });
};

exports.download = function(id) {

    return request(kuwo.songUrl)
        .get({
            rid: 'MUSIC_' + id
        })
        .then(function(body) {
            return body;
        });
};
