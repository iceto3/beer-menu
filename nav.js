(function(){const p=location.pathname,cur=p.endsWith('map.html')?'map':p.endsWith('menu.html')?'menu':'list';
const b=document.createElement('button');b.id='hb';b.textContent='☰';b.setAttribute('aria-label','Меню');
const m=document.createElement('nav');m.id='hm';m.hidden=true;
m.innerHTML=`<a href="./" class="${cur=='list'?'cur':''}">📋 Списък (схема)</a><a href="map.html" class="${cur=='map'?'cur':''}">🗺️ Карта на схемата</a><a href="menu.html" class="${cur=='menu'?'cur':''}">🍺 Меню</a>`;
b.onclick=e=>{e.stopPropagation();m.hidden=!m.hidden};document.addEventListener('click',e=>{if(!m.contains(e.target))m.hidden=true});
document.body.append(b,m);
if('serviceWorker'in navigator){let r=0;navigator.serviceWorker.addEventListener('controllerchange',()=>{if(!r){r=1;location.reload()}});
navigator.serviceWorker.register('sw.js').then(g=>g.update())}})();
