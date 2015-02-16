'use strict';

/**
 * @ngdoc overview
 * @name dirMortgageApp
 * @description
 * # dirMortgageApp
 *
 * Main module of the application.
 */
angular
  .module('dirMortgageApp', [
    'ngRoute',
    'dirMortgage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function (dirMortgageServiceProvider){
    dirMortgageServiceProvider.setTemplatePath('bower_components/angular-mortgage-widget/templates/dirMortgage.tpl.html');
    dirMortgageServiceProvider.setDefaultPrincipalAmount(16000);
  });
