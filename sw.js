const CACHE_VERSION = 4;
const CACHE_INMUTABLE = "CACHE_INMUTABLE";
const INMUTABLES = ["index.html"];


self.addEventListener('install', e => {

    e.waitUntil(caches.open(CACHE_INMUTABLE)
        .then(cache => {
            return new Promise((resolve, reject) => {
                for (i in CACHE_INMUTABLE) {
                    fetch(CACHE_INMUTABLE[i]).then((resp) => {

                            cache.add(resp, CACHE_INMUTABLE[i]);
                        }

                    ).catch(reject);
                }
                resolve();
            });

        }));

});


self.addEventListener('fetch', e => {
    var url;
    if (e.request.url == "/")
        url = "index.html";
    else url = e.request.url;
    e.respondWith(caches.match(url));

});