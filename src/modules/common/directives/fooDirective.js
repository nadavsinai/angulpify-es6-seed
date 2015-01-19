export default class fooDirective {
    /*@ngInject*/
    constructor(/* inject dependencies here, i.e. : $rootScope */) {
        return {
            link: function (scope, element) {
                // Do something awesome
            }
        };
    }
}