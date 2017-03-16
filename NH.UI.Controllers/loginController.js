newsHuntApp.controller("loginController", ['$scope', '$location', function($scope, $location){
    $scope.isValid = true;
    $scope.userName = "Manish";
    $scope.login = function(){
        //var res = $resource("/user");
        //var users = res.query();
        
        // do login check here

        if($scope.isValid)
            $location.path("/home");
        else $location.path("/err");
    }

    $scope.logout = function(){
        $location.path("/home");
    }

    $scope.register = function(){
    }
}]);