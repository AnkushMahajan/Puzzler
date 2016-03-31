/**
 * Created by Ankush on 3/31/2016.
 */

define([
    'angular',
    'ngStorage'
], function(angular, ngStorage){

    var module = angular.module("ServiceModule",['ngStorage']);
    module.factory("StorageService", function($localStorage){
        return {
            setValue: function(type, value){
                $localStorage[type] = value
            },
            getValue : function(getType){
                return $localStorage[getType]
            }
        }
    })
});