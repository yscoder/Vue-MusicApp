var cheerio = require('cheerio');

// 酷我
exports.kuwo = {
    searchUrl: 'http://sou.kuwo.cn/ws/NSearch',
    songUrl: 'http://antiserver.kuwo.cn/anti.s?format=mp3|aac&type=convert_url&response=url',
    parse: function(body, key, pn) {

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

        return {
            page: $page.html(),
            list: list
        };
    }
};

// 网易云，这里挖个坑
exports.cloud = {
    // 搜索歌曲 POST
    // type 单曲(1)，歌手(100)，专辑(10)，歌单(1000)，用户(1002) *(type)*
    // limit 获取多少条数据
    // http://music.163.com/api/search/get/web?s=%E8%8A%B1%E6%B5%B7&type=1&offset=0&total=true&limit=60


    // 歌曲URL GET
    // 单曲 http://music.163.com/api/song/detail/?id=185697&ids=[185697]
    // 多曲 http://music.163.com/api/song/detail/?ids=[185697,xxxx]
};
