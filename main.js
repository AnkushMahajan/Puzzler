/**
 * Created by Ankush on 3/31/2016.
 */

require.config({
    base:"../AngularImagePuzzle/Puzzler",
    paths:{
        'domReady': 'node_modules/requirejs-domready/domReady',
        'angular': 'node_modules/angular/angular.min',
        'jquery': 'node_modules/jquery/dist/jquery.min',
        'jqueryUI': 'node_modules/jquery-ui/jquery-ui',
        'jquerySnapPuzzle': 'thirdparty/jQuery-snapPuzzle-master/jquery.snap-puzzle',
        'ngStorage': 'node_modules/ngstorage/ngStorage.min'
    },
    shim:{
        angular:{
            exports:'angular'
        },
        jquery:{
            exports: '$'
        },
        jqueryUI:{
            exports: 'jqueryUI'
        },
        jquerySnapPuzzle:{
            exports: 'jquerySnapPuzzle',
            deps: ['jquery']
        }
    },

    deps:['AppBootstrap']

});

