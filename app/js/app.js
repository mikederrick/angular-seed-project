'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'ngRoute']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/page1.html', controller: Page1Ctrl});
    $routeProvider.when('/view2', {templateUrl: 'partials/page2.html', controller: Page2Ctrl});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
