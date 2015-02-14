export default class fooController {
    /*@ngInject*/
    constructor($scope) {
        $scope.welcome = 'Congratulations!';
        $scope.person = { fname: 'Clark', lname: 'Kent' };
    }
}
