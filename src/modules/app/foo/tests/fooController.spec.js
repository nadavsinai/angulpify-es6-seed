(function () {
    'use strict';
    var scope, ctrl;
    describe('testing fooController', function () {
        module('build.foo');
        beforeEach(function () {
            //do something
            inject(function ($rootScope, $controller) {
                scope = $rootScope.$new();
                ctrl = $controller.get('fooController')({$scope: scope});
            })
        });
        it('tests scope.person exists', function () {
            expect(scope.person).toBeDefined();
        })
    })
})();

