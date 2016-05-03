(function () {

    angular.module('minmax', ['jcs-autoValidate'])
        .controller('MinMaxCtrl', function ($scope) {
            $scope.formModel = {};
            $scope.onSubmit = function () {
                
                    console.log("Hey, it's submitted");
                    console.log($scope.formModel);

                console.log("Invalid Form!")

            }
    });

})();
