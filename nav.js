const SPN=[['gin','Джин','🍸'],['tequila','Текила','🌵'],['anisette','Анасонови','⭐'],['rakia','Ракия','🍇'],['brandy','Бренди','🥃'],['cognac','Коняк','🥃'],['liqueurs','Ликьори','🍯'],['vodka','Водка','🧊'],['rum','Ром','🏴‍☠️'],['scotch','Шотландско уиски','🥃'],['irish','Ирландско уиски','☘️'],['american','Американско уиски','🦅'],['shots','Шотове','💥'],['cocktails','Коктейли','🍹'],['wines','Вина','🍷'],['cider','Сайдер','🍏']];
(function(){const p=location.pathname,f=p.split('/').pop().replace('.html',''),cur=f==''||f=='index'?'home':f=='beers'?'menu':f=='tree'?'list':f;
const b=document.createElement('button');b.id='hb';b.textContent='☰';b.setAttribute('aria-label','Меню');
const m=document.createElement('nav');m.id='hm';m.hidden=true;
const L=[['./','🏠 Начало','home'],['Поръчки'],['salon.html','🪑 Салон (поръчки)','salon'],['Бири'],['beers.html','🍺 Бири (меню)','menu'],['Спиртни']].concat(SPN.map(s=>[s[0]+'.html',s[2]+' '+s[1],s[0]])).concat([['Схеми'],['wmap.html','🥃 Карта на уискитата','wmap'],['map.html','🗺️ Карта на схемата','map'],['tree.html','📋 Списък (схема)','list']]);
m.innerHTML=L.map(x=>x.length==1?`<div class="nh">${x[0]}</div>`:`<a href="${x[0]}" class="${cur==x[2]?'cur':''}">${x[1]}</a>`).join('');
b.onclick=e=>{e.stopPropagation();m.hidden=!m.hidden};document.addEventListener('click',e=>{if(!m.contains(e.target))m.hidden=true});
document.body.append(b,m);
const hd=document.querySelector('body>header');if(hd&&!document.body.classList.contains('cover')){const a=document.createElement('a');a.href='./';a.className='hlogo';a.innerHTML='<img src="images/logo-96.png" alt="Motor City">';hd.prepend(a)}
if('serviceWorker'in navigator){let r=0;navigator.serviceWorker.addEventListener('controllerchange',()=>{if(!r){r=1;location.reload()}});
navigator.serviceWorker.register('sw.js').then(g=>g.update())}})();
