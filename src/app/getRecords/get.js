JsonRecordApp.contorller(getCtrl, ['$scope', '$http', function($scope, $http){
  var testArray = new Array();
  var errorChar = 1;
  for (var i = 10001; i < 10101; i++) {
    var query = jQuery.ajax({
      url: jsonUrl + jsonName + i + ".json",
      type: "GET",
      async: false,
      dataType: 'json',
      success: function(result){
        testArray.push(result);
        $scope.jsonData = testArray;
      }  
    });
    if (query.status=="404") { break;}

    // $http.get(jsonUrl + jsonName + i + ".json").then(function(data){
    //   testArray.push(data.data);
    //   $scope.jsonData = testArray;
    //   console.log(testArray);
    // }).catch(function(){
    //   errorChar = 0;
    // });

  }
  var testJson ={
    "id" : 100010,
    "Name" : "testsName"
  }
  // var postQuery=$http.post("http://localhost:8080" + jsonUrl + jsonName + "10001.json", testJson).then(function(data){
  // // var postQuery=$http.post(jsonUrl + jsonName + "test.json", testJson).then(function(data){
  //       console.log(data);
  //     }).catch(err => console.log(err));
  jQuery.ajax({
    url: jsonUrl + jsonName + "10001.json",
    type: "POST",
    context: testJson,
    contentType: "application/json",
    async: false,
    dataType: 'json',
    success: function(result){
      console.log(result);
    }
  })
}]);