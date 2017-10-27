  /* use strict */
import angular from 'angular';
import '../style/app.css';

global.jQuery = global.$ = require('jquery');
require('bootstrap-loader');

var app = angular.module("loadJsonApp", []);
var jsonUrl = "../json/"

app.service("loadJsonNameService",function ($http,$q){
  var jsonNames = $q.defer();
  $http.get(jsonUrl).then(function (jsonNameData) {
    jsonNames.resolve(jsonNameData);
  });
  this.getplayers = function ()
  {
    return jsonNames.promise;
  }
})

app.service("loadJsonService",function ($http, $q){
  var deferred = $q.defer();
  $http.get(jsonUrl + 'demo.json').then(function(data)
  {
    deferred.resolve(data);
  });

  this.getplayers =function ()
  {
    return deferred.promise;
  }
})

.controller("loadJsonCtrl", function($scope, loadJsonNameService, loadJsonService){
  var promise = loadJsonNameService.getplayers();
  promise.then(function (data){
    $scope.jsons = data.data;
    console.log($scope.jsons);
    var promise = loadJsonService.getplayers();
    promise.then(function(data){
      $scope.jsonData = data;
      console.log($scope.jsonData);
    });
  });

})