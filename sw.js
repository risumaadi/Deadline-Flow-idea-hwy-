const CACHE = 'deadline-flow-v1';
const FILES = [
  '/DeadlineFlow/',
  '/DeadlineFlow/index.html',
  '/DeadlineFlow/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
