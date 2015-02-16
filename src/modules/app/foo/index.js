export default angular.module('build.foo', ['ui.router'
    //load your foo submodules here, e.g.:
    //require('./bar').name
]).controller('fooController', require('./fooController'))
    .config($stateProvider =>
        $stateProvider.state('foo', {
            url: '',
            templateUrl: 'app/foo/layout.html',
            controller: 'fooController'
        })
);
