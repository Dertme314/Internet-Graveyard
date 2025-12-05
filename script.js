// --- GRAVEYARD DATA ---
// THE MASTER ARCHIVE: 50+ Dead Memes, Sites, and Apps
const artifacts = [
    // ===========================
    // SECTION 1: THE ANCIENT WEB (1990s - Early 2000s)
    // ===========================
    {
        id: 101,
        title: "Dancing Baby",
        category: "meme",
        date: "1996",
        img: "https://placehold.co/600x400/111111/FFFFFF?text=Oogachaka+Baby",
        desc: "Patient Zero. The very first viral phenomenon. A creepy 3D render that danced its way into Ally McBeal and our nightmares."
    },
    {
        id: 102,
        title: "Hampster Dance",
        category: "site",
        date: "1998",
        img: "https://placehold.co/600x400/FFFF00/000000?text=Dee+Da+Dee+Da+Do+Do",
        desc: "Created as a test page, it became a religion. Rows of animated GIFs dancing to a sped-up Roger Miller song."
    },
    {
        id: 103,
        title: "Ate My Balls",
        category: "site",
        date: "1996",
        img: "https://placehold.co/600x400/CC0000/FFFFFF?text=Mr+T+Ate+My+Balls",
        desc: "Primitive humor at its finest. Crude HTML pages claiming celebrities 'ate my balls'. The dawn of internet satire."
    },
    {
        id: 104,
        title: "All Your Base",
        category: "meme",
        date: "1998",
        img: "https://placehold.co/600x400/000000/FFFFFF?text=Are+Belong+To+Us",
        desc: "A mistranslated Sega Genesis game intro. 'Somebody set up us the bomb.' The first time the internet spoke in unison."
    },
    {
        id: 105,
        title: "GeoCities",
        category: "site",
        date: "1994 - 2009",
        img: "https://placehold.co/600x400/990099/FFFFFF?text=Under+Construction",
        desc: "Neighborhoods of MIDI music and flaming text. It wasn't just a website host; it was a digital home."
    },
    {
        id: 106,
        title: "Ask Jeeves",
        category: "site",
        date: "1996 - 2006",
        img: "https://placehold.co/600x400/AA0000/FFFFFF?text=Ask+Jeeves",
        desc: "Before algorithms, we had a butler. He didn't know the answers, but he was polite about it."
    },
    {
        id: 107,
        title: "Netscape Navigator",
        category: "app",
        date: "1994 - 2008",
        img: "https://placehold.co/600x400/008080/FFFFFF?text=Netscape+N",
        desc: "The ship that sailed the early web, eventually sunk by the cannons of Internet Explorer."
    },
    {
        id: 108,
        title: "Clippy",
        category: "app",
        date: "1997 - 2007",
        img: "https://placehold.co/600x400/D4D4D4/000000?text=It+Looks+Like+You're+Dying",
        desc: "He just wanted to help you write a letter. We hated him then, we miss him now."
    },
    {
        id: 109,
        title: "AIM (AOL)",
        category: "app",
        date: "1997 - 2017",
        img: "https://placehold.co/600x400/FFFF00/000000?text=Running+Man",
        desc: "The sound of a door opening meant your crush was online. Away Messages were the original Tweets."
    },

    // ===========================
    // SECTION 2: THE FLASH ERA (Early 2000s)
    // ===========================
    {
        id: 201,
        title: "Peanut Butter Jelly Time",
        category: "meme",
        date: "2001",
        img: "https://placehold.co/600x400/FFFF00/000000?text=Dancing+Banana",
        desc: "A pixelated banana with a baseball bat. Why? No one knows. Where he at? There he go."
    },
    {
        id: 202,
        title: "Badger Badger",
        category: "meme",
        date: "2003",
        img: "https://placehold.co/600x400/AA5500/FFFFFF?text=Mushroom+Mushroom",
        desc: "Infinite loops of badgers, mushrooms, and a snake. Flash animation peaked here."
    },
    {
        id: 203,
        title: "Homestar Runner",
        category: "site",
        date: "2000 - 2010",
        img: "https://placehold.co/600x400/CC0000/FFFFFF?text=TROGDOR",
        desc: "The Burninator comes for us all. The absolute gold standard of web cartoons."
    },
    {
        id: 204,
        title: "MySpace",
        category: "site",
        date: "2003 - 2010",
        img: "https://placehold.co/600x400/0000FF/FFFFFF?text=Tom+Is+Your+Friend",
        desc: "The Top 8 defined your social hierarchy. Coding HTML on your profile was a rite of passage."
    },
    {
        id: 205,
        title: "LimeWire",
        category: "app",
        date: "2000 - 2010",
        img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Linkin_Park.exe",
        desc: "You wanted a song, you got a virus. The Russian Roulette of music piracy."
    },

    // ===========================
    // SECTION 3: THE GOLDEN AGE (2007 - 2012)
    // Image Macros & Rage Comics
    // ===========================
    {
        id: 301,
        title: "LOLcats",
        category: "meme",
        date: "2007",
        img: "https://placehold.co/600x400/333333/FFFFFF?text=I+Can+Has+Cheezburger",
        desc: "The foundation of modern meme culture. Happy Cat demanded a cheeseburger, and the internet provided."
    },
    {
        id: 302,
        title: "Rickrolling",
        category: "meme",
        date: "2007",
        img: "https://placehold.co/600x400/222222/FFFFFF?text=Never+Gonna+Give+You+Up",
        desc: "The bait-and-switch that never dies. You know the rules, and so do we."
    },
    {
        id: 303,
        title: "Trollface",
        category: "meme",
        date: "2008",
        img: "https://placehold.co/600x400/FFFFFF/000000?text=Problem?",
        desc: "The face of chaos. Created in MS Paint, it fueled a decade of internet pranks. Problem?"
    },
    {
        id: 304,
        title: "Wojak (Feels Guy)",
        category: "meme",
        date: "2010",
        img: "https://placehold.co/600x400/FFFFFF/000000?text=I+Know+That+Feel+Bro",
        desc: "A simple drawing of a bald man expressing pure melancholy. He stands in the corner at parties."
    },
    {
        id: 305,
        title: "Success Kid",
        category: "meme",
        date: "2007",
        img: "https://placehold.co/600x400/D2B48C/FFFFFF?text=Fist+Pump",
        desc: "He ate sand, but he looked like a champion. Used to celebrate small victories like finding $5 in your pocket."
    },
    {
        id: 306,
        title: "Bad Luck Brian",
        category: "meme",
        date: "2012",
        img: "https://placehold.co/600x400/AA0000/FFFFFF?text=Bad+Luck+Brian",
        desc: "Takes driving test... gets first DUI. The plaid vest icon of misfortune."
    },
    {
        id: 307,
        title: "Socially Awkward Penguin",
        category: "meme",
        date: "2009",
        img: "https://placehold.co/600x400/0000FF/FFFFFF?text=Blue+Background",
        desc: "Blue background, anxious text. 'Holds door for someone... they are 50 feet away.'"
    },
    {
        id: 308,
        title: "Philosoraptor",
        category: "meme",
        date: "2008",
        img: "https://placehold.co/600x400/00AA00/FFFFFF?text=Philosoraptor",
        desc: "If a tomato is a fruit, is ketchup a smoothie? The dinosaur asked the real questions."
    },
    {
        id: 309,
        title: "Scumbag Steve",
        category: "meme",
        date: "2011",
        img: "https://placehold.co/600x400/5C4033/FFFFFF?text=That+Hat",
        desc: "Borrows your lighter... keeps it. The face of every terrible roommate you ever had."
    },
    {
        id: 310,
        title: "Forever Alone",
        category: "meme",
        date: "2010",
        img: "https://placehold.co/600x400/D4D4D4/000000?text=Forever+Alone",
        desc: "A Rage Comic classic. The potato-faced drawing that embraced terminal loneliness."
    },
    {
        id: 311,
        title: "Me Gusta",
        category: "meme",
        date: "2010",
        img: "https://placehold.co/600x400/FFFFFF/000000?text=Me+Gusta",
        desc: "The unsettling face of weird pleasure. Used when you smell your own sneeze."
    },
    {
        id: 312,
        title: "Overly Attached Girlfriend",
        category: "meme",
        date: "2012",
        img: "https://placehold.co/600x400/FFCCDD/000000?text=OAG+Stare",
        desc: "She blinked once in the video. Just once. 'I hid a GPS in your shoe because I love you.'"
    },
    {
        id: 313,
        title: "Nyan Cat",
        category: "meme",
        date: "2011",
        img: "https://placehold.co/600x400/FF99CC/FFFFFF?text=Meow+Meow+Meow",
        desc: "A Pop-Tart cat flying through space. If you listened to the 10-hour loop, you are a veteran."
    },
    {
        id: 314,
        title: "Gangnam Style",
        category: "meme",
        date: "2012",
        img: "https://placehold.co/600x400/0000FF/FFFFFF?text=Oppa+Gangnam",
        desc: "The video that broke YouTube's view counter. We all did the dance. We are all sorry."
    },

    // ===========================
    // SECTION 4: VIRAL VIDEO ERA
    // ===========================
    {
        id: 401,
        title: "Charlie Bit My Finger",
        category: "meme",
        date: "2007",
        img: "https://placehold.co/600x400/333333/FFFFFF?text=Ouch+Charlie",
        desc: "A British baby biting his brother's finger. It really hurt. It was the peak of YouTube 1.0."
    },
    {
        id: 402,
        title: "Keyboard Cat",
        category: "meme",
        date: "2007",
        img: "https://placehold.co/600x400/FFA500/000000?text=Play+Him+Off",
        desc: "Fataso the cat playing an electronic keyboard. Used to 'play off' people failing in videos."
    },
    {
        id: 403,
        title: "Dramatic Chipmunk",
        category: "meme",
        date: "2007",
        img: "https://placehold.co/600x400/AA5500/FFFFFF?text=DUN+DUN+DUN",
        desc: "A prairie dog (not a chipmunk) turning its head in shock. The greatest 5 seconds of cinema history."
    },
    {
        id: 404,
        title: "Annoying Orange",
        category: "meme",
        date: "2009",
        img: "https://placehold.co/600x400/FFA500/FFFFFF?text=Hey+Apple!",
        desc: "A fruit with human eyes and a mouth. 'Hey Apple!' Cringe culture started here."
    },

    // ===========================
    // SECTION 5: MODERN CLASSICS & APPS
    // ===========================
    {
        id: 501,
        title: "Doge",
        category: "meme",
        date: "2013",
        img: "https://placehold.co/600x400/EEDD82/000000?text=Such+Wow",
        desc: "Much history. Very dead. Wow. The Shiba Inu that became a currency and a legend."
    },
    {
        id: 502,
        title: "Grumpy Cat",
        category: "meme",
        date: "2012",
        img: "https://placehold.co/600x400/444444/FFFFFF?text=NO",
        desc: "Tardar Sauce. The cat who hated everything. She was the spirit animal of Mondays."
    },
    {
        id: 503,
        title: "Harambe",
        category: "meme",
        date: "2016",
        img: "https://placehold.co/600x400/333333/FFFFFF?text=Harambe",
        desc: "The gorilla that changed the timeline. Dicks out forever."
    },
    {
        id: 504,
        title: "Dat Boi",
        category: "meme",
        date: "2016",
        img: "https://placehold.co/600x400/00FF00/000000?text=O+Shit+Waddup",
        desc: "Here come dat boi! A frog on a unicycle. The peak of surrealist internet humor."
    },
    {
        id: 505,
        title: "Vine",
        category: "app",
        date: "2013 - 2016",
        img: "https://placehold.co/600x400/00B488/FFFFFF?text=Do+It+For+The+Vine",
        desc: "Six seconds of creativity. It burned bright and died young, leaving a void filled by TikTok."
    },
    {
        id: 506,
        title: "Flappy Bird",
        category: "app",
        date: "2013 - 2014",
        img: "https://placehold.co/600x400/FFFF00/000000?text=Game+Over",
        desc: "The creator deleted it because it was 'too addictive'. Phones were smashed globally."
    },
    {
        id: 507,
        title: "Yik Yak",
        category: "app",
        date: "2013 - 2017",
        img: "https://placehold.co/600x400/00FF99/000000?text=Anonymous+Herd",
        desc: "The anonymous campus gossip app. Bullying perfected. Banned from every school wifi."
    },
    {
        id: 508,
        title: "Club Penguin",
        category: "site",
        date: "2005 - 2017",
        img: "https://placehold.co/600x400/00AAFF/FFFFFF?text=Waddle+On",
        desc: "Banned for swearing in the pizza parlor. 'Waddle On' were the last words spoken before the servers went dark."
    }
];

// --- AUDIO ENGINE ---
// Synthesizing sounds to avoid external file dependencies
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
let isMuted = false;

function playTone(freq, type, duration) {
    if (isMuted) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    
    gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

function playDialUp() {
    // Simulates a chaotic dial-up handshake
    if(isMuted) return;
    let now = audioCtx.currentTime;
    // Carrier tone
    let osc = audioCtx.createOscillator();
    let gain = audioCtx.createGain();
    osc.frequency.setValueAtTime(1200, now);
    osc.type = 'square';
    gain.gain.value = 0.05;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(now + 0.5);

    setTimeout(() => playTone(2400, 'sawtooth', 0.2), 200);
    setTimeout(() => playTone(600, 'square', 0.3), 400);
    setTimeout(() => playTone(1800, 'sine', 0.5), 500);
}

function playHoverSound() {
    playTone(100, 'sawtooth', 0.05);
}

// --- DOM ELEMENTS ---
const cursor = document.getElementById('cursor');
const landingPage = document.getElementById('landing-page');
const museumPage = document.getElementById('museum-page');
const grid = document.getElementById('graveyard-grid');
const modal = document.getElementById('artifact-modal');
const submitModal = document.getElementById('submit-modal');
const enterBtn = document.getElementById('enter-btn');

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Custom Cursor Logic
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('button, a, .tombstone').forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
            playHoverSound();
        });
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });

    // Enter Button
    enterBtn.addEventListener('click', () => {
        playDialUp();
        // Simulate loading lag
        enterBtn.textContent = "CONNECTING...";
        document.body.style.cursor = "wait";
        
        setTimeout(() => {
            landingPage.classList.replace('active-screen', 'hidden-screen');
            museumPage.classList.replace('hidden-screen', 'active-screen');
            renderGrid(artifacts);
            document.body.style.cursor = "none";
            
            // Background ambient noise loop (simulated by repeating intervals)
            setInterval(() => {
                if(Math.random() > 0.9) playTone(50, 'square', 0.1); // Random hum
            }, 2000);

        }, 1500);
    });
});

// --- RENDER GRID ---
function renderGrid(items) {
    grid.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('tombstone');
        card.setAttribute('data-id', item.id);
        
        card.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <p class="rip-date">${item.date}</p>
        `;

        card.addEventListener('click', () => openModal(item));
        card.addEventListener('mouseenter', () => {
            cursor.classList.add('hovered');
            playHoverSound();
        });
        card.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        
        grid.appendChild(card);
    });
}

// --- FILTERING ---
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // UI update
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');

        const cat = e.target.getAttribute('data-category');
        
        if (cat === 'all') {
            renderGrid(artifacts);
        } else {
            const filtered = artifacts.filter(item => item.category === cat);
            renderGrid(filtered);
        }
    });
});

// Random Button
document.getElementById('random-btn').addEventListener('click', () => {
    const randomItem = artifacts[Math.floor(Math.random() * artifacts.length)];
    openModal(randomItem);
});

// --- MODAL LOGIC ---
function openModal(item) {
    modal.style.display = 'flex';
    document.getElementById('modal-img').src = item.img;
    document.getElementById('modal-title').innerText = item.title;
    document.getElementById('modal-date').innerText = item.date;
    document.getElementById('modal-desc').innerText = item.desc;
    
    // Reset Log
    document.getElementById('resurrect-log').innerText = '';
    
    // Glitch sound on open
    playTone(400, 'sawtooth', 0.1);
}

document.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
});

// --- RESURRECTION MECHANIC ---
document.getElementById('resurrect-btn').addEventListener('click', () => {
    const log = document.getElementById('resurrect-log');
    const img = document.getElementById('modal-img');
    
    log.innerText = "> INITIALIZING NECROMANCY_PROTOCOL...";
    playTone(800, 'square', 0.1);

    setTimeout(() => {
        log.innerText += "\n> PARSING SOUL DATA...";
        playTone(1200, 'square', 0.1);
        img.style.filter = "invert(1) hue-rotate(90deg) contrast(2)"; // Visual "AI" effect
    }, 1000);

    setTimeout(() => {
        const failure = Math.random() > 0.3; // 70% chance of failure (spooky)
        if(failure) {
            log.innerText += "\n> ERROR: SOUL CORRUPTED. ABORTING.";
            playTone(100, 'sawtooth', 0.5);
            img.style.filter = "grayscale(100%) blur(5px)";
        } else {
            log.innerText += "\n> SUCCESS: ENTITY STABILIZED.";
            playTone(2000, 'sine', 0.5);
            img.style.filter = "sepia(100%) saturate(300%)";
            img.classList.add('shake-anim');
        }
    }, 2500);
});

// --- SUBMISSION FORM ---
document.getElementById('open-submit-modal').addEventListener('click', () => {
    submitModal.style.display = 'flex';
});

document.querySelector('.close-modal-submit').addEventListener('click', () => {
    submitModal.style.display = 'none';
});

document.getElementById('submission-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // In a real app, this sends data to backend. Here we simulate it.
    alert("MEMORY UPLOADED TO THE VOID. IT IS PENDING APPROVAL BY THE GHOSTS.");
    submitModal.style.display = 'none';
    e.target.reset();
});

// --- EASTER EGG (KONAMI CODE) ---
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateGodMode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateGodMode() {
    alert("YOU HAVE UNLOCKED THE SECRET DEV GRAVEYARD");
    document.body.style.fontFamily = "Comic Sans MS"; // The ultimate horror
    document.querySelectorAll('*').forEach(el => el.style.color = 'red');
    playTone(666, 'sawtooth', 2.0);
}

// --- MUTE TOGGLE ---
document.getElementById('mute-btn').addEventListener('click', function() {
    isMuted = !isMuted;
    this.innerText = isMuted ? "🔈 SOUND ON" : "🔇 SOUND OFF";
});
