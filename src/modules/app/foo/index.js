export default angular.module('build.foo', [
    //load your foo submodules here, e.g.:
    //require('./bar').name
]).config($stateProvider =>
        $stateProvider.state('foo', {
            url: '',
            templateUrl: 'app/foo/layout.html',
            controller: require('./fooController')
        })

);
