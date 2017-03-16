newsHuntApp.directive('topBar', function () {
    return {
        templateUrl: '/NH.UI.Partials/topBar.html',
        controller : 'loginController'
    }
});

newsHuntApp.directive('leftBar', function () {
    return {
        templateUrl: '/NH.UI.Partials/leftBar.html',
        controller : 'loginController'
    }
});

newsHuntApp.directive('mainView', function () {
    return {
        templateUrl: '/NH.UI.Partials/mainView.html',
        controller : 'loginController'
    }
});