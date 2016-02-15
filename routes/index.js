var cheerio = require('cheerio'),
    querystring = require('querystring'),
    request = require('../lib/request');

module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index', {
            title: 'Music'
        });
    });

    app.get('/favicon.ico', function(req, res) {
        res.status(200);
    });

    app.get('/search/:key/:pn', function(req, res) {

        // http://sou.kuwo.cn/ws/NSearch?type=music&key=曾经的你&pn=1

        var key = req.params.key,
            pn = req.params.pn,
            option = {
                host: 'sou.kuwo.cn',
                port: 80,
                path: '/ws/NSearch?' + querystring.stringify({
                    type: 'music',
                    key: key,
                    pn: pn
                }),
                method: 'GET'
            };

        request(option).then(function(body) {

            // 解析 html
            var $ = cheerio.load(body),
                $list = $('.m_list ul li'),
                $page = $('.page'),
                list = [];

            $list.each(function(i, el) {
                var $this = $(el);

                list.push({
                    id: parseInt($this.find('input[name="musicNum"]').val()),
                    name: $this.find('.m_name a').attr('title'),
                    album: $this.find('.a_name a').attr('title'),
                    singer: $this.find('.s_name a').attr('title')
                });
            });

            $page.find('a').each(function(i, el) {
                var $this = $(el),
                    href = $this.attr('href');

                if (href !== '#@') {
                    var num = href.split('=').reverse()[0];
                    $this.attr('data-option', JSON.stringify({
                        key: key,
                        pn: num
                    }));
                }

                $this.attr('href', 'javascript:;');
            });

            res.send({
                page: $page.html(),
                list: list
            });

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