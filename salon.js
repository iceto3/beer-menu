// Салон – поръчки по места (план от касата Zamboo). Данните се пазят в localStorage.
const e=s=>String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]));
const CUR=''; // валутата не е записана в менюто – цените се показват както са записани
const fm=v=>v==null?'—':v.toFixed(2)+(CUR?' '+CUR:'');
// места: [id, вид, x, y] в координати на плана
const SEATS=[];
[[16,22,458],[23,29,484],[30,36,511]].forEach(([a,b,y])=>{for(let i=a;i<=b;i++)SEATS.push({id:''+i,k:'s',x:58+(i-a)*44,y})});
[6,5,4,3,2,1].forEach((n,i)=>SEATS.push({id:''+n,k:'s',x:478,y:420+i*25.5}));
[15,14,13].forEach((n,i)=>SEATS.push({id:''+n,k:'s',x:52,y:597+i*25}));
[12,11,10].forEach((n,i)=>SEATS.push({id:''+n,k:'s',x:143,y:594+i*25}));
const TABLES=[{id:'7',x:357,y:455,w:68,h:35,ch:[[364,446,'h'],[392,446,'h'],[364,491,'h'],[392,491,'h']]},
 {id:'9',x:210,y:572,w:55,h:48,ch:[[198,577,'v'],[198,598,'v'],[267,577,'v'],[267,598,'v']]},
 {id:'8',x:342,y:570,w:53,h:47,ch:[[330,575,'v'],[330,596,'v'],[397,575,'v'],[397,596,'v']]}];
TABLES.forEach(t=>t.k='t');
const ALL=[...SEATS,...TABLES],lbl=s=>(s.k=='t'?'Маса ':'Място ')+s.id;
// каталог
const BMAP={};(function w(x){(x.b||[]).forEach(b=>BMAP[b.n]=b);(x.k||[]).forEach(w)})(TREE);const bm=n=>BMAP[n]&&typeof dot=='function'?' '+dot(BMAP[n]):'';
const CAT=[];const BL=[];(function w(x){(x.b||[]).forEach(b=>BL.push({n:b.n,v:b.srv||'',p:null,st:x.n}));(x.k||[]).forEach(w)})(TREE);
BL.sort((a,b)=>parseInt(a.n)-parseInt(b.n));
CAT.push({t:'🍺 Наливни',it:BL.filter(b=>parseInt(b.n)<=4)},{t:'🍾 Бутилирани',it:BL.filter(b=>parseInt(b.n)>=5)});
SP.forEach(s=>CAT.push({t:s.ic+' '+s.t,it:s.it.flatMap(x=>{const vol=s.vol||'';if(!x.p)return[{n:x.n,v:vol,p:null}];
 return x.p.split('/').map(t=>t.trim()).map(t=>{const m=t.match(/^(\d+)\s*[×x]\s*([\d.]+)$/);return m?{n:x.n,v:m[1]+' бр.',p:+m[2]}:{n:x.n,v:vol,p:isNaN(+t)?null:+t}})})}));
// съхранение
const LS=k=>{try{return JSON.parse(localStorage.getItem(k))}catch(_){return null}};
let O=LS('mc_orders')||{},Hs=LS('mc_hist')||[];
const save=()=>{localStorage.setItem('mc_orders',JSON.stringify(O));localStorage.setItem('mc_hist',JSON.stringify(Hs))};
const tot=o=>{let s=0,u=0;o.items.forEach(l=>l.p==null?u=1:s+=l.p*l.q);return{s,u}};
const cnt=o=>o.items.reduce((a,l)=>a+l.q,0);
const tm=t=>new Date(t).toLocaleTimeString('bg-BG',{hour:'2-digit',minute:'2-digit'});
const tstr=o=>{const t=tot(o);return o.items.length?(t.s||!t.u?fm(t.s):'—')+(t.u&&t.s?' + —':''):'—'};
// план
const NS='http://www.w3.org/2000/svg',fp=document.getElementById('fp');let Z=+(localStorage.getItem('mc_z')||1.5);
const svg=document.createElementNS(NS,'svg');svg.setAttribute('viewBox','15 405 530 262');fp.append(svg);
const el=(t,a,p)=>{const x=document.createElementNS(NS,t);for(const k in a)x.setAttribute(k,a[k]);(p||svg).append(x);return x};
function draw(){svg.innerHTML=`<defs><pattern id="wd" width="530" height="9" patternUnits="userSpaceOnUse"><rect width="530" height="9" fill="#8a6a48"/><rect y="8" width="530" height="1" fill="#5e4630"/><rect width="530" height="3" fill="#9a7a56" opacity=".5"/></pattern><linearGradient id="vg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity=".1"/><stop offset="1" stop-color="#000" stop-opacity=".45"/></linearGradient></defs>`;
 el('rect',{x:15,y:405,width:530,height:262,fill:'url(#wd)'});el('rect',{x:15,y:405,width:530,height:262,fill:'url(#vg)'});
 el('text',{x:28,y:424,style:'font:700 11px Oswald,sans-serif;fill:#ffd28a;letter-spacing:1px'}).textContent='САЛОН';
 el('rect',{x:498,y:410,width:29,height:142,rx:2,class:'ctr'});el('rect',{x:75,y:578,width:43,height:84,rx:2,class:'ctr'});
 ALL.forEach(s=>{const o=O[s.id],on=o&&o.items.length,g=el('g',{class:'st'+(on?' on':''),'data-id':s.id,role:'button','aria-label':lbl(s)});
  if(s.k=='t'){s.ch.forEach(([x,y,d])=>el('rect',d=='h'?{x,y,width:20,height:8,rx:2,class:'chr'}:{x,y,width:9,height:18,rx:2,class:'chr'},g));
   el('rect',{x:s.x,y:s.y,width:s.w,height:s.h,rx:4,class:'bd'},g);const t=el('text',{x:s.x+s.w/2,y:s.y+s.h/2+(on?-2:3),class:'nm',style:'font-size:10px'},g);t.textContent=s.id;
   if(on){el('text',{x:s.x+s.w/2,y:s.y+s.h/2+9,class:'tt tb'},g).textContent=cnt(o)+' бр · '+tstr(o)}}
  else{el('circle',{cx:s.x,cy:s.y,r:12,fill:'transparent'},g);el('ellipse',{cx:s.x,cy:s.y,rx:9,ry:7,class:'bd'},g);el('text',{x:s.x,y:s.y+2.5,class:'nm'},g).textContent=s.id;
   if(on)el('text',{x:s.x,y:s.y+15,class:'tt'},g).textContent=cnt(o)+' · '+tstr(o)}
  g.onclick=()=>panel(s.id)});
 svg.style.width=(fp.clientWidth-16)*Z+'px';
 const open=Object.values(O).filter(o=>o.items.length);let g=0;open.forEach(o=>g+=tot(o).s);
 document.getElementById('sum').textContent=open.length?`Отворени: ${open.length} · ${fm(g)}`:'Няма отворени поръчки'}
document.getElementById('zi').onclick=()=>{Z=Math.min(4,Z+.5);localStorage.setItem('mc_z',Z);draw()};
document.getElementById('zo').onclick=()=>{Z=Math.max(1,Z-.5);localStorage.setItem('mc_z',Z);draw()};
// панели
const cd=document.getElementById('card');const close=()=>{cd.hidden=true;draw()};
cd.onclick=ev=>{if(ev.target===cd)close()};
const toast=t=>{const d=document.createElement('div');d.className='toast';d.textContent=t;document.body.append(d);setTimeout(()=>d.remove(),1800)};
function panel(id){const s=ALL.find(x=>x.id==id),o=O[id]||{items:[]},t=tot(o);
 cd.innerHTML=`<div class="c"><h2>${lbl(s)}</h2>${o.opened&&o.items.length?`<small>Отворена в ${tm(o.opened)}</small>`:''}
 <ul class="ol">${o.items.map((l,i)=>`<li><div class="ln">${e(l.n)}${bm(l.n)}<small>${e(l.v)}${l.v?' · ':''}${fm(l.p)} · ${tm(l.ts)}</small></div><button class="qb" data-a="-" data-i="${i}">−</button><span class="qn">${l.q}</span><button class="qb" data-a="+" data-i="${i}">+</button><span class="lt">${l.p==null?'—':fm(l.p*l.q)}</span><button class="rm" data-a="x" data-i="${i}" aria-label="Премахни">✕</button></li>`).join('')||'<li>Няма артикули.</li>'}</ul>
 <div class="tot">Общо: ${tstr(o)}</div>${t.u&&o.items.length?'<p class="cav">Някои артикули нямат цена в менюто (—) и не са включени.</p>':''}
 <div class="acts"><button data-a="add" class="pay">＋ Добави</button>${o.items.length?`<button data-a="pay" class="pay">Приключи / Плати</button><button data-a="clr">Изчисти</button><button data-a="mv">Премести</button>`:''}<button data-a="cl">Затвори</button></div></div>`;
 cd.hidden=false;
 cd.querySelectorAll('button').forEach(b=>b.onclick=()=>{const a=b.dataset.a,i=+b.dataset.i;
  if(a=='+'){o.items[i].q++}else if(a=='-'){if(--o.items[i].q<1)o.items.splice(i,1)}else if(a=='x'){o.items.splice(i,1)}
  else if(a=='add')return picker(id);else if(a=='cl')return close();
  else if(a=='clr'){if(!confirm('Да се изчисти поръчката на '+lbl(s)+'?'))return;delete O[id];save();return close()}
  else if(a=='pay'){if(!confirm('Приключване на '+lbl(s)+' – '+tstr(o)+'?'))return;Hs.push({id,lb:lbl(s),items:o.items,opened:o.opened,closed:Date.now(),total:tot(o).s,unp:tot(o).u});delete O[id];save();toast('Приключено: '+lbl(s));return close()}
  else if(a=='mv')return move(id);
  O[id]=o;if(!o.items.length)delete O[id];save();panel(id)})}
function add(id,it){const o=O[id]||(O[id]={items:[],opened:Date.now()});if(!o.items.length)o.opened=Date.now();
 const l=o.items.find(l=>l.n==it.n&&l.v==it.v&&l.p==it.p);if(l){l.q++;l.ts=Date.now()}else o.items.push({n:it.n,v:it.v,p:it.p,q:1,ts:Date.now()});save()}
function picker(id){const s=ALL.find(x=>x.id==id);
 cd.innerHTML=`<div class="c"><h2>Добави · ${lbl(s)}</h2><input id="q" type="search" placeholder="Търси напитка…" autocomplete="off"><div class="pg" id="pl"></div><div class="acts" style="position:sticky;bottom:0;background:#15120f;padding-top:8px"><button class="pay" id="dn">Готово</button></div></div>`;
 const pl=cd.querySelector('#pl'),q=cd.querySelector('#q');
 const qty=it=>{const l=(O[id]||{items:[]}).items.find(l=>l.n==it.n&&l.v==it.v&&l.p==it.p);return l?l.q:0};
 function render(){const f=q.value.trim().toLowerCase();let k=0;
  pl.innerHTML=CAT.map((g,gi)=>{const its=g.it.map((it,ii)=>[it,ii]).filter(([it])=>!f||it.n.toLowerCase().includes(f)||(it.st||'').toLowerCase().includes(f)||g.t.toLowerCase().includes(f));if(!its.length)return'';
   return `<h3>${e(g.t)}</h3>`+its.map(([it,ii])=>{const n=qty(it);return `<div class="pi"><div class="ln">${e(it.n)}${bm(it.n)}<small style="display:block;color:#bfae92">${it.st?`<span style="color:#9a9a9a">${e(it.st)}</span> · `:''}${e(it.v)}</small></div><span class="pr">${fm(it.p)}</span>${n?`<button class="qb" data-g="${gi}" data-i="${ii}" data-a="-">−</button><span class="qn">${n}</span><button class="qb" data-g="${gi}" data-i="${ii}" data-a="+">+</button>`:`<button class="ad" data-g="${gi}" data-i="${ii}" data-a="+">＋</button>`}</div>`}).join('')}).join('')||'<p>Няма резултати.</p>';
  pl.querySelectorAll('button').forEach(b=>b.onclick=()=>{const it=CAT[b.dataset.g].it[b.dataset.i];
   if(b.dataset.a=='+')add(id,it);else{const o=O[id],l=o.items.find(l=>l.n==it.n&&l.v==it.v&&l.p==it.p);if(--l.q<1)o.items.splice(o.items.indexOf(l),1);if(!o.items.length)delete O[id];save()}render()})}
 q.oninput=render;render();cd.querySelector('#dn').onclick=()=>panel(id);cd.hidden=false}
function move(id){const s=ALL.find(x=>x.id==id);
 cd.innerHTML=`<div class="c"><h2>Премести ${lbl(s)}</h2><p>Към:</p><select id="to">${ALL.filter(x=>x.id!=id).map(x=>`<option value="${x.id}">${lbl(x)}${O[x.id]?' (отворена – ще се обедини)':''}</option>`).join('')}</select><div class="acts" style="margin-top:12px"><button class="pay" id="ok">Премести</button><button id="bk">Назад</button></div></div>`;
 cd.querySelector('#bk').onclick=()=>panel(id);
 cd.querySelector('#ok').onclick=()=>{const to=cd.querySelector('#to').value,a=O[id];if(O[to]){O[to].items.push(...a.items);O[to].opened=Math.min(O[to].opened,a.opened)}else O[to]=a;delete O[id];save();toast('Преместено към '+lbl(ALL.find(x=>x.id==to)));panel(to)}}
document.getElementById('hist').onclick=()=>{const d0=new Date();d0.setHours(0,0,0,0);const h=Hs.filter(x=>x.closed>=d0).reverse();let g=0;h.forEach(x=>g+=x.total);
 cd.innerHTML=`<div class="c"><h2>История – днес</h2><div class="tot">Общо: ${fm(g)} · ${h.length} поръчки</div>${h.map(x=>`<details class="hl"><summary>${tm(x.closed)} · ${e(x.lb)} · ${fm(x.total)}${x.unp?' + —':''}</summary>${x.items.map(l=>`<div>${l.q}× ${e(l.n)} ${e(l.v)} – ${l.p==null?'—':fm(l.p*l.q)}</div>`).join('')}</details>`).join('')||'<p>Няма приключени поръчки днес.</p>'}<div class="acts" style="margin-top:12px"><button id="bk">Затвори</button></div></div>`;
 cd.hidden=false;cd.querySelector('#bk').onclick=close};
addEventListener('resize',draw);draw();
