/* ROMANTIC LOVE WEBSITE — JAVASCRIPT */
const CONFIG={
MY_NAME:"Mr. Dip",HER_NAME:"Chitralekha",OUR_FIRST_MEETING_DATE:"02/04/2026",OUR_SPECIAL_DATE:"07/05/2026",BACKGROUND_MUSIC:"assets/music/romantic.mp3",
OUR_MEMORIES:[
{date:"12/04/2026",title:"💕 The Day We Met",text:"The day our paths crossed became the beginning of a beautiful chapter in my life."},
{date:"02/04/2026",title:"🌹 The First Conversation",text:"A simple conversation that somehow became one of the memories I still smile about."},
{date:"12/04/2026",title:"✨ When You Became Special",text:"Somewhere between the conversations and the little moments, you became someone truly special to me."},
{date:"26/04/2026",title:"🥰 Our Beautiful Memories",text:"Every laugh, every conversation and every little moment became another memory I wanted to keep forever."},
{date:"05/07/2026",title:"💖 Moments I'll Never Forget",text:"There are moments that time cannot erase because they have already found a permanent place in the heart."},
{date:"Today & Tomorrow",title:"♾️ Our Journey Ahead",text:"And this isn't where our story ends. There are still so many beautiful chapters waiting to be written."}],
OUR_REASONS:[
["Your Smile 😊","Your smile has a beautiful way of making ordinary moments feel special."],["Your Kind Heart ❤️","The kindness you show to people says so much about the beautiful person you are."],["The Way You Care 🥰","The little ways you care about the people you love mean more than you probably realize."],["Your Personality ✨","There is something uniquely you about you, and that's something I never want to take for granted."],["You Make Me Laugh 😂","Life is simply more fun when I can share a laugh with you."],["Your Presence 🌹","Sometimes you don't have to say anything. Just having you around makes things better."],["Your Little Habits 💕","Even the tiny things you do have somehow become some of my favorite things."],["Your Strength 🌙","I admire the strength and courage you carry, even during difficult days."],["Your Honesty 🤍","Being able to be genuine and honest is one of the things I value most about you."],["Your Voice 🎵","There is something comforting about hearing you talk, even about the simplest things."],["Your Energy 🦋","You bring a special energy into my life that makes things feel brighter."],["Our Conversations 💬","Some of my favorite moments are simply the moments when we talk."],["Your Dreams ✨","I love seeing the dreams and hopes that make you uniquely you."],["Your Little Smile ❤️","Even a tiny smile from you can become a highlight of my day."],["The Way You Understand Me 🥹","Being understood by someone is a beautiful feeling, and I treasure that."],["You Inspire Me 🌟","You remind me that beautiful things can grow from ordinary days."],["Your Warmth 🌸","You have a way of making moments feel warmer and more meaningful."],["Our Memories 📸","Every memory with you becomes something I want to keep close to my heart."],["Simply Because You're You 💖","I don't need one single reason. I love and appreciate the person you are."],["Everything About You ♾️","Some feelings are difficult to put into a list. This is one of them."]],
OUR_LETTERS:[
["Letter 1 — Why I Love You",`My Love,

There are so many reasons why you are special to me, and somehow every reason feels too small when compared with what you mean to my heart.

I love the happiness you bring into ordinary moments.

I love the little conversations, the laughter, the memories and the feeling of simply knowing that you are there.

Most of all, I love that you are completely yourself.

And that person is someone I feel incredibly lucky to know.

With love,
Always ❤️`],
["Letter 2 — What You Mean To Me",`My Dearest,

You mean more to me than a simple sentence could ever explain.

You are part of so many thoughts, smiles and memories that have become important pieces of my life.

When I think about beautiful moments, somehow you are there in many of them.

Thank you for being such a meaningful part of my story.

You are precious to me. ❤️`],
["Letter 3 — When I Miss You",`My Love,

Sometimes I wish I could pause time during our happiest moments.

And sometimes, when you're not around, I realize just how much your presence means to me.

I miss the conversations.

I miss the laughter.

I miss the little moments that we sometimes don't realize are special until they're gone.

Until then, I'll keep every beautiful memory close to my heart. ❤️`],
["Letter 4 — Thank You For Being You",`Thank you.

For your kindness.

For your laughter.

For your patience.

For the little moments.

For the memories.

For simply being yourself.

I hope you always know that you don't have to become someone else to be special.

You already are.

And I am genuinely grateful that our paths crossed. 🌹`],
["Letter 5 — My Promise To You",`My Love,

I cannot predict everything the future will bring.

But I can promise that I will always value the memories we create.

I will appreciate the little things.

I will respect your heart.

I will celebrate your happiness.

And I will always be grateful for the beautiful moments we share.

Whatever chapters come next, I hope we continue writing them with kindness, laughter and love.

Always. ❤️`]],
OUR_PHOTOS:[
["assets/photos/photo1.jpg","One of my favorite memories with you ❤️"],["assets/photos/photo2.jpg","A moment I wish I could keep forever 🌹"],["assets/photos/photo3.jpg","Another beautiful page of our story ✨"],["assets/photos/photo4.jpg","You made this moment unforgettable 💕"],["assets/photos/photo5.jpg","A memory close to my heart 📸"],["assets/photos/photo6.jpg","Just another reason to smile ❤️"]],
OUR_BUCKET_LIST:["🌅 Watch the sunrise together","🌙 Watch the stars together","🌧️ Walk together in the rain","🍕 Have late-night food together","🎬 Watch our favorite movies","📸 Take countless pictures together","✈️ Travel somewhere beautiful","🌊 Visit the beach together","🎂 Celebrate countless birthdays together","❤️ Create a lifetime of memories"]
};

const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
$("#openingName").textContent=CONFIG.HER_NAME;$("#heroName").textContent=CONFIG.MY_NAME+" ❤️";$("#year").textContent=new Date().getFullYear();
const music=$("#bgMusic"),musicButton=$("#musicControl");let musicPlaying=false;music.src=CONFIG.BACKGROUND_MUSIC;
musicButton.addEventListener("click",async()=>{try{if(!musicPlaying){await music.play();musicPlaying=true;musicButton.textContent="🔊"}else{music.pause();musicPlaying=false;musicButton.textContent="🎵"}}catch(e){console.log("Music requires user interaction.")}});
$("#openSurprise").addEventListener("click",()=>{createHeartExplosion();createPetals(35);createFloatingHearts(20);$("#opening").classList.add("hide");setTimeout(()=>{$("#opening").style.display="none";$("#mainSite").classList.remove("hidden");window.scrollTo({top:0,behavior:"instant"});document.body.classList.remove("no-scroll")},900)});
function createStars(){for(let i=0;i<100;i++){const s=document.createElement("span");s.className="star";s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";s.style.animationDelay=Math.random()*4+"s";$("#stars").appendChild(s)}}createStars();
function createPetals(n=15){const c=$("#petals"),a=["🌹","🌸","🌺","🌷"];for(let i=0;i<n;i++){const p=document.createElement("span");p.className="petal";p.textContent=a[Math.floor(Math.random()*a.length)];p.style.left=Math.random()*100+"vw";p.style.fontSize=12+Math.random()*15+"px";p.style.animationDuration=5+Math.random()*7+"s";p.style.setProperty("--drift",Math.random()*200-100+"px");c.appendChild(p);setTimeout(()=>p.remove(),13000)}}
function createFloatingHearts(n=10){const c=$("#floating-hearts"),a=["❤️","💕","💖","💗","💓","💞","💘","💝"];for(let i=0;i<n;i++){const h=document.createElement("span");h.className="floating-heart";h.textContent=a[Math.floor(Math.random()*a.length)];h.style.left=Math.random()*100+"vw";h.style.bottom="-30px";h.style.animationDuration=5+Math.random()*7+"s";h.style.animationDelay=Math.random()*4+"s";c.appendChild(h);setTimeout(()=>h.remove(),13000)}}setInterval(()=>createFloatingHearts(3),3500);
function createHeartExplosion(){const a=["❤️","💕","💖","💗","💓","💞","💘","💝","✨"];for(let i=0;i<45;i++){const h=document.createElement("span");h.className="explosion-heart";h.textContent=a[Math.floor(Math.random()*a.length)];const angle=Math.random()*Math.PI*2,d=150+Math.random()*450;h.style.setProperty("--tx",Math.cos(angle)*d+"px");h.style.setProperty("--ty",Math.sin(angle)*d+"px");h.style.setProperty("--rotate",Math.random()*360+"deg");document.body.appendChild(h);setTimeout(()=>h.remove(),1700)}}
CONFIG.OUR_MEMORIES.forEach(m=>{const e=document.createElement("article");e.className="timeline-item";e.innerHTML=`<span class="timeline-dot"></span><div class="timeline-card"><span class="date">${m.date}</span><h3>${m.title}</h3><p>${m.text}</p></div>`;$("#timeline").appendChild(e)});
CONFIG.OUR_REASONS.forEach(r=>{const c=document.createElement("article");c.className="reason-card";c.innerHTML=`<div class="reason-inner"><div class="reason-front">${r[0]}</div><div class="reason-back">${r[1]}</div></div>`;c.addEventListener("click",()=>c.classList.toggle("flipped"));$("#reasonsGrid").appendChild(c)});
const letterModal=$("#letterModal");function closeLetter(){letterModal.classList.remove("active");document.body.classList.remove("no-scroll")}
CONFIG.OUR_LETTERS.forEach(l=>{const e=document.createElement("article");e.className="envelope";e.innerHTML=`<div class="envelope-icon">💌</div><h3>${l[0]}</h3><p>Click to open</p>`;e.addEventListener("click",()=>{$("#modalLetterTitle").textContent=l[0];$("#modalLetterText").textContent=l[1];letterModal.classList.add("active");document.body.classList.add("no-scroll")});$("#lettersGrid").appendChild(e)});
$("#closeLetter").addEventListener("click",closeLetter);$("#closeLetterButton").addEventListener("click",closeLetter);letterModal.addEventListener("click",e=>{if(e.target===letterModal)closeLetter()});
const heartLetter=`My Dearest Love, ❤️

There are some people who become important to us so quietly that we don't even notice the exact moment it happens.

And then one day, we look back and realize that they have become part of so many of our favorite thoughts, memories and dreams.

You are that person for me.

You have made life feel a little brighter.

You have made ordinary conversations feel meaningful.

You have given me memories that I will always carry close to my heart.

And sometimes I wish I could collect every beautiful moment we have shared and keep them somewhere safe forever.

I appreciate you more than I probably say.

I appreciate your smile.

Your kindness.

Your laughter.

Your presence.

The little things you do.

The way you make ordinary moments feel special.

And when I miss you, I realize even more how precious those moments are.

I don't know exactly what every tomorrow will look like.

But I know that I want to keep creating beautiful memories.

More laughter.

More conversations.

More adventures.

More photographs.

More sunsets.

More little moments that become stories we tell someday.

Most importantly, I want you to always know that you deserve to be valued, respected and appreciated.

Thank you for being part of my life.

Thank you for every beautiful memory.

Thank you for every smile.

And thank you for simply being you.

With all my heart,

Always yours ❤️`;
let letterStarted=false;function typeWriter(el,text,speed=18){let i=0;el.textContent="";(function type(){if(i<text.length){el.textContent+=text.charAt(i++);setTimeout(type,speed)}})()}
CONFIG.OUR_PHOTOS.forEach(p=>{const c=document.createElement("article");c.className="memory-card";c.style.setProperty("--rotation",Math.random()*4-2+"deg");c.innerHTML=`<img src="${p[0]}" alt="${p[1]}" loading="lazy"><div class="memory-caption">${p[1]}</div>`;c.addEventListener("click",()=>{$("#modalPhoto").src=p[0];$("#modalCaption").textContent=p[1];$("#photoModal").classList.add("active");document.body.classList.add("no-scroll")});$("#gallery").appendChild(c)});
function closePhoto(){$("#photoModal").classList.remove("active");document.body.classList.remove("no-scroll")}$("#closePhoto").addEventListener("click",closePhoto);$("#photoModal").addEventListener("click",e=>{if(e.target===$("#photoModal"))closePhoto()});
CONFIG.OUR_BUCKET_LIST.forEach(x=>{const e=document.createElement("div");e.className="bucket-item";e.textContent=x;$("#bucketGrid").appendChild(e)});
const compliments=["You're the reason ordinary days feel special. ✨","Your smile has a way of making everything feel better. ❤️","If I could keep one moment forever, I'd choose a moment with you. 🌹","Some people search for happiness. I found mine in knowing you. 💕","You make even the simplest moments worth remembering. ✨","You have a beautiful way of making life feel warmer. ❤️","If memories could be framed, I'd fill an entire gallery with ours. 📸","You are one of the sweetest chapters in my story. 📖","You make my heart smile. 💖","The world feels a little brighter when you're around. 🌸","You're not just a memory. You're a feeling I want to keep forever. ❤️","You make ordinary conversations feel extraordinary. 💬","There is something wonderfully unique about you. 🦋","You are a beautiful reason to smile. 😊❤️","Some moments become unforgettable simply because you were there. 🌹","Your presence is one of my favorite things. 💕","I hope you always know how special you are. ✨","You're a little bit of sunshine in my world. ☀️","My favorite memories somehow keep finding you in them. 📸","You make life feel like a beautiful story. 📖❤️","Your happiness matters to me. ❤️","You are someone I am genuinely grateful to know. 🌸","Your laugh is one of my favorite sounds. 🥰","You're the kind of person people feel lucky to have in their life. 💝","Even the smallest moments with you can become my favorite moments. ✨","You bring a little magic wherever you go. 🦋","I could write a thousand compliments and still have more to say. 💌","You're beautiful in all the ways that truly matter. ❤️","If happiness had a favorite memory, mine would have you in it. 🌹","You make my world feel a little more complete. ♾️❤️"];let last=-1;$("#complimentButton").addEventListener("click",()=>{let i;do{i=Math.floor(Math.random()*compliments.length)}while(i===last);last=i;const e=$("#compliment");e.classList.remove("show");void e.offsetWidth;e.textContent=compliments[i];e.classList.add("show");createFloatingHearts(5)});
$(".infinite-heart-section").addEventListener("click",e=>{const h=document.createElement("span");h.className="click-heart";const a=["❤️","💕","💖","💗","💓","💞","💘","💝","🌹","✨","🦋"];h.textContent=a[Math.floor(Math.random()*a.length)];h.style.left=e.clientX+"px";h.style.top=e.clientY+"px";h.style.setProperty("--x",Math.random()*160-80+"px");document.body.appendChild(h);setTimeout(()=>h.remove(),1600)});
const finalText=`Of all the beautiful things in this world,
you are one of the most beautiful chapters of my life. ❤️

Thank you for being you.
Thank you for every smile.
Thank you for every memory.
And thank you for making my world a little brighter.

No matter how many pages our story has,
I hope we keep writing it together. ❤️

You are special.
You are precious.
And you will always have a special place in my heart. 🌹

Forever grateful for you. ❤️`;
$("#finalButton").addEventListener("click",()=>{$("#finalReveal").classList.add("active");document.body.classList.add("no-scroll");createHeartExplosion();createPetals(70);createFinalStars();setTimeout(()=>typeWriter($("#finalMessage"),finalText,28),1000)});
function createFinalStars(){const c=$("#finalStars");for(let i=0;i<180;i++){const s=document.createElement("span");s.className="star";s.style.left=Math.random()*100+"%";s.style.top=Math.random()*100+"%";s.style.animationDelay=Math.random()*5+"s";c.appendChild(s)}}
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});$$(".reveal").forEach(e=>observer.observe(e));
const tobs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.15});$$(".timeline-item").forEach(e=>tobs.observe(e));
const lob=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting&&!letterStarted){letterStarted=true;typeWriter($("#heartLetterText"),heartLetter,15)}}),{threshold:.25});lob.observe($(".heart-letter"));
document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeLetter();closePhoto()}});
if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)document.documentElement.style.scrollBehavior="auto";
