(function () {

    angular.module('minmax', [])
        .controller('MinMaxCtrl', function ($scope) {
            $scope.formModel = {};
            $scope.onSubmit = function () {
                console.log("Hey, it's submitted");
                console.log($scope.formModel);
            }
    });

})();
