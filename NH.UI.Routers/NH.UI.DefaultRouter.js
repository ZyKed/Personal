newsHuntApp.config(['$urlRouterProvider', '$stateProvider', '$resourceProvider',
function ($urlRouterProvider, $stateProvider, $resourceProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
    .state('login', {
        url: '/login',
        templateUrl : '/NH.UI.Partials/login.html',
        controller : 'loginController'
    })
    .state("err",{
        url : '/err',
        templateUrl : '/NH.UI.Partials/error.html'
    })
    .state('home', {
        url : '/home',
        templateUrl : '/NH.UI.Partials/HomePage.html',
        controller : 'newsController'
    })
    .state('home.gadgets', {
        url : '/gadgets'
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

    $resourceProvider.defaults.actions.verifyUser = {
        method : "POST",
        headers:{'Content-Type':'application/JSON'}
    };
}]);