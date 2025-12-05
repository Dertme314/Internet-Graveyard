// --- GRAVEYARD DATA ---
// Expanded archive with 30+ items
const artifacts = [
    // --- WEBSITES ---
    {
        id: 1,
        title: "MySpace",
        category: "site",
        date: "2003 - 2010 (The Golden Era)",
        img: "https://placehold.co/600x400/0000FF/FFFFFF?text=Tom+Is+Your+Friend",
        desc: "The original social giant. It taught an entire generation HTML just to make their profile rain pixels. Tom is still waiting for you to log back in."
    },
    {
        id: 4,
        title: "GeoCities",
        category: "site",
        date: "1994 - 2009",
        img: "https://placehold.co/600x400/990099/FFFFFF?text=Under+Construction+GIF",
        desc: "Neighborhoods of bad MIDI music, 'Under Construction' gifs, and blazing comic sans text. The visual definition of the early web."
    },
    {
        id: 8,
        title: "Ask Jeeves",
        category: "site",
        date: "1996 - 2006",
        img: "https://placehold.co/600x400/AA0000/FFFFFF?text=Ask+Jeeves",
        desc: "Before Google, we asked a polite butler. He didn't know much, but he was classy about it."
    },
    {
        id: 9,
        title: "Club Penguin",
        category: "site",
        date: "2005 - 2017",
        img: "https://placehold.co/600x400/00AAFF/FFFFFF?text=Waddle+On",
        desc: "The iceberg finally tipped. Banned for swearing in the pizza parlor. 'Waddle On' were the last words spoken before the servers went dark."
    },
    {
        id: 10,
        title: "StumbleUpon",
        category: "site",
        date: "2001 - 2018",
        img: "https://placehold.co/600x400/EB4924/FFFFFF?text=StumbleUpon",
        desc: "The rabbit hole of the internet. One click took you to a random corner of the web. We haven't been that adventurous since."
    },
    {
        id: 11,
        title: "Megaupload",
        category: "site",
        date: "2005 - 2012",
        img: "https://placehold.co/600x400/FF6600/FFFFFF?text=FBI+Seized",
        desc: "The king of file hosting. Taken down by the FBI in a dramatic raid. Kim Dotcom is still haunting the courts."
    },
    {
        id: 12,
        title: "Grooveshark",
        category: "site",
        date: "2006 - 2015",
        img: "https://placehold.co/600x400/111111/FFFFFF?text=Grooveshark",
        desc: "Streaming music before Spotify won the war. It fought the law, and the law won."
    },
    {
        id: 28,
        title: "Homestar Runner",
        category: "site",
        date: "2000 - 2010 (Peak Flash)",
        img: "https://placehold.co/600x400/CC0000/FFFFFF?text=TROGDOR",
        desc: "The Burninator comes for us all. The peak of Flash animation comedy. Emails will never be answered with such style again."
    },

    // --- APPS & SOFTWARE ---
    {
        id: 2,
        title: "Vine",
        category: "app",
        date: "2013 - 2016",
        img: "https://placehold.co/600x400/00B488/FFFFFF?text=Do+It+For+The+Vine",
        desc: "Six seconds of glory. A cultural reset that burned bright and died young, leaving a void filled by TikTok."
    },
    {
        id: 5,
        title: "Flappy Bird",
        category: "app",
        date: "2013 - 2014",
        img: "https://placehold.co/600x400/FFFF00/000000?text=Game+Over",
        desc: "The game was so addictive the creator felt guilty and deleted it. Phones were smashed. High scores were forged."
    },
    {
        id: 6,
        title: "Netscape Navigator",
        category: "app",
        date: "1994 - 2008",
        img: "https://placehold.co/600x400/008080/FFFFFF?text=Netscape+N",
        desc: "The browser that started the war. Crushed by the blue 'E' of Internet Explorer. The grandfather of Firefox."
    },
    {
        id: 13,
        title: "LimeWire",
        category: "app",
        date: "2000 - 2010",
        img: "https://placehold.co/600x400/32CD32/FFFFFF?text=Linkin_Park.exe",
        desc: "You wanted a song, you got a virus. The Russian Roulette of the early 2000s. My PC is still recovering."
    },
    {
        id: 14,
        title: "MSN Messenger",
        category: "app",
        date: "1999 - 2013",
        img: "https://placehold.co/600x400/00CCFF/FFFFFF?text=Nudge!",
        desc: "*NUDGE* *NUDGE* *NUDGE*. Signing in and out just to get your crush's attention. The spinning stick figures haunt our dreams."
    },
    {
        id: 15,
        title: "Clippy",
        category: "app",
        date: "1997 - 2007",
        img: "https://placehold.co/600x400/D4D4D4/000000?text=It+Looks+Like+You're+Dying",
        desc: "'It looks like you're trying to write a letter.' The most hated assistant in history, now ironically loved."
    },
    {
        id: 16,
        title: "Winamp",
        category: "app",
        date: "1997 - 2013",
        img: "https://placehold.co/600x400/222222/00FF00?text=It+Really+Whips",
        desc: "It really whips the llama's ass. The customizable skins were a lifestyle. The visualizers were a trance."
    },
    {
        id: 17,
        title: "Adobe Flash",
        category: "app",
        date: "1996 - 2020",
        img: "https://placehold.co/600x400/FF0000/FFFFFF?text=Plugin+Missing",
        desc: "The engine that powered the fun internet. Newgrounds, Miniclip, and annoying restaurant menus all died with it."
    },
    {
        id: 18,
        title: "AIM (AOL)",
        category: "app",
        date: "1997 - 2017",
        img: "https://placehold.co/600x400/FFFF00/000000?text=Running+Man",
        desc: "Away Messages were the original Tweets. The sound of a door opening meant your best friend was online."
    },
    {
        id: 29,
        title: "Internet Explorer",
        category: "app",
        date: "1995 - 2022",
        img: "https://placehold.co/600x400/00CCFF/000000?text=e",
        desc: "The number one browser for downloading other browsers. Rest in peace, slow friend."
    },

    // --- MEMES ---
    {
        id: 3,
        title: "Harambe",
        category: "meme",
        date: "May 2016",
        img: "https://placehold.co/600x400/333333/FFFFFF?text=Harambe+Forever",
        desc: "The gorilla that fractured the timeline. Some say everything went wrong after May 28, 2016."
    },
    {
        id: 7,
        title: "Dat Boi",
        category: "meme",
        date: "2016",
        img: "https://placehold.co/600x400/00FF00/000000?text=O+Shit+Waddup",
        desc: "Here come dat boi! A frog on a unicycle. The peak of surrealist internet humor."
    },
    {
        id: 19,
        title: "Nyan Cat",
        category: "meme",
        date: "2011",
        img: "https://placehold.co/600x400/FF99CC/FFFFFF?text=Meow+Meow+Meow",
        desc: "A Pop-Tart cat flying through space leaving a rainbow trail. 10 hours loops were a test of sanity."
    },
    {
        id: 20,
        title: "Trollface",
        category: "meme",
        date: "2008",
        img: "https://placehold.co/600x400/FFFFFF/000000?text=Problem?",
        desc: "The face of early internet chaos. Problem? The foundation of Rage Comics."
    },
    {
        id: 21,
        title: "All Your Base",
        category: "meme",
        date: "2000",
        img: "https://placehold.co/600x400/000000/FFFFFF?text=Are+Belong+To+Us",
        desc: "Zero Wing's bad translation became the first true internet phenomenon. Somebody set up us the bomb."
    },
    {
        id: 22,
        title: "Gangnam Style",
        category: "meme",
        date: "2012",
        img: "https://placehold.co/600x400/0000FF/FFFFFF?text=Oppa+Gangnam",
        desc: "The first video to hit 1 Billion views. We all learned the dance. We all regret it."
    },
    {
        id: 23,
        title: "Rickrolling",
        category: "meme",
        date: "2007 - Forever",
        img: "https://placehold.co/600x400/333333/FFFFFF?text=Never+Gonna+Give+You+Up",
        desc: "He's never gonna give you up, but he might let you down into a grave. The link you should never click."
    },
    {
        id: 24,
        title: "Success Kid",
        category: "meme",
        date: "2007",
        img: "https://placehold.co/600x400/D2B48C/FFFFFF?text=Fist+Pump",
        desc: "The sand-eating baby that represented our small victories. He's an adult now, which is terrifying."
    },
    {
        id: 25,
        title: "Grumpy Cat",
        category: "meme",
        date: "2012 - 2019",
        img: "https://placehold.co/600x400/444444/FFFFFF?text=NO",
        desc: "Tardar Sauce, the cat who hated everything. The patron saint of Mondays."
    },
    {
        id: 26,
        title: "Badger Badger",
        category: "meme",
        date: "2003",
        img: "https://placehold.co/600x400/AA5500/FFFFFF?text=Mushroom+Mushroom",
        desc: "Badger badger badger badger MUSHROOM MUSHROOM. Flash loops at their finest."
    },
    {
        id: 27,
        title: "Doge",
        category: "meme",
        date: "2013",
        img: "https://placehold.co/600x400/EEDD82/000000?text=Such+Wow",
        desc: "Much history. Very dead. Wow. The Shiba Inu that became a currency."
    },
    {
        id: 30,
        title: "Yik Yak",
        category: "app",
        date: "2013 - 2017",
        img: "https://placehold.co/600x400/00FF99/000000?text=Anonymous+Herd",
        desc: "The anonymous campus gossip app. Bullying perfected. Banned from every school wifi."
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
        img.style.filter = "invert(1) hue-rotate(90deg) contrast(2)"; 
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
