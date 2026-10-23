const SPN=[['gin','Джин','🍸'],['tequila','Текила','🌵'],['anisette','Анасонови','⭐'],['rakia','Ракия','🍇'],['brandy','Бренди','🥃'],['cognac','Коняк','🥃'],['liqueurs','Ликьори','🍯'],['vodka','Водка','🧊'],['rum','Ром','🏴‍☠️'],['scotch','Шотландско уиски','🥃'],['irish','Ирландско уиски','☘️'],['american','Американско уиски','🦅'],['shots','Шотове','💥'],['cocktails','Коктейли','🍹'],['wines','Вина','🍷'],['cider','Сайдер','🍏']];
(function(){const p=location.pathname,f=p.split('/').pop().replace('.html',''),cur=f==''||f=='index'?'home':f=='beers'?'menu':f=='tree'?'list':f;
const b=document.createElement('button');b.id='hb';b.textContent='☰';b.setAttribute('aria-label','Меню');
const m=document.createElement('nav');m.id='hm';m.hidden=true;
const K='mc_staff',ok=()=>localStorage.getItem(K)=='1';
const L=[['./','🏠 Начало','home']].concat(ok()?[['Персонал'],['salon.html','🪑 Салон (поръчки)','salon'],['wmap.html','🥃 Карта на уискитата','wmap'],['map.html','🗺️ Карта на схемата','map'],['tree.html','📋 Списък (схема)','list']]:[]).concat([['Бири']]).concat([,['beers.html','🍺 Бири (меню)','menu'],['Спиртни']]).concat(SPN.map(s=>[s[0]+'.html',s[2]+' '+s[1],s[0]]));
m.innerHTML=L.map(x=>x.length==1?`<div class="nh">${x[0]}</div>`:`<a href="${x[0]}" class="${cur==x[2]?'cur':''}">${x[1]}</a>`).join('');
b.onclick=e=>{e.stopPropagation();m.hidden=!m.hidden};document.addEventListener('click',e=>{if(!m.contains(e.target))m.hidden=true});
document.body.append(b,m);
const hd=document.querySelector('body>header');if(hd&&!document.body.classList.contains('cover')){const a=document.createElement('a');a.href='./';a.className='hlogo';a.innerHTML='<img src="images/logo-96.png" alt="Motor City">';hd.prepend(a)}
const cvb=document.querySelector('.cvb');if(cvb&&ok()){const a=document.createElement('a');a.href='salon.html';a.id='cvsal';a.textContent='🪑 Салон поръчки';cvb.append(a)}
function pw(onOk,onCancel){if(document.getElementById('pwm'))return;const w=document.createElement('div');w.id='pwm';w.innerHTML='<form class="pwb"><h2>Персонал</h2><input id="pwi" type="password" inputmode="numeric" pattern="[0-9]*" autocomplete="off" placeholder="Парола"><p id="pwe" class="pwe" hidden>Грешна парола</p><div class="pwa"><button type="button" id="pwc">Отказ</button><button type="submit" id="pwo">Вход</button></div></form>';document.body.append(w);const i=w.querySelector('#pwi'),er=w.querySelector('#pwe');setTimeout(()=>i.focus(),50);
w.querySelector('form').onsubmit=e=>{e.preventDefault();if(i.value=='1122'){localStorage.setItem(K,'1');w.remove();onOk()}else{er.hidden=false;i.value='';i.focus()}};
w.querySelector('#pwc').onclick=()=>{w.remove();onCancel&&onCancel()}}
window.mcPw=pw;let tc=0,tt=0,nt=0;
document.addEventListener('click',e=>{const lg=e.target.closest('.hlogo,.cvlogo');if(!lg)return;e.preventDefault();const n=Date.now();if(n-tt>3000)tc=0;if(!tc)tt=n;tc++;clearTimeout(nt);
 if(tc>=5){tc=0;const go=()=>location.href='salon.html';ok()?go():pw(go)}else if(lg.classList.contains('hlogo'))nt=setTimeout(()=>{tc=0;location.href='./'},700)},true);
if(document.body.classList.contains('salon')||document.body.classList.contains('staff')){const lb=document.createElement('button');lb.id='lockb';lb.textContent='🔒 Заключи';lb.onclick=()=>{localStorage.removeItem(K);location.href='./'};document.body.append(lb);
 if(!ok()){document.body.classList.add('locked');pw(()=>document.body.classList.remove('locked'),()=>location.replace('./'))}}
if('serviceWorker'in navigator){let r=0;navigator.serviceWorker.addEventListener('controllerchange',()=>{if(!r){r=1;location.reload()}});
navigator.serviceWorker.register('sw.js').then(g=>g.update())}})();
