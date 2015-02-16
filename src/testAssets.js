window.TESTSENV = true;
Function.prototype.bind = Function.prototype.bind || function (thisp) {
    var fn = this;
    return function () {
        return fn.apply(thisp, arguments);
    };
};
require('jquery');
require('angular');
require('angular-mocks');
require('ngreact');
require('angular-ui-bootstrap');
require('angular-ui-router');