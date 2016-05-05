require('style!../lib/waves/waves.css');
var Waves = require('../lib/waves');

module.exports = function(Vue, option) {

    Waves.init(option);

    Vue.directive('waves', function(value) {

        var classes = Object.keys(this.modifiers).map(function(val) {
            return 'waves-' + val;
        });

        Waves.attach(this.el, classes);
    });
};
