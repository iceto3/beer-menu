const L=[];(function f(x){(x.b||[]).forEach(b=>L.push([b,x.n]));(x.k||[]).forEach(f)})(TREE);
L.sort((a,b)=>parseInt(a[0].n)-parseInt(b[0].n));
const e=s=>String(s).replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m])),cd=document.getElementById('card'),M=document.getElementById('menu');
function card(b,st){cd.innerHTML=`<div class="c">${crumb(b.path)}${bimg(b)}<h2>${e(b.n)} ${dot(b)} ${flh(b.fl)}</h2><p><b>Държава:</b> ${e(b.c)}<br><b>Стил:</b> ${e(st)}<br><b>Алкохол:</b> ${b.abv?e(b.abv):'—'}<br><b>Горчивина:</b> ${dot(b)} ${BITN[b.bit]}${b.ibu?' ('+e(b.ibu)+' IBU)':''}<br><b>Сервиране:</b> ${e(b.srv)}</p><p>${e(b.notes)}</p>${b.cav?`<p class="cav">⚠️ ${e(b.cav)}</p>`:''}<button>Затвори</button></div>`;cd.hidden=false;cd.querySelector('button').onclick=()=>cd.hidden=true}
cd.onclick=ev=>{if(ev.target===cd)cd.hidden=true};
[['Наливни',1],['Бутилирани',0]].forEach(([t,dr])=>{const h=document.createElement('h3');h.className='sec';h.textContent=t;M.append(h);
 L.filter(([b])=>b.srv.startsWith('Наливна')==!!dr).forEach(([b,st])=>{const r=document.createElement('div');r.className='mrow'+(dr?' draft':'');
  r.innerHTML=`<div class="mt"><div class="mn">${e(b.n)} ${dot(b)} ${flh(b.fl)}</div>${crumb(b.path)}</div><img class="th" src="${bsrc(b,1)}" alt="" loading="lazy" decoding="async">`;r.onclick=()=>card(b,st);M.append(r)})});
document.getElementById('lgw').innerHTML=LEGEND+'<details><summary>Вкусове</summary>'+flh(FLEG)+'</details>';
