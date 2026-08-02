const CACHE_NAME = "ringo-care-v3";

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

        // Activate immediately
        self.skipWaiting();

        event.waitUntil(

            caches.open(CACHE_NAME)
                .then(cache => {

                    return cache.addAll(APP_FILES);

                })

        );

    }
);


// Remove old cache versions
self.addEventListener(
    "activate",
    event => {

        event.waitUntil(

            caches.keys()
                .then(keys => {

                    return Promise.all(

                        keys
                            .filter(
                                key => key !== CACHE_NAME
                            )
                            .map(
                                key => caches.delete(key)
                            )

                    );

                })

        );

        self.clients.claim();

    }
);


// Network first strategy
self.addEventListener(
    "fetch",
    event => {

        event.respondWith(

            fetch(event.request)
                .then(response => {

                    return response;

                })
                .catch(() => {

                    return caches.match(event.request);

                })

        );

    }
);
