const offlineUrl = 'offline/offline.html';

self.addEventListener('install', event => {
  // console.log('V1 installing…');
  event.waitUntil(caches.open('static-v1').then(cache => cache.addAll(['icons/favicon.ico', 'manifest.json', offlineUrl])));
});

self.addEventListener('activate', event => {
  // console.log('V1 now ready to handle fetches!');
});

self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate' || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))) {
    event.respondWith(fetch(event.request.url).catch(error => {
      return caches.match(offlineUrl);
    }));
  } else {
    // Respond with everything else if we can
    event.respondWith(caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    }));
  }
});
