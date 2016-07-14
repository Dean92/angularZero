(function () {

    angular.module('minmax', ['jcs-autoValidate'])
        .controller('MinMaxCtrl', function ($scope, $http) {
            $scope.formModel = {};
            $scope.onSubmit = function () {
                console.log("Hey, it's submitted");
                console.log($scope.formModel);

                $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel).
                    success(function (data) {
                    console.log("This hit the server")

                }).error(function (data) {
                    console.log("blah blah");
                });
            }

        })

        .run(function (defaultErrorMessageResolver) {
        defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
            errorMessages['tooYoung'] = 'You must be at least {0} years old to use this site';
            errorMessages['tooOld'] = 'You must be max {0} years old to use this site';
            errorMessages['badUsername'] = 'Username can only contain numbers and letters';
        });
    });

})();
