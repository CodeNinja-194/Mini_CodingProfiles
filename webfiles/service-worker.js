const CACHE_NAME = 'coding-profiles-v1';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './favicon.ico',
    './manifest.json',
    './music/Blue.mp3'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
