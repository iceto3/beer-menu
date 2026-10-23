const NS='http://www.w3.org/2000/svg',W=150,H=40,GX=14,GY=80,vp=document.getElementById('vp'),svg=document.getElementById('svg');
const has=x=>(x.b&&x.b.length)||(x.k&&x.k.some(has));
function build(x,st){const kids=[...(x.k||[]).map(k=>build(k,k.n)),...(x.b||[]).map(b=>({beer:b,st:x.n,label:b.n,c:[]}))];
 return {label:x.n,d:x.d,path:x.path,empty:!has(x),c:kids}}
const root=build(TREE);root.root=1;
const ale=root.c.find(c=>c.label==='Ейл'),lag=root.c.find(c=>c.label==='Лагер');root.c=[lag,ale];
let nx=0;function lay(n,dp){n.y=dp*(H+GY);if(!n.c.length){n.x=nx;nx+=W+GX}else{n.c.forEach(c=>lay(c,dp+1));n.x=(n.c[0].x+n.c[n.c.length-1].x)/2}}lay(root,0);
const el=(t,a,p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);(p||vp).append(e);return e};
function lines(s){const w=s.split(' '),o=[''];w.forEach(x=>{if((o[o.length-1]+' '+x).length>20&&o[o.length-1])o.push(x);else o[o.length-1]=(o[o.length-1]+' '+x).trim()});return o.slice(0,2)}
function draw(n){n.c.forEach(c=>{const my=n.y+H+GY/2;el('path',{d:`M${n.x+W/2},${n.y+H} V${my} H${c.x+W/2} V${c.y}`});draw(c)});
 const g=el('g',{class:'nd'+(n.beer?' b':'')+(n.beer&&n.beer.srv.startsWith('Наливна')?' d':'')+(n.empty&&!n.beer?' e':'')+(n.root?' r':''),transform:`translate(${n.x},${n.y})`});
 el('rect',{width:W,height:H,rx:8},g);const L=lines(n.label);L.forEach((t,i)=>{el('text',{x:W/2,y:H/2+(i-(L.length-1)/2)*15+4,'text-anchor':'middle'},g).textContent=t});
 if(n.beer&&n.beer.fl){const fo=el('foreignObject',{x:0,y:H+1,width:W,height:18},g);fo.innerHTML=`<div xmlns="http://www.w3.org/1999/xhtml" class="fo">${flh(n.beer.fl)}</div>`}if(n.beer){if(n.beer.fam){el('text',{x:W-9,y:13,'text-anchor':'middle',style:`font-size:17px;font-weight:900;fill:${BITC[n.beer.bit]};stroke:#fff;stroke-width:3px;paint-order:stroke`},g).textContent='!'}else el('circle',{cx:W-8,cy:8,r:5,fill:BITC[n.beer.bit],stroke:'#fff','stroke-width':1.5},g)}g.dataset.id=all.push(n)-1}
const all=[];draw(root);
const e=s=>s.replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m])),cd=document.getElementById('card');
function show(n){if(n.beer){const b=n.beer;cd.innerHTML=`<div class="c">${crumb(b.path)}${bimg(b)}<h2>${e(b.n)} ${dot(b)} ${flh(b.fl)}</h2><p><b>Държава:</b> ${e(b.c)}<br><b>Стил:</b> ${e(n.st)}<br><b>Алкохол:</b> ${b.abv?e(b.abv):'—'}<br><b>Горчивина:</b> ${dot(b)} ${BITN[b.bit]}${b.ibu?' ('+e(String(b.ibu))+' IBU)':''}<br><b>Сервиране:</b> ${e(b.srv)}</p><p>${e(b.notes)}</p>${b.cav?`<p class="cav">⚠️ ${e(b.cav)}</p>`:''}<button>Затвори</button></div>`}
 else cd.innerHTML=`<div class="c">${crumb(n.path)}<h2>${e(n.label)}</h2><p>${e(n.d||'')}</p>${n.empty?'<p><i>Все още няма бира от този стил в менюто.</i></p>':''}<button>Затвори</button></div>`;
 cd.hidden=false;cd.querySelector('button').onclick=()=>cd.hidden=true}
cd.onclick=ev=>{if(ev.target===cd)cd.hidden=true};
let s=1,tx=0,ty=0;const ap=()=>vp.setAttribute('transform',`translate(${tx},${ty}) scale(${s})`);
function zoom(f,cx,cy){const ns=Math.min(4,Math.max(.05,s*f));f=ns/s;tx=cx-(cx-tx)*f;ty=cy-(cy-ty)*f;s=ns;ap()}
function fit(){const bb=vp.getBBox(),w=innerWidth,h=innerHeight-50;s=Math.min(w/(bb.width+40),h/(bb.height+40));tx=(w-bb.width*s)/2-bb.x*s;ty=50+(h-bb.height*s)/2-bb.y*s;ap()}
fit();addEventListener('resize',fit);
const C=()=>[innerWidth/2,innerHeight/2];zi.onclick=()=>zoom(1.4,...C());zo.onclick=()=>zoom(1/1.4,...C());zr.onclick=fit;
svg.addEventListener('wheel',ev=>{ev.preventDefault();zoom(Math.exp(-ev.deltaY*.0015),ev.clientX,ev.clientY)},{passive:false});
const P=new Map();let moved=0,pd=0,lastTap=0,start;
svg.addEventListener('pointerdown',ev=>{svg.setPointerCapture(ev.pointerId);P.set(ev.pointerId,[ev.clientX,ev.clientY]);moved=0;start=[ev.clientX,ev.clientY];if(P.size==2){const[a,b]=[...P.values()];pd=Math.hypot(a[0]-b[0],a[1]-b[1])}});
svg.addEventListener('pointermove',ev=>{if(!P.has(ev.pointerId))return;const o=P.get(ev.pointerId),nw=[ev.clientX,ev.clientY];P.set(ev.pointerId,nw);
 if(Math.hypot(nw[0]-start[0],nw[1]-start[1])>8)moved=1;
 if(P.size==1){tx+=nw[0]-o[0];ty+=nw[1]-o[1];ap()}else if(P.size==2){const[a,b]=[...P.values()],d=Math.hypot(a[0]-b[0],a[1]-b[1]);if(pd)zoom(d/pd,(a[0]+b[0])/2,(a[1]+b[1])/2);pd=d;moved=1}});
const up=ev=>{const was=P.size;P.delete(ev.pointerId);if(P.size<2)pd=0;if(was!=1||moved)return;
 const now=Date.now();if(now-lastTap<300){lastTap=0;zoom(2,ev.clientX,ev.clientY);return}lastTap=now;
 const t=document.elementFromPoint(ev.clientX,ev.clientY);const g=t&&t.closest&&t.closest('.nd');
 if(g){const n=all[g.dataset.id];setTimeout(()=>{if(lastTap===now)show(n)},300)}};
svg.addEventListener('pointerup',up);svg.addEventListener('pointercancel',ev=>{P.delete(ev.pointerId);pd=0});
svg.addEventListener('dblclick',ev=>ev.preventDefault());document.addEventListener('gesturestart',ev=>ev.preventDefault());
document.getElementById('lgm').outerHTML=LEGEND;const fd=document.createElement('details');fd.id='fleg';fd.innerHTML='<summary>Вкусове</summary>'+flh(FLEG);document.body.append(fd);
