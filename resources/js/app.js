/*global console */

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', { scope: '/' }).then(function (registration) {
        console.log('Service Worker registration succeeded. Scope is: ' + registration.scope);
    }).catch(function (error) {
        console.log('Service Worker registration failed. Error is: ' + error);
    });
}
