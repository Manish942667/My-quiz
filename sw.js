<meta name='viewport' content='width=device-width, initial-scale=1'/>// Give your cache a name
const cacheName = 'quiz-app-v1';

// List EVERY file you want to work offline
const assets = [
  './',
  './index.html',
  './A-quiz.html',
  './B-quiz.html',
  './C-quiz.html',
  './style.css',
  './manifest.json',
  './icon.png'
];

// 1. Install Service Worker and save files to the "Cache"
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('Saving files to cache...');
      return cache.addAll(assets);
    })
  );
});

// 2. Serve files from Cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // Return the cached file, or try to get it from the internet
      return response || fetch(event.request);
    })
  );
});
