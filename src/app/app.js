  /* use strict */
import angular from 'angular';
import '../style/app.css';

global.jQuery = require('jquery');
require('bootstrap-loader');

var jsonUrl = "../json/"

var app = angular.module("loadJsonApp", []);

app.service("loadJsonNameService",function ($http,$q){
  var deferred = $q.defer();
  $http.get(jsonUrl).then(function (jsonNames) {
    deferred.resolve(jsonNames);
  });
  this.getplayers = function ()
  {
    return deferred.promise;
  }
})

app.service("loadJsonDataService",function ($http, $q, loadJsonNameService){
  var promise = loadJsonNameService.getplayers();
  var jsonData = new Array();

  this.getJsonData = function (callback)
  {
    promise.then(function (data){
      var jsons = data.data;
      for ( var i in jsons) {
        jQuery.ajax({
          url: jsonUrl + jsons[i],
          async: false,
          dataType: 'json',
          success: function(result) {
            jsonData.push(result);
          }
        });
      }
      console.log("jsonData in service====");
      console.log(jsonData);
      callback(jsonData);
    });
  }
})

.controller("loadJsonCtrl", function($scope, loadJsonDataService){
  loadJsonDataService.getJsonData(function(data){
    $scope.jsonData = data;
    console.log("jsonData in controller====");
    console.log($scope.jsonData);
  });
})