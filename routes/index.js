var cheerio = require('cheerio'),
    request = require('../lib/request');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', {
            title: 'Music'
        });
    });

    app.get('/search/:key', function(req, res) {

        // http://sou.kuwo.cn/ws/NSearch?type=all&key=曾经的你

        var option = {
            host: 'sou.kuwo.cn',
            port: 80,
            path: '/ws/NSearch?type=all&key=' + encodeURIComponent(req.params.key),
            method: 'GET'
        };

        request(option).then(function(body) {
            // 解析 html
            var $ = cheerio.load(body),
                $list = $('.m_list ul li'),
                retData = [];

            $list.each(function(i, el) {
                var $this = $(el);

                retData.push({
                    id: parseInt($this.find('input[name="musicNum"]').val()),
                    name: $this.find('.m_name a').attr('title'),
                    album: $this.find('.a_name a').attr('title'),
                    singer: $this.find('.s_name a').attr('title')
                });
            });

            res.send(retData);
        }, function(e) {
            console.log(e);
        });

    });

    app.get('/download/:id', function(req, res) {
        // http://antiserver.kuwo.cn/anti.s?rid=MUSIC_100062&format=aac|mp3&type=convert_url&response=url

        var option = {
            host: 'antiserver.kuwo.cn',
            port: 80,
            path: '/anti.s?rid=MUSIC_' + req.params.id + '&format=mp3|aac&type=convert_url&response=url',
            method: 'GET'
        };

        request(option).then(function(body) {
            res.redirect(body);
        }, function(e) {
            console.log(e);
        });
    });


};
