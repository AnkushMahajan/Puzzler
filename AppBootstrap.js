/**
 * Created by Ankush on 3/31/2016.
 */

define([
    'require',
    'angular',
    'app'
], function(require, angular){

    'use strict';
    require(['domReady!'], function(document){

        angular.bootstrap(document, ['puzzler']);
    });

});