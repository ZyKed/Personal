newsHuntApp.config(['$urlRouterProvider', '$stateProvider', '$resourceProvider',
function ($urlRouterProvider, $stateProvider, $resourceProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
    .state('login', {
        url: '/login',
        controller : 'loginController'
    })
    .state('home', {
        url : '/home',
        templateUrl : '/NH.UI.Partials/HomePage.html'
    })
    .state('home.stories', {
        url : '/stories',
        templateUrl : '/NH.UI.Partials/HomePage.html'
    })
    .state('home.weather', {
        url : '/weather',
        templateUrl : '/NH.UI.Partials/HomePage.html'
    })
    .state('home.shop', {
        url : '/shop',
        templateUrl : '/NH.UI.Partials/HomePage.html'
    })
    .state('home.sports', {
        url : '/sports',
        templateUrl : '/NH.UI.Partials/HomePage.html'
    });
}]);