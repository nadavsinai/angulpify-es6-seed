export default angular.module('build.common.directives', [])
    .directive('fooDirective', require('./fooDirective'))
        .value('helloComponent', require('./helloComponent'));