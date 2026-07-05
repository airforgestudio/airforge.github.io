const CACHE='airforge-launch-v1';
const CORE=['./','./index.html','./motion.html','./af-lite/','./assets/logo-icon.png','./assets/logo-horizontal.png','./assets/airforge-app.png','./assets/af-lite.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp;})));});
