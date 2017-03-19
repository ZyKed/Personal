newsHuntApp.controller("loginController", ['$scope', '$location', '$resource', function ($scope, $location, $resource, baseUrl) {
    var res = $resource(baseUrl + "/authenticate");
    console.log(baseUrl);
    $scope.username = "Guest";
    $scope.password = "";
    $scope.isValid = false;
    console.log("in loginController");

    $scope.login = function () {
        console.log("in login()");
        var req = { username: $scope.username, password: $scope.password };
        var user = res.verifyUser(req, function () {
            console.log(user.success);
            if (user.success == true) {
                $scope.isValid = true;
                console.log("able to log in");
                $location.path("/home");
            }
            else {
                console.log("not able to log in");
                $scope.reset();
                $scope.isValid = false;
                $location.path("/err");
            }
        });
    }

    $scope.reset = function () {
        $scope.username = "Guest";
        $scope.password = "";

    }

    $scope.logout = function () {
        $scope.reset();
        $location.path("/home");
    }

}]);