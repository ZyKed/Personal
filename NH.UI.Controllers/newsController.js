newsHuntApp.controller("newsController", ['$scope', '$resource', function ($scope, $resource) {
    $scope.viewMore = false;
    var resource = $resource("http://172.17.120.135:3230/users/news");
    $scope.news = [];
    var news = resource.get({},
        function () {
            console.log("able to fetch all news");
            $scope.news = news.message;
        }, function () {
            console.log("not able to fetch all news");
        });
}]);