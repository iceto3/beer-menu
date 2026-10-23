const has=x=>(x.b&&x.b.length)||(x.k&&x.k.some(has));
function node(x,path){const li=document.createElement('li'),s=document.createElement('span');s.className='n s'+(has(x)?'':' e');s.textContent=x.n;li.append(s);
 s.onclick=()=>{li.classList.toggle('open');document.getElementById('desc').textContent=x.n+': '+x.d};
 const ul=document.createElement('ul');(x.k||[]).forEach(k=>ul.append(node(k,[...path,x.n])));
 (x.b||[]).forEach(b=>{const l=document.createElement('li'),t=document.createElement('span');t.className='n beer'+(b.srv.startsWith('Наливна')?' draft':'');t.innerHTML=`🍺 ${b.n} <small>${b.srv.startsWith('Наливна')?'наливна':'бутилка'}</small>`;t.onclick=()=>card(b,x.n);l.append(t);ul.append(l)});
 li.append(ul);return li}
function card(b,st){const c=document.getElementById('card');const e=s=>s.replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]));
 c.innerHTML=`<div class="c"><h2>${e(b.n)}</h2><p><b>Държава:</b> ${e(b.c)}<br><b>Стил:</b> ${e(st)}<br><b>Алкохол:</b> ${b.abv?e(b.abv):'—'}<br><b>Сервиране:</b> ${e(b.srv)}</p><p>${e(b.notes)}</p>${b.cav?`<p class="cav">⚠️ ${e(b.cav)}</p>`:''}<button>Затвори</button></div>`;c.hidden=false;c.querySelector('button').onclick=()=>c.hidden=true}
document.getElementById('card').onclick=e=>{if(e.target.id==='card')e.target.hidden=true};
const r=document.createElement('ul'),root=node(TREE,[]);root.classList.add('open');r.append(root);document.getElementById('tree').append(r);

document.getElementById('lgw').innerHTML=LEGEND;
