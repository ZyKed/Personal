newsHuntApp.controller("loginController", ['$scope', '$location', '$resource', function($scope, $location, $resource){
    var res = $resource("http://172.17.120.135:3230/users/authenticate");
    
    $scope.username = "Guest";
    $scope.password = "";
    console.log("in loginController");

    $scope.login = function(){
        console.log("in login()");
        var req ={username:$scope.username, password: $scope.password};
        var user = res.verifyUser(req, function(){
            console.log(user.success);
            if(user.success == true){
            console.log("able to log in");
            $location.path("/home");
        }
        else{
            console.log("not able to log in");
            $scope.reset();
            $location.path("/err");
        }
        });
    }

    $scope.reset = function(){
        $scope.username = "Guest";
        $scope.password = "";

    }

    $scope.logout = function(){
        $scope.reset();
        $location.path("/home");
    }

}]);