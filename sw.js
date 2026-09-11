const VERSION='vortex-study-shell-v43-smart-sync';
const PRECACHE=['./','./index.html','./register.html','./admin.html','./firebase-config.js','./vortex-study-logo.svg','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const c=await caches.open(VERSION);await Promise.all(PRECACHE.map(u=>c.add(u).catch(()=>null)));await self.skipWaiting();})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)));await self.clients.claim();})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  event.respondWith((async()=>{
    const cached=await caches.match(event.request);
    const network=fetch(event.request,{cache:'no-store'}).then(async res=>{if(res.ok){try{const c=await caches.open(VERSION);await c.put(event.request,res.clone())}catch{}}return res}).catch(()=>null);
    if(cached){event.waitUntil(network);return cached;}
    return (await network)||new Response('VORTEX STUDY غير متاح حاليًا',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}});
  })());
});
