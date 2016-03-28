(function () {
    var $key = $('#key'),
        $so = $('#search'),
        $list = $('#list'),
        $page = $('#page');

    function getData(key, pn) {

        $.getJSON('/search/' + key + '/' + pn, function(data) {

            var body = '';
            data.list.forEach(function (v, i) {
                body +='<li><a target="_blank" href="song/'+ v.id +'">'+ v.name +'  '+ v.album +'  '+ v.singer +'</a></li>';
            });

            $list.html(body);
            $page.html(data.page);

        });
    }

    function search() {
        var key = $.trim($key.val());

        if(!key) {
            return;
        }

        getData(key, 1);
    }

    $so.click(function () {
        search();
    });

    $key.keyup(function(event) {
        if(event.keyCode === 13) {
            search();
        }
    });

    $page.on('click', 'a[data-option]', function () {
        var option = $(this).data('option');
        getData(option.key, option.pn);
    });

}.call(this));
