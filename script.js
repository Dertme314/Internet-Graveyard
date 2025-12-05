// --- GRAVEYARD DATA ---
// Using placeholder images for demo purposes
const artifacts = [
    {
        id: 1,
        title: "MySpace",
        category: "site",
        date: "2003 - 2010 (Spiritually)",
        img: "https://placehold.co/600x400/0000FF/FFFFFF?text=MySpace+Top+8",
        desc: "The original social giant. It taught an entire generation HTML just to make their profile rain pixels. Tom was everyone's first friend."
    },
    {
        id: 2,
        title: "Vine",
        category: "app",
        date: "2013 - 2016",
        img: "https://placehold.co/600x400/008F00/FFFFFF?text=Vine+Loop",
        desc: "Six seconds of glory. Do it for the Vine. Gone too soon, leaving a void filled by TikTok."
    },
    {
        id: 3,
        title: "Harambe",
        category: "meme",
        date: "May 2016",
        img: "https://placehold.co/600x400/333333/FFFFFF?text=Harambe",
        desc: "The gorilla that changed the timeline. Dicks out forever."
    },
    {
        id: 4,
        title: "GeoCities",
        category: "site",
        date: "1994 - 2009",
        img: "https://placehold.co/600x400/FF00FF/FFFFFF?text=Under+Construction+GIF",
        desc: "Neighborhoods of bad MIDI music, 'Under Construction' gifs, and blazing comic sans text."
    },
    {
        id: 5,
        title: "Flappy Bird",
        category: "app",
        date: "2013 - 2014",
        img: "https://placehold.co/600x400/FFFF00/000000?text=Flappy+Bird",
        desc: "The game was so addictive the creator felt guilty and deleted it. Phones were smashed."
    },
    {
        id: 6,
        title: "Netscape Navigator",
        category: "app",
        date: "1994 - 2008",
        img: "https://placehold.co/600x400/008080/FFFFFF?text=Netscape+N",
        desc: "The browser that started the war. Crushed by the blue E of Internet Explorer."
    },
    {
        id: 7,
        title: "Dat Boi",
        category: "meme",
        date: "2016",
        img: "https://placehold.co/600x400/00FF00/000000?text=O+Shit+Waddup",
        desc: "Here come dat boi! O shit waddup! A frog on a unicycle. Pure surrealism."
    },
    {
        id: 8,
        title: "Ask Jeeves",
        category: "site",
        date: "1996 - 2006",
        img: "https://placehold.co/600x400/AA0000/FFFFFF?text=Jeeves+The+Butler",
        desc: "Before Google, we asked a polite butler. He didn't know much, but he was polite."
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
