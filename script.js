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
