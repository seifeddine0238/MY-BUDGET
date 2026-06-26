const CACHE_NAME = 'budget-v1';
const ASSETS = [
  'index.html',
  'manifest.json'
];

// حفظ الملفات في ذاكرة الهاتف عند أول فتح للموقع
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// جلب الملفات من الذاكرة مباشرة عند انقطاع الإنترنت
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
})
  ;
