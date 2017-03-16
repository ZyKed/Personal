newsHuntApp.controller("newsController", ['$scope', '$resource', function($scope, $resource){
    var resource = $resource("http://172.17.120.135:3230/users/news");
    console.log(resource);
   // var data[]= resource.message;
   $scope.news = [];
    var news = resource.get({}, function(){
        console.log("able to get all news");
        $scope.news = news.message;
        console.log($scope.news);
    },function(){
        console.log("not able to fetch all news");
    });
}]);