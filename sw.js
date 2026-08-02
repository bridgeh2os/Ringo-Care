const CACHE_NAME = "ringo-care-v1";


const APP_FILES = [
    "./",
    "./index.html",

    "./css/style.css",
    "./css/components.css",
    "./css/variables.css",

    "./js/app.js",
    "./js/navigation.js",
    "./js/theme.js",
    "./js/storage.js",

    "./manifest.json"
];


// Install service worker
self.addEventListener(
    "install",
    event => {

        event.waitUntil(

            caches.open(CACHE_NAME)
                .then(cache => {

                    return cache.addAll(APP_FILES);

                })

        );

    }
);



// Serve cached files first
self.addEventListener(
    "fetch",
    event => {

        event.respondWith(

            caches.match(event.request)
                .then(response => {

                    return response || fetch(event.request);

                })

        );

    }
);
