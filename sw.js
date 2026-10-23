const C='beer-v3',A=['./','index.html','map.html','style.css','app.js','map.js','nav.js','data.js','manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(A.map(u=>new Request(u,{cache:'reload'})))))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);
 const net=r.mode==='navigate'||/\.(html|js|css|json)$/.test(u.pathname)||u.pathname.endsWith('/');
 if(net)e.respondWith(fetch(r,{cache:'no-cache'}).then(res=>{const c=res.clone();caches.open(C).then(x=>x.put(r,c));return res}).catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match('index.html'))));
 else e.respondWith(caches.match(r).then(m=>m||fetch(r)))});
