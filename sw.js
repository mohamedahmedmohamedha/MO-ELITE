const VERSION='vortex-study-shell-v47-performance';
const PRECACHE=['./','./index.html','./register.html','./admin.html','./firebase-config.js','./vortex-study-logo.svg','./vortex-study-icon-192.png','./vortex-study-icon-512.png','./vortex-study-icon-180.png','./manifest.webmanifest'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const c=await caches.open(VERSION);await Promise.all(PRECACHE.map(u=>c.add(u).catch(()=>null)));await self.skipWaiting();})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k)));await self.clients.claim();})()));
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET')return;
  const url=new URL(event.request.url);
  if(url.origin!==self.location.origin)return;
  const isNavigation=event.request.mode==='navigate';
  event.respondWith((async()=>{
    if(isNavigation){
      try{
        const fresh=await fetch(event.request,{cache:'no-store'});
        if(fresh.ok){const c=await caches.open(VERSION);c.put(event.request,fresh.clone()).catch(()=>{});return fresh;}
      }catch{}
      return (await caches.match(event.request))||new Response('VORTEX STUDY غير متاح حاليًا',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}});
    }
    const cached=await caches.match(event.request);
    if(cached)return cached;
    try{
      const fresh=await fetch(event.request,{cache:'no-store'});
      if(fresh.ok){const c=await caches.open(VERSION);c.put(event.request,fresh.clone()).catch(()=>{});}
      return fresh;
    }catch{return new Response('',{status:504});}
  })());
});
