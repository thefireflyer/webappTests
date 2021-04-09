self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
        return cache.addAll([
        '.',
		'favicon.ico',
		'index.html',
		'script.js',
		'fallback.html',
		'manifest.json'
      ]);
    })
  );
});
/*
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request).then((response) => {
        let responseClone = response.clone();
        caches.open('v1').then((cache) => {
          cache.put(event.request, responseClone);
        });

        return response;
      }).catch(() => {
        return caches.match('fallback.html')
      })
    })
  );
});
*/
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).then((response) => {
        let responseClone = response.clone();
        caches.open('v1').then((cache) => {
          cache.put(event.request, responseClone);
        });

        return response;
    }).catch(() => {
        return caches.match(event.request)
    })
  );
});