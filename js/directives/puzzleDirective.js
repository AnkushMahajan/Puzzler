/**
 * Created by Ankush on 3/31/2016.
 */

define([
    'angular',
    'jquery',
    'jqueryUI',
    'jquerySnapPuzzle',
    'js/services/StorageService'
], function(angular, $){
    var module = angular.module("puzzleDirective", ['ServiceModule']);
    module.directive("puzzleScramble",['StorageService', function(StorageService){
        return {
            restrict: "E",
            templateUrl: "templates/puzzleTemplate.html",
            scope:{
                moves:"=moves",
                over: "=over"
            },
            link: function(scope, elem, attrs){
                scope.elem = elem;
                var img = $($(elem.find('img')));
                scope.oldstate = false;
                $('#pile').height(img.height());
                if(StorageService.getValue("begin")=== undefined){
                    scope.begin = true;
                    StorageService.setValue("begin", true);
                }else if(StorageService.getValue("begin")===false){
                    scope.oldstate = true;
                    StorageService.setValue("oldstate", true);
                }


                function startGame(x,y){
                    img.snapPuzzle({
                        rows:x, cols:y,
                        pile: '#pile',
                        containment: '#puzzleContainment',
                        onComplete: function(){
                            scope.over = true;
                            StorageService.setValue("over", true);
                            scope.$apply();
                        },
                        onDrop: function(){
                            scope.moves++;
                            StorageService.setValue("moves", scope.moves);
                            scope.$apply();
                        }
                    });
                    scope.begin = false;
                    StorageService.setValue("begin", false);
                }
                scope.start = function(){
                    startGame(2,4);
                };
                scope.refresh = function(){
                    scope.oldstate = false;
                    scope.moves= 0;
                    StorageService.setValue("moves", 0);

                    scope.over = false;
                    StorageService.setValue("over", false);
                    if(!StorageService.getValue("oldstate")){
                        img.snapPuzzle('destroy');
                    }

                    startGame(2,4);
                };

            }
        }
    }]);
});