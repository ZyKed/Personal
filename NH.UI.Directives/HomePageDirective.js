newsHuntApp.directive('topBar', function () {
    return {
        templateUrl: '/NH.UI.Partials/topBar.html'
    }
});

newsHuntApp.directive('leftBar', function () {
    return {
        templateUrl: '/NH.UI.Partials/leftBar.html',
        controller : 'newsController'
    }
});

newsHuntApp.directive('mainView', function () {
    return {
        templateUrl: '/NH.UI.Partials/mainView.html',
        controller : 'newsController'
    }
});