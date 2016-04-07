# service-worker-cache
Demonstration of Service Worker Offline Cache. 

## How to run
- Install Python 3.
- Navigate to cloned directory by cd service-worker-cache.
- Execute python -m http.server 8080 to run HTTP Server.
- Browse [localhost:8080](http://localhost:8080).

## How to test
- Open chrome://inspect/#service-workers in Chrome browser and you will see a service worker is registered for localhost:8080.
- Stop the HTTP Server.
- The site will still be accessible.
