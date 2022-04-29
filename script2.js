var myApp = angular.module("myModule", []);

myApp.controller("myController", function ($scope){
var employee = {
    firstName: "Harshita",
    lastName: "kudchi",
    gender: "Female"
};
$scope.employee=employee
});
