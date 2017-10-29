
import angular from 'angular';
import 'angular-route';
import '../style/app.css';

global.jQuery = require('jquery');
require('bootstrap-loader');

var jsonUrl = "/json/"
var jsonName = "esp-"

var app = angular.module("JsonRecordApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $routeProvider
  .when('/add',{
    templateUrl: 'add.html',
    controller: 'addCtrl'
  })
  .when('/get',{
    templateUrl: 'get.html',
    controller: 'getCtrl'
  })
  .when('/modify',{
    templateUrl: 'modify.html',
    controller: 'modifyCtrl'
  })
  .otherwise({
    redirectTo: '/get'
  });
});