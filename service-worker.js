
/*global caches*/
/*global console*/
/*global fetch*/

var CACHE_NAME = 'SAMPLE_APP_CACHE';
var urlsToCache = [
    '/',
    '/index.html',
    '/resources/css/bootstrap.min.css',
    '/resources/css/font-awesome.min.css',
    '/resources/css/site.css',
    '/resources/fonts/',
    '/resources/fonts/fontawesome-webfont.woff2',
    '/resources/img/favicon.ico',
    '/resources/img/sample-snap.jpg',
    '/resources/js/app.js',
    '/resources/js/bootstrap.min.js',
    '/resources/js/inview.min.js',
    '/resources/js/jquery.min.js',
    '/resources/js/site.js'
];

this.addEventListener('install', function (event) {
    'use strict';

    console.info('Install event called.');

    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            return cache.addAll(urlsToCache);
        }).catch(function (error) {
            console.log('Unable to install cache. Error is: ' + error);
        })
    );
});

this.addEventListener('fetch', function (event) {
    'use strict';

    console.info('Fetch event called for request: ' + event.request);

    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }

            var clonedRequest = event.request.clone();

            return fetch(clonedRequest).then(function (response) {
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                var clonedResponse = response.clone();

                caches.open(CACHE_NAME).then(function (cache) {
                    cache.put(event.request, clonedResponse);
                });
            });
        })
    );
});
