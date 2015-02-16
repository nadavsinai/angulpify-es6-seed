(function () {
    'use strict';
    require('./../index'); //load the foo module in which the controller resides
    var scope, ctrl;
    describe('testing fooController', function () {
        beforeEach(angular.mock.module('build.foo'));
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            ctrl = $controller('fooController',{$scope: scope});
        }));
        it('tests scope.person exists', function () {
            expect(scope.person).toBeDefined();
        });
    });
})();

