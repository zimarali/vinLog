var app = angular.module('vinLog', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/home.html'
    })
    .otherwise({redirectTo:'/'});

$locationProvider.hashPrefix("");

});
