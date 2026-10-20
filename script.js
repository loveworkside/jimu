/* ===== EDIT BAGIAN INI ===== */
const CONFIG = {
  location: { lat: -6.5975, lng: 106.7997, zoom: 16, name: "Tempat pertama kali kita jalan 💕" },
  letter: "Hey, pretty boy. \n\nThere’s something i’ve been wanting to tell you… ever since you came into my life, everything just felt a whole lot brighter. make sure to read this until the end, okay? ",
  songs: [
    { title: "Superpowers", artist: "Daniel Caesar", cover: "assets/picts/cover1.jpg", src: "assets/musics/Superpowers.mp3" },
    { title: "Nothing", artist: "Bruno Major", cover: "assets/picts/cover2.jpg", src: "assets/musics/Nothing.mp3" },
    { title: "Can't Help Falling in Love", artist: "Elvis Presley", cover: "assets/picts/cover3.jpg", src: "assets/musics/CantHelpFallingInLove.mp3" },
    { title: "If", artist: "Bread", cover: "assets/picts/cover4.jpg", src: "assets/musics/If.mp3" },
    { title: "Love", artist: "Wave to Earth", cover: "assets/picts/cover5.jpg", src: "assets/musics/Love.mp3" }
  ],
  photos: [
    { img: "assets/picts/Love1.jpg", cap: "Late Night Chats 🌙", d: "Listening to you ramble about your day is literally my favorite part of the evening." },
    { img: "assets/picts/Love2.jpg", cap: "Random Sweet Moments 🧸", d: "I love how soft, clingy, and cute you get whenever we talk." },
    { img: "assets/picts/Love3.jpg", cap: "Your Tengil Side 🤪", d: "Even when you're being noisy or possessive, it just makes me adore you more." },
    { img: "assets/picts/Love4.jpg", cap: "My Favorite Person 💖", d: "Just a little reminder that you mean so much to me, sayang." }
  ],
  loadingMs: 7000,
  loadingMessages: [
    "Wait for something spesial… 💗",
    "While listening the music… 🎵",
    "I have something for you… 📸",
    "Just… a little bit more…"
  ],
  catGif: "assets/kucing-peluk.gif",
  showLetter: true,
  apps: [
    { n:"Instagram", e:"📷", c:"linear-gradient(135deg,#feda75,#d62976,#4f5bd5)" },
    { n:"WhatsApp", e:"💬", c:"#25d366" },
    { n:"Telegram", e:"✈️", c:"#2aabee", ok:true },
    { n:"TikTok", e:"🎵", c:"#161616" },
    { n:"X", e:"✖", c:"#000" },
    { n:"Facebook", e:"f", c:"#1877f2" },
    { n:"Snapchat", e:"👻", c:"#f5d800" },
    { n:"Spotify", e:"🎧", c:"#1db954" },
    { n:"Discord", e:"🎮", c:"#5865f2" },
    { n:"LINE", e:"💚", c:"#06c755" },
    { n:"YouTube", e:"▶️", c:"#ff0000" },
    { n:"Pinterest", e:"📌", c:"#e60023" }
  ],
  wrongMsgs: [
    "Nope, not that one 🙈",
    "Hmm, try again sayang",
    "Wrong choice... did you really forget it?",
    "So close! Think again cintaku"
  ],
  rightMsg: "Nice, This is where it all started ✈️",
  tenSeconds: 10,
  love10: [
    { t: "(1.) Your smile :)", d: "Your smile literally brightens up my day. It's so cute and effortlessly warm, I can never get tired of looking at it.", img: "assets/picts/Jimu1.jpg" },
    { t: "(2.) Your personality", d: "I love how playful, sweet, and wonderfully clingy you are. Your tengil side is honestly my absolute favorite.", img: "assets/picts/Jimu2.jpg" },
    { t: "(3.) Your eyes", d: "Your eyes are so expressive and pretty. They hold a soft charm that instantly makes me feel safe and happy.", img: "assets/picts/Jimu3.jpg" },
    { t: "(4.) Your voice", d: "Listening to you talk, ramble, or just be noisy is my favorite sound. Your voice is so comforting to hear.", img: "assets/picts/Jimu4.jpg" },
    { t: "(5.) Your humor", d: "You always know how to make me laugh. Your jokes and witty responses never fail to fix a bad day.", img: "assets/picts/Jimu5.jpg" },
    { t: "(6.) Your manners", d: "The gentle and respectful way you treat me means everything. You're always so considerate and attentive.", img: "assets/picts/Jimu6.jpg" },
    { t: "(7.) Your style", d: "You have such a cool and effortless style. Whatever you wear, you always look so handsome and attractive.", img: "assets/picts/Jimu7.jpg" },
    { t: "(8.) Your music taste", d: "I love the tracks you share with me. Sharing music with you makes every song feel so much more special.", img: "assets/picts/Jimu8.jpg" },
    { t: "(9.) Your kindness", d: "You have the softest heart. The way you care about me and show your love is truly priceless.", img: "assets/picts/Jimu9.jpg" },
    { t: "(10.) just you.", d: "Just you, as you are. All the little details about you are the exact reason why I fell so hard.", img: "assets/picts/Jimu10.jpg" }
  ],
  hello: { img: "assets/picts/Chat.jpg", cap: "hello, Jimuku.", desc: "It all started with one simple 'hi'... and my days haven't been the same ever since." },
  itemSeconds: 10,
  helloSeconds: 8,
  vouchers: [
    { title: "Rave Movie Date 🎬", detail: "Your pick on whatever film or anime we're watching together on Rave." },
    { title: "Call Me 'Pacarku' 💌", detail: "Valid forever. You can proudly call me your girlfriend now." },
    { title: "Sleep Call Pass 🌙", detail: "Valid for one late-night call until you safely fall asleep." }
  ],
  finalNote: "Glad you're here sayang. Let's make more good memories together ya?",
  tgUser: "Mavnyun",
  tgMessage: "So, we're official now?"
};
/* =========================== */

const $ = id => document.getElementById(id);
function go(from, to, load, cb){
  const a=$(from); a.classList.add('out');
  setTimeout(()=>{
    a.classList.remove('active','out');
    const show=()=>{$(to).classList.add('active'); window.scrollTo(0,0); if(cb)cb();};
    if(!load){show();return;}
    runLoader(typeof load==='number'?load:CONFIG.loadingMs, show);
  },700);
}
function runLoader(ms, done){
  const L=$('loader'), bar=$('bar'), msg=$('loadMsg'), m=CONFIG.loadingMessages;
  L.classList.add('show'); bar.style.transition='none'; bar.style.width='0'; bar.offsetWidth;
  bar.style.transition='width '+ms+'ms linear'; bar.style.width='100%';
  let i=0; msg.textContent=m[0];
  const t=setInterval(()=>{i=(i+1)%m.length; msg.textContent=m[i];}, Math.max(1500, ms/m.length));
  setTimeout(()=>{clearInterval(t); L.classList.remove('show'); done();}, ms);
}

// floating hearts
for(let i=0;i<18;i++){
  const s=document.createElement('span');s.textContent=['💗','💖','🌸','✨'][i%4];
  s.style.left=Math.random()*100+'%';s.style.fontSize=(14+Math.random()*22)+'px';
  s.style.animationDuration=(8+Math.random()*10)+'s';s.style.animationDelay=(-Math.random()*12)+'s';$('bg').appendChild(s);
}

// STEP 2: letter
let opened=false;
$('env').addEventListener('click',()=>{
  if(opened) return; opened=true; $('env').classList.add('open'); $('envHint').style.visibility='hidden';
  const el=$('typed'); let i=0;
  setTimeout(function type(){
    el.innerHTML=CONFIG.letter.slice(0,i).replace(/</g,'&lt;')+'<span class="cursor"></span>';
    if(i++<CONFIG.letter.length) setTimeout(type,55);
    else{el.innerHTML=CONFIG.letter; $('to3').style.display='inline-block';}
  },1400);
});
$('to3').onclick=()=>go('s2','s4',true);

// STEP 0: pilih lagu (vinyl + tracklist)
const audio=new Audio(); audio.loop=true; audio.volume=.7;
const POS=[[7,64],[18,26],[41.4,5.5],[67,26],[75.8,63.5]], COL=['#ff9ccb','#ffe27a','#c3a6ff','#8fc4ff','#a8f0b0'];
function pick(i){
  const s=CONFIG.songs[i];
  document.querySelectorAll('.vcover,.trk').forEach(e=>e.classList.toggle('sel',+e.dataset.i===i));
  audio.src=s.src; audio.play().catch(()=>{});
  $('now').textContent='🎶 Sedang diputar: '+s.title+' - '+s.artist;
  $('start').disabled=false; $('muteBtn').style.display='block'; $('muteBtn').textContent='🔊';
}
CONFIG.songs.forEach((s,i)=>{
  const n=String(i+1).padStart(2,'0');
  const v=document.createElement('button'); v.className='vcover'; v.dataset.i=i; v.title=s.title;
  v.style.cssText='left:'+POS[i][0]+'%;top:'+POS[i][1]+'%;--c:'+COL[i]+';';
  v.innerHTML='<b class="ph">🎵</b><img src="'+s.cover+'" alt="" onerror="this.remove()"><span class="num">'+n+'</span><em class="cap">'+s.title+'</em>'; v.onclick=()=>pick(i); $('vinyl').appendChild(v);
  const t=document.createElement('button'); t.className='trk'; t.dataset.i=i;
  t.innerHTML='<em>'+n+'</em><span><b>'+s.title+'</b> - '+s.artist+'</span>'; t.onclick=()=>pick(i); $('tracks').appendChild(t);
});
$('start').onclick=()=>go('s0','s10',false,startTen);

// STEP 4: foto satu per satu
let ph=0; const PHC=['#16a3b3','#7b2cbf','#2fa84f','#1d4ed8','#a31621'];
function showPhoto(){
  const p=CONFIG.photos[ph], n=CONFIG.photos.length;
  $('phCnt').textContent=(ph+1)+' / '+n;
  setFrame($('phFr'),p.img,'📸');
  $('phTag').textContent=p.cap; $('phTag').style.background=PHC[ph%5];
  $('phDesc').textContent=p.d;
  $('prev').disabled=ph===0; $('next').disabled=ph===n-1;
  if(ph===n-1) $('to5').style.display='inline-block';
  const c=$('phCard'); c.style.animation='none'; c.offsetWidth; c.style.animation='';
}
$('prev').onclick=()=>{if(ph>0){ph--;showPhoto();}};
$('next').onclick=()=>{if(ph<CONFIG.photos.length-1){ph++;showPhoto();}};
showPhoto();
$('to5').onclick=()=>go('s4','s5');

// STEP 5: runaway NO button
const no=$('no');
function dodge(e){
  if(e) {e.preventDefault();}
  no.style.position='fixed';
  const w=no.offsetWidth,h=no.offsetHeight,pad=10;
  const x=pad+Math.random()*(innerWidth-w-pad*2), y=pad+Math.random()*(innerHeight-h-pad*2);
  no.style.left=x+'px'; no.style.top=y+'px'; no.style.zIndex=20;
}
['mouseenter','touchstart','pointerdown','focus'].forEach(ev=>no.addEventListener(ev,dodge,{passive:false}));
no.addEventListener('click',e=>{e.preventDefault();dodge();});
document.addEventListener('mousemove',e=>{
  if($('s5').classList.contains('active')){
    const r=no.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
    if(Math.hypot(e.clientX-cx,e.clientY-cy)<110) dodge();
  }
});

// STEP 6: celebration
$('yes').onclick=()=>{
  $('catgif').src=CONFIG.catGif;
  go('s5','celebrate',3000);
  setTimeout(()=>{
    const end=Date.now()+5000;
    (function frame(){
      confetti({particleCount:6,angle:60,spread:70,origin:{x:0},colors:['#ff8fab','#ffc8dd','#d9a38f','#fff']});
      confetti({particleCount:6,angle:120,spread:70,origin:{x:1},colors:['#ff8fab','#ffc8dd','#d9a38f','#fff']});
      if(Date.now()<end) requestAnimationFrame(frame);
    })();
    confetti({particleCount:180,spread:120,origin:{y:.6},shapes:['circle'],scalar:1.2});
  },3750);
  startTimer();
};

// mute / pause musik
$('muteBtn').onclick=()=>{ if(audio.paused){audio.play();$('muteBtn').textContent='🔊';} else {audio.pause();$('muteBtn').textContent='🔇';} };

// Setelah diterima: kupon cinta, timer jadian, catatan akhir, Telegram
CONFIG.vouchers.forEach(v=>{
  const d=document.createElement('div'); d.className='voucher';
  d.innerHTML='<div class="in"><div class="f">'+v.title+'</div><div class="b">'+v.detail+'</div></div>';
  d.onclick=()=>d.classList.toggle('flip'); $('vouchers').appendChild(d);
});
$('finalNote').textContent=CONFIG.finalNote;
$('tgBtn').onclick=()=>{
  try{navigator.clipboard.writeText(CONFIG.tgMessage);}catch(e){}
  window.open('https://t.me/'+CONFIG.tgUser+'?text='+encodeURIComponent(CONFIG.tgMessage),'_blank');
};
$('replay').onclick=()=>location.reload();
function startTimer(){
  const t0=Date.now();
  setInterval(()=>{
    let s=Math.floor((Date.now()-t0)/1000);
    const m=Math.floor(s/60), h=Math.floor(m/60);
    $('timer').textContent=(h?h+' jam ':'')+(m%60?m%60+' menit ':'')+(s%60)+' detik 💞';
  },1000);
}

// STEP 0b: 10 hal yang kusuka
const POS10=[[3,3],[41,2],[79,3],[79,27],[3,27],[3,50],[79,50],[3,73],[41,80],[79,72]];
const TAGC=['#a31621','#16a3b3','#7b2cbf','#2fa84f','#1d4ed8'];
CONFIG.love10.forEach((it,i)=>{
  const d=document.createElement('div'); d.className='fi';
  d.style.cssText='left:'+POS10[i][0]+'%;top:'+POS10[i][1]+'%;--r:'+((i%2?2.5:-2.5))+'deg;animation-duration:'+(3+Math.random()*2.5).toFixed(1)+'s;animation-delay:'+(-Math.random()*4).toFixed(1)+'s';
  const right=POS10[i][0]>55;
  d.innerHTML='<div class="fr"><b class="ph">🌸</b><img src="'+it.img+'" alt="" onerror="this.remove()"></div><span class="tg" style="background:'+TAGC[i%5]+';'+(right?'right:-4%':'left:-4%')+'">'+it.t+'</span>';
  $('stage').appendChild(d);
});
function startTen(){
  const bar=$('tenBar'), s=CONFIG.tenSeconds;
  bar.style.transition='none'; bar.style.width='0'; bar.offsetWidth;
  bar.style.transition='width '+s+'s linear'; bar.style.width='100%';
  setTimeout(()=>{ $('tenLoad').classList.add('done'); $('tenNext').classList.add('show'); }, s*1000);
}
$('tenNext').onclick=()=>go('s10','s11',false,()=>{idx10=0;showItem();});

// helper
function runBar(bar,load,btn,secs){
  load.classList.remove('done'); btn.classList.remove('show');
  bar.style.transition='none'; bar.style.width='0'; bar.offsetWidth;
  bar.style.transition='width '+secs+'s linear'; bar.style.width='100%';
  clearTimeout(bar._t); bar._t=setTimeout(()=>{load.classList.add('done'); btn.classList.add('show');},secs*1000);
}
function setFrame(el,src,emoji){
  el.innerHTML='<b class="ph">'+emoji+'</b><img src="'+src+'" alt="" onerror="this.remove()">';
}

// STEP 0c: 10 hal satu per satu
let idx10=0;
function showItem(){
  const it=CONFIG.love10[idx10], n=CONFIG.love10.length;
  $('itCnt').textContent=(idx10+1)+' / '+n;
  setFrame($('itFr'),it.img,'🌸');
  $('itTag').textContent=it.t; $('itTag').style.background=TAGC[idx10%5];
  $('itDesc').textContent=it.d;
  $('itNext').textContent=idx10===n-1?'Next 💖':'Next →';
  const c=$('itCard'); c.style.animation='none'; c.offsetWidth; c.style.animation='';
  runBar($('itBar'),$('itLoad'),$('itNext'),CONFIG.itemSeconds);
}
$('itNext').onclick=()=>{
  if(idx10<CONFIG.love10.length-1){idx10++;showItem();}
  else go('s11','s12',false,startHello);
};

// STEP 0d: our first hello (FIXED IMAGE LOADING)
function startHello(){
  const H = CONFIG.hello;
  const img = $('helloImg');
  img.style.display = 'block';
  img.src = H.img;
  $('helloCap').textContent = H.cap; 
  $('helloDesc').textContent = H.desc;
  runBar($('hBar'), $('hLoad'), $('hNext'), CONFIG.helloSeconds);
}
$('hNext').onclick=()=>go('s12','sApps');

// STEP: tebak aplikasi
let appDone=false, wi=0;
CONFIG.apps.forEach(a=>{
  const b=document.createElement('button'); b.className='app';
  b.style.setProperty('--r',(Math.random()*6-3).toFixed(1)+'deg');
  b.style.animationDuration=(2.6+Math.random()*2).toFixed(1)+'s'; b.style.animationDelay=(-Math.random()*3).toFixed(1)+'s';
  b.innerHTML='<div class="ic" style="background:'+a.c+'">'+a.e+'</div>'+a.n;
  b.onclick=()=>{
    if(appDone) return;
    const ic=b.firstChild;
    if(a.ok){
      appDone=true; b.classList.add('win'); $('apps').classList.add('done');
      $('appMsg').textContent=CONFIG.rightMsg; $('appNext').classList.add('show');
      confetti({particleCount:90,spread:80,origin:{y:.55},colors:['#2aabee','#ff8fab','#ffd93b','#fff']});
    } else {
      ic.classList.remove('shake'); ic.offsetWidth; ic.classList.add('shake');
      $('appMsg').textContent=CONFIG.wrongMsgs[wi++%CONFIG.wrongMsgs.length];
    }
  };
  $('apps').appendChild(b);
});
$('appNext').onclick=()=>CONFIG.showLetter?go('sApps','s2'):go('sApps','s4',true);

// dekorasi mengambang global
(function(){
  const bg=$('bg'), P=['#ffd93b','#2fb344','#f27ab0','#1e2a5e','#16a3b3','#7b2cbf'];
  ['b1','b2','b3'].forEach(c=>{const e=document.createElement('i'); e.className='burst '+c; bg.appendChild(e);});
  for(let i=0;i<14;i++){
    const e=document.createElement('i'); e.className='sp'; const s=16+Math.random()*26;
    e.style.cssText='--c:'+P[i%P.length]+';left:'+(Math.random()*96)+'%;top:'+(Math.random()*94)+'%;width:'+s+'px;height:'+s+'px;opacity:.75;animation-duration:'+(3+Math.random()*3).toFixed(1)+'s;animation-delay:'+(-Math.random()*4).toFixed(1)+'s';
    bg.appendChild(e);
  }
})();

// teks pertanyaan
(function(){
  const t=$('qTitle'); const words=['Would','you','be','my','boyfriend?','🥺💕'];
  words.forEach((w,i)=>{const s=document.createElement('span'); s.className='w'; s.textContent=w; s.style.animationDelay=(i*0.45)+'s'; t.appendChild(s);});
})();