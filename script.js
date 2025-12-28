// --- 1. TOGGLE NAVBAR UNTUK MOBILE ---
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); // Ubah ikon ke 'X'
    navbar.classList.toggle('active');
};

// --- 2. SCROLL SECTIONS ACTIVE LINK ---
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // Sticky Navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Hapus toggle icon dan navbar saat link diklik (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// --- 3. FITUR MUSIK ---
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "<i class='bx bx-pause'></i> Pause";
    } else {
        music.pause();
        musicBtn.innerHTML = "<i class='bx bx-play'></i> Musik";
    }
});

// Memastikan form tidak merefresh halaman saat demo (Opsional)
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Pesan terkirim! (Ini hanya demo)');
    contactForm.reset();
});

// Scroll Reveal sederhana agar section muncul perlahan
window.addEventListener('scroll', () => {
    let contactSection = document.querySelector('.contact');
    let position = contactSection.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.2;

    if(position < screenPosition) {
        contactSection.style.opacity = '1';
        contactSection.style.transform = 'translateY(0)';
    }
});

// Tambahkan fungsi Scroll Reveal untuk Journey
const revealJourney = () => {
    const journeyContents = document.querySelectorAll('.education-content');
    
    journeyContents.forEach((content) => {
        const contentTop = content.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100;

        if (contentTop < triggerPoint) {
            content.style.opacity = "1";
            content.style.transform = "translateX(0)";
            content.style.transition = "1s ease-out";
        }
    });
};

// Panggil fungsi di dalam event scroll
window.addEventListener('scroll', revealJourney);

// Cek apakah perangkat adalah Mobile
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (!isMobile) {
    // --- JALANKAN EFEK MOUSE TRACKING (DESKTOP) ---
    home.addEventListener('mousemove', (e) => {
        let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
        let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
        content.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        img.style.transform = `rotateY(${-xAxis}deg) rotateX(${-yAxis}deg) translateZ(50px)`;
    });
} else {
    // --- JALANKAN ANIMASI OTOMATIS (MOBILE) ---
    // Memberikan efek melayang halus tanpa mouse
    let angle = 0;
    function autoFloat() {
        angle += 0.02;
        const x = Math.sin(angle) * 5;
        const y = Math.cos(angle) * 5;
        
        content.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        img.style.transform = `rotateY(${-x}deg) rotateX(${-y}deg) translateZ(30px)`;
        
        requestAnimationFrame(autoFloat);
    }
    autoFloat();
}

// Gunakan variabel ini untuk membatasi kemiringan agar tidak terlalu ekstrem
const tiltLimit = 15; 

home.addEventListener('mousemove', (e) => {
    // Menghitung posisi kursor relatif terhadap tengah layar
    let x = (window.innerWidth / 2 - e.pageX) / 20;
    let y = (window.innerHeight / 2 - e.pageY) / 20;

    // Batasi angka rotasi agar presisi
    let rotateX = Math.max(-tiltLimit, Math.min(tiltLimit, y));
    let rotateY = Math.max(-tiltLimit, Math.min(tiltLimit, -x));

    content.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Efek gambar berlawanan arah agar terlihat mendalam
    img.style.transform = `rotateX(${-rotateX}deg) rotateY(${-rotateY}deg) translateZ(60px)`;
});

// Deteksi apakah user menggunakan HP/Layar Sentuh
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (!isTouchDevice) {
    // Jalankan efek Mouse Move 3D hanya untuk Desktop
    home.addEventListener('mousemove', (e) => {
        let x = (window.innerWidth / 2 - e.pageX) / 20;
        let y = (window.innerHeight / 2 - e.pageY) / 20;
        content.style.transform = `rotateX(${y}deg) rotateY(${-x}deg)`;
        img.style.transform = `rotateX(${-y}deg) rotateY(${x}deg) translateZ(50px)`;
    });
} else {
    // Untuk HP: Gunakan animasi mengambang otomatis yang sangat halus
    // agar terlihat hidup tanpa perlu interaksi kursor
    content.style.transform = "none"; 
    img.style.animation = "floatMobile 3s ease-in-out infinite";
}

// Tambahkan CSS Keyframe ini ke file style.css Anda
/* @keyframes floatMobile {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}
*/

const dropZone = document.querySelector('.drop-zone');
const fileInput = document.querySelector('#fileInput');
const fileNameDisplay = document.querySelector('#fileName');

// Trigger input file saat area drop-zone diklik
dropZone.addEventListener('click', () => fileInput.click());

// Tampilkan nama file setelah dipilih
fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = `File terpilih: ${fileInput.files[0].name}`;
    }
});

// Simulasi Unggah
document.getElementById('uploadForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Fitur unggah memerlukan Backend (Server). File "' + fileInput.files[0].name + '" siap dikirim!');
});
