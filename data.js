const B=(n,c,abv,srv,notes,cav)=>({n,c,abv,srv,notes,cav});
const TREE={n:"Бира",d:"Всички бири в менюто, подредени по стил.",k:[
{n:"Ейл",d:"Бири с горна ферментация – по-плодови и ароматни.",k:[
 {n:"Пейл ейл",d:"Светъл ейл с подчертан хмел.",k:[
  {n:"Американски пейл ейл",d:"Цитрусов и боров американски хмел, ясна горчивина.",b:[B("Sierra Nevada Pale Ale","САЩ","5,6%","Бутилка 355 мл","Бор и цитрус (хмел Cascade) върху карамелен малц, средно тяло, 38 IBU.")]},
  {n:"Английски пейл ейл",d:"По-сдържан хмел, балансиран и сух.",b:[B("Glarus Premium Pale Ale","България","4,2%","Бутилка 500 мл","Златиста, цитрусов аромат, балансиран вкус, сух финал, леко тяло.","Glarus е марка – провери, че бутилката е Premium Pale Ale.")]}]},
 {n:"Блонд ейл",d:"Лек, светъл и пивък ейл.",b:[B("Britos Hoppy Blond","България","5%","Бутилка 500 мл","Пет вида хмел, лек мандаринов аромат, ниска горчивина (12 IBU).")]},
 {n:"IPA",d:"Силно хмелен ейл.",k:[
  {n:"New England IPA",d:"Мътна, сочна, тропически плодове, ниска горчивина.",b:[B("O'Hara's 51st State IPA","Ирландия","6,0%","Наливна","Грейпфрут, маракуя, кайсия и праскова; мека горчивина и кремообразно тяло.")]}]},
 {n:"Стаут",d:"Тъмен ейл с печен ечемик.",k:[
  {n:"Ирландски сух стаут",d:"Печено-кафеен, сух финал.",b:[B("O'Hara's Irish Stout","Ирландия","4,3%","Наливна","Силен печен вкус, плътно тяло, аромат на кафе с лека нотка на сладник, сух еспресо финал, 36 IBU.")]}]},
 {n:"Портър",d:"Тъмен ейл с шоколад и карамел.",k:[]},
 {n:"Пшенична",d:"Бира с много пшеничен малц, мътна и освежаваща.",k:[
  {n:"Немска пшенична / Hefeweizen",d:"Нефилтрирана, банан и карамфил.",b:[B("Weihenstephaner Hefeweissbier","Германия","5,4%","Наливна","Банан и карамфил, мек кремообразен характер, 14 IBU."),B("Schöfferhofer Hefeweizen","Германия","5%","Бутилка 500 мл","Свежа, леко кисела и плодово-пикантна, кехлибарена.")]},
  {n:"Белгийска бяла / Witbier",d:"Лека, мътна, освежаваща.",b:[B("Blanche de Namur","Белгия","","Бутилка 330 мл","Мека, освежаваща, леко кисела, почти без горчивина. Разклати накрая бутилката.")]}]},
 {n:"Кисели бири",d:"Умишлено кисели бири.",k:[]},
 {n:"Белгийски ейлове",d:"Ароматна белгийска мая, често по-силни.",k:[
  {n:"Абатска тъмна / Dubbel",d:"Тъмна, малцова, сушени плодове.",b:[B("Leffe Brune","Белгия","6,5%","Бутилка 330 мл","Печен и плодов аромат, мек, кремообразен, леко сладък карамелен вкус.")]},
  {n:"Силен светъл белгийски ейл",d:"Светъл, сух, силен, много газиран.",b:[B("Duvel","Белгия","8,5%","Бутилка 330 мл","Леко плодова и суха, копринено тяло, леко горчив послевкус, голяма пяна. Внимание – силна!")]}]}]},
{n:"Лагер",d:"Бири с долна ферментация – чисти и свежи.",k:[
 {n:"Светъл лагер",d:"Светъл, чист и пивък.",k:[
  {n:"Чешки светъл лагер",d:"Малцов, с билков хмел Saaz.",b:[B("Bakalář Světlý Ležák","Чехия","4,9%","Бутилка 500 мл","Традиционна чешка рецепта, кратък горчиво-освежаващ финал, 30 IBU.")]},
  {n:"Международен светъл лагер",d:"Лек, чист, ниска горчивина.",b:[B("Kirin Ichiban","Япония","5%","Бутилка 330 мл","100% малц, само първо пресоване – чиста и гладка, 21 IBU."),B("Ichnusa","Италия (Сардиния)","4,7%","Бутилка 330 мл","Сламеножълта, леко малцова, умерена горчивина.","Данните са от резултати от търсене."),B("Corona Extra","Мексико","4,5%","Бутилка 330 мл","Мека, фина горчивина, чист финал; сервира се с лимон.")]}]},
 {n:"Пилзнер",d:"Светъл лагер с изразен хмел и горчивина.",b:[B("Krombacher Pils","Германия","4,8%","Наливна","Немски пилснер."),B("Krombacher Pils безалкохолна","Германия","0,0% или 0,4%","Бутилка 330 мл","Близо до пилс – хмелна, свежа, по-тънко тяло.","Има два продукта: 0,0% и Alkoholfrei 0,4%. Провери етикета!"),B("Carlsberg","Дания","5%","Бутилка 500 мл","Свеж, освежаващ пилснер с хмелен аромат.","ABV варира по пазари (5% / 3,8%) – провери етикета.")]},
 {n:"Хелес",d:"Мек, малцов баварски лагер.",k:[]},
 {n:"Мерцен / Октоберфест",d:"Кехлибарен, малцов, карамелен.",k:[]},
 {n:"Бок",d:"Силен, малцов немски лагер.",k:[]},
 {n:"Тъмен лагер",d:"Тъмен, лек печен малц.",k:[]}]}]};
const ORDER=["Krombacher Pils","Weihenstephaner Hefeweissbier","O'Hara's Irish Stout","O'Hara's 51st State IPA","Carlsberg","Britos Hoppy Blond","Bakalář Světlý Ležák","Schöfferhofer Hefeweizen","Glarus Premium Pale Ale","Blanche de Namur","Leffe Brune","Sierra Nevada Pale Ale","Kirin Ichiban","Ichnusa","Corona Extra","Duvel","Krombacher Pils безалкохолна"];
(function num(x){(x.b||[]).forEach(b=>{const i=ORDER.indexOf(b.n);if(i<0)throw b.n;b.n=(i+1)+'. '+b.n});(x.k||[]).forEach(num)})(TREE);
const LEGEND='<span class="lg"><i class="sw bt"></i>бутилка <i class="sw dr"></i>наливна <span class="lgb">горчивина: <span class="dot g"></span>ниска <span class="dot y"></span>средна <span class="dot r"></span>висока <span class="bang r">!</span>известна с горчивината си <span class="bang g">!</span>известна с липсата на горчивина</span></span>';
const BIT={"Krombacher Pils":[23,'y'],"Weihenstephaner Hefeweissbier":[14,'g'],"O'Hara's Irish Stout":[36,'r'],"O'Hara's 51st State IPA":[40,'r'],"Carlsberg":['~20–22 (по ревюта)','y'],"Britos Hoppy Blond":[12,'g'],"Bakalář Světlý Ležák":[30,'y'],"Schöfferhofer Hefeweizen":['14–20','g'],"Glarus Premium Pale Ale":[null,'y'],"Blanche de Namur":[null,'g'],"Leffe Brune":[null,'g'],"Sierra Nevada Pale Ale":[38,'r'],"Kirin Ichiban":[21,'y'],"Ichnusa":[null,'y'],"Corona Extra":[null,'g'],"Duvel":['~32','y'],"Krombacher Pils безалкохолна":['19–22','y']};
(function f(x){(x.b||[]).forEach(b=>{const k=b.n.replace(/^\d+\. /,'');[b.ibu,b.bit]=BIT[k]});(x.k||[]).forEach(f)})(TREE);
const BITN={g:'ниска',y:'средна',r:'висока'},BITC={g:'#2e9e3e',y:'#e8c21a',r:'#d0342c'};
const FAM={"Sierra Nevada Pale Ale":1,"Blanche de Namur":1};
(function f(x){(x.b||[]).forEach(b=>{b.fam=!!FAM[b.n.replace(/^\d+\. /,'')]});(x.k||[]).forEach(f)})(TREE);
const dot=b=>b.fam?`<span class="bang ${b.bit}" title="${b.bit=='r'?'известна с горчивината си':'известна с липсата на горчивина'}">!</span>`:`<span class="dot ${b.bit}" title="горчивина: ${BITN[b.bit]}"></span>`;
const FL={"Weihenstephaner Hefeweissbier":"🍌{c}🍞","O'Hara's Irish Stout":"☕","O'Hara's 51st State IPA":"🍍🍊🍑🍋","Carlsberg":"🍋🌸","Britos Hoppy Blond":"🍊🌸{g}{h}","Schöfferhofer Hefeweizen":"🍌{c}🍞","Glarus Premium Pale Ale":"🍋","Leffe Brune":"🍮☕","Sierra Nevada Pale Ale":"🌲🍋🍮","Ichnusa":"🍞","Corona Extra":"🍑🍊"};
(function f(x){(x.b||[]).forEach(b=>{b.fl=FL[b.n.replace(/^\d+\. /,'')]||''});(x.k||[]).forEach(f)})(TREE);
const FLEG="🍊 портокал/мандарина · 🍋 лимон/цитрус · 🍌 банан · 🍐 круша · 🍏 ябълка · 🍑 костилкови · 🍍 тропически · 🍇 сушени плодове · ☕ кафе/печено · 🍫 шоколад · 🍞 хляб/малц · 🍯 мед · 🍮 карамел · 🌲 бор · 🌸 цветя · {g} трева · {h} билки · {c} карамфил";
const CLOVE='<svg class="clove" viewBox="0 0 20 20" width="1em" height="1em" aria-label="карамфил" role="img"><g stroke="#fff3d6" stroke-width=".7" stroke-linejoin="round"><path d="M7.4 10 L12.6 10 L11 19.4 L9 19.4 Z" fill="#5a2e14"/><path d="M10 11.5 L3.2 6.8 L7.8 6.6 Z M10 11.5 L16.8 6.8 L12.2 6.6 Z M10 11.5 L4.8 2.6 L8.6 5.4 Z M10 11.5 L15.2 2.6 L11.4 5.4 Z" fill="#7a3418"/><circle cx="10" cy="6.4" r="3.8" fill="#a5512a"/></g><circle cx="8.8" cy="5.2" r="1.1" fill="#e09a6a"/></svg>';
const GRASS='<svg class="clove" viewBox="0 0 20 20" width="1em" height="1em" aria-label="трева" role="img"><g stroke="#f4ffe0" stroke-width=".7" stroke-linejoin="round"><path d="M4 19 Q3 11 1.5 7 Q5.5 11 7 19 Z" fill="#4c9a2a"/><path d="M7 19 Q7.5 9 6 2 Q10.5 9 10 19 Z" fill="#2f7d1f"/><path d="M10 19 Q12 10 16 4 Q13.5 11 13 19 Z" fill="#5fb336"/><path d="M13 19 Q15 13 19 10 Q16.5 14 16 19 Z" fill="#3e8a25"/></g></svg>';
const HERB='<svg class="clove" viewBox="0 0 20 20" width="1em" height="1em" aria-label="билки" role="img"><g stroke="#f4ffe0" stroke-width=".6"><path d="M10 19.5 Q9.4 11 10.6 1.5" fill="none" stroke="#5c6b3c" stroke-width="1.6"/><path d="M10 19.5 Q9.4 11 10.6 1.5" fill="none" stroke="#7d8f55" stroke-width=".8"/><g fill="#8aa678"><ellipse cx="6.8" cy="15" rx="3" ry="1.3" transform="rotate(-25 6.8 15)"/><ellipse cx="13" cy="13.6" rx="3" ry="1.3" transform="rotate(25 13 13.6)"/><ellipse cx="7" cy="10.4" rx="2.7" ry="1.2" transform="rotate(-30 7 10.4)"/><ellipse cx="13.2" cy="9" rx="2.7" ry="1.2" transform="rotate(30 13.2 9)"/><ellipse cx="7.6" cy="6" rx="2.3" ry="1.1" transform="rotate(-35 7.6 6)"/><ellipse cx="13.2" cy="4.8" rx="2.2" ry="1" transform="rotate(35 13.2 4.8)"/><ellipse cx="10.6" cy="1.8" rx="1" ry="1.6"/></g></g></svg>';
const flh=s=>(s||'').split('{c}').join(CLOVE).split('{g}').join(GRASS).split('{h}').join(HERB);
(function f(x,p){x.path=[...p,x.n];(x.b||[]).forEach(b=>b.path=x.path);(x.k||[]).forEach(k=>f(k,x.path))})(TREE,[]);
const crumb=p=>`<div class="crumb">${p.map(s=>s.replace(/[&<>]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[m]))).join(' › ')}</div>`;
const IMGS=[1,2,3,4,6,7,8,9,10,11,13,14,15,16,17];
const bno=b=>parseInt(b.n);
const bsrc=(b,t)=>IMGS.includes(bno(b))?`images/${String(bno(b)).padStart(2,'0')}${t?'-t':''}.jpg`:'images/glass.svg';
const bimg=b=>`<div class="bimg"><img src="${bsrc(b)}" alt="${b.n.replace(/"/g,'')}" loading="lazy" decoding="async"></div>`;
