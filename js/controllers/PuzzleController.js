/**
 * Created by Ankush on 3/31/2016.
 */

define([
    'angular',
    'js/directives/puzzleDirective',
    'js/services/StorageService'
], function(angular){
    var module = angular.module("puzzleControl",['puzzleDirective', 'ServiceModule']);
    module.controller("puzzleController",['$scope','StorageService', function($scope,StorageService){
        if(StorageService.getValue("moves") === undefined){
            StorageService.setValue("moves", 0);
        }
        if(StorageService.getValue("over") === undefined){
            StorageService.setValue("over", false);
        }
        $scope.over = false;
        $scope.moves = StorageService.getValue("moves");
    }]);
});