// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');

if (menuBtn && menuOverlay) {
    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        
        if (this.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close menu when clicking on a link
    const menuLinks = document.querySelectorAll('.menu-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            menuOverlay.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });
}

// Tab functionality
function setupTabs(tabButtons, tabContents, activeClass) {
    tabButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabButtons.forEach(b => b.classList.remove(activeClass));
            // Add active class to clicked button
            this.classList.add(activeClass);
            
            // Hide all tab contents
            if (tabContents) {
                tabContents.forEach(content => {
                    content.classList.remove('active');
                });
            }
            
            // Show the corresponding tab content
            const tabId = this.getAttribute('data-tab');
            if (tabId && document.getElementById(tabId)) {
                document.getElementById(tabId).classList.add('active');
            }
        });
    });
}

// Lightbox functionality
let currentImageIndex = 0;

function openLightbox(index) {
    currentImageIndex = index;
    updateLightbox();
    document.getElementById('lightbox').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;
    
    const images = document.querySelectorAll('.gallery-item');
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    }
    
    updateLightbox();
}

function updateLightbox() {
    const images = document.querySelectorAll('.gallery-item');
    if (images.length === 0) return;
    
    const image = images[currentImageIndex];
    const imgSrc = image.querySelector('img').src;
    const caption = image.querySelector('.caption') ? image.querySelector('.caption').textContent : '';
    const date = image.querySelector('.date') ? image.querySelector('.date').textContent : '';
    
    document.getElementById('lightbox-image').src = imgSrc;
    document.getElementById('lightbox-caption').textContent = `${caption}${date ? ' - ' + date : ''}`;
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox && lightbox.style.display === 'flex') {
        if (event.key === 'Escape') {
            closeLightbox();
        } else if (event.key === 'ArrowRight') {
            changeImage(1);
        } else if (event.key === 'ArrowLeft') {
            changeImage(-1);
        }
    }
});

// Music Player
const musicPlayer = document.getElementById('musicPlayer');
const musicBtn = document.getElementById('musicBtn');
const musicInfo = document.getElementById('musicInfo');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', function() {
        if (isPlaying) {
            bgMusic.pause();
            musicBtn.innerHTML = '<i class="fas fa-music"></i>';
            musicPlayer.classList.remove('playing');
            isPlaying = false;
        } else {
            bgMusic.play()
                .then(() => {
                    musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
                    musicPlayer.classList.add('playing');
                    isPlaying = true;
                })
                .catch(error => {
                    console.error('Audio playback failed:', error);
                    musicInfo.textContent = 'Klik untuk memutar';
                });
        }
    });
    
    // Check if there's saved music state
    if (localStorage.getItem('musicPlaying') === 'true') {
        bgMusic.play()
            .then(() => {
                musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
                musicPlayer.classList.add('playing');
                isPlaying = true;
            })
            .catch(error => {
                console.error('Audio playback failed:', error);
            });
    }
    
    // Save music state when page is closed
    window.addEventListener('beforeunload', function() {
        localStorage.setItem('musicPlaying', isPlaying);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 90,
                behavior: 'smooth'
            });
        }
    });
});

// Sample data - in a real app, this would come from a database
const memoriesData = [
    {
        src: "assets/images/memories/1.jpg",
        caption: "Hari Pertama Sekolah",
        year: "2022",
        date: "15 Juli 2022"
    },
    {
        src: "assets/images/memories/2.jpg",
        caption: "Kegiatan Pramuka",
        year: "2022",
        date: "20 Agustus 2022"
    },
    {
        src: "assets/images/memories/3.jpg",
        caption: "Study Tour ke Museum",
        year: "2023",
        date: "10 Maret 2023"
    },
    {
        src: "assets/images/memories/4.jpg",
        caption: "Pentas Seni Akhir Tahun",
        year: "2023",
        date: "15 Desember 2023"
    },
    {
        src: "assets/images/memories/5.jpg",
        caption: "Kegiatan Bakti Sosial",
        year: "2024",
        date: "5 Februari 2024"
    },
    {
        src: "assets/images/memories/6.jpg",
        caption: "Persiapan Ujian Akhir",
        year: "2024",
        date: "20 April 2024"
    }
];

const staffData = [
    {
        src: "assets/images/staff/1.jpg",
        name: "Bapak Saadullah",
        position: "Guru PPKN",
        type: "teacher"
    },
    {
        src: "assets/images/staff/2.jpg",
        name: "Ibu Junirah Martha",
        position: "Guru Bahasa Indonesia",
        type: "teacher"
    },
    {
        src: "assets/images/staff/3.jpg",
        name: "Bapak Syarifudin",
        position: "Guru Akidah Akhlak",
        type: "teacher"
    },
    {
        src: "assets/images/staff/4.jpg",
        name: "Ibu Meida",
        position: "Guru Matematika",
        type: "teacher"
    },
    {
        src: "assets/images/staff/5.jpg",
        name: "Ibu Siti Aminah",
        position: "Kepala Tata Usaha",
        type: "administration"
    },
    {
        src: "assets/images/staff/6.jpg",
        name: "Bapak Ahmad Fauzi",
        position: "Staf Administrasi",
        type: "administration"
    },
    {
        src: "assets/images/staff/7.jpg",
        name: "Bapak Dr. H. Muhammad Ali",
        position: "Kepala Madrasah",
        type: "leadership"
    },
    {
        src: "assets/images/staff/8.jpg",
        name: "Ibu Dr. Siti Khadijah",
        position: "Wakil Kepala Madrasah",
        type: "leadership"
    },
    // Add more staff members up to 22
    {
        src: "assets/images/staff/9.jpg",
        name: "Bapak Abdul Rahman",
        position: "Guru Fisika",
        type: "teacher"
    },
    {
        src: "assets/images/staff/10.jpg",
        name: "Ibu Fatimah Azzahra",
        position: "Guru Kimia",
        type: "teacher"
    },
    {
        src: "assets/images/staff/11.jpg",
        name: "Bapak Budi Santoso",
        position: "Guru Olahraga",
        type: "teacher"
    },
    {
        src: "assets/images/staff/12.jpg",
        name: "Ibu Ratna Sari",
        position: "Guru Bahasa Inggris",
        type: "teacher"
    },
    {
        src: "assets/images/staff/13.jpg",
        name: "Bapak Joko Widodo",
        position: "Guru Sejarah",
        type: "teacher"
    },
    {
        src: "assets/images/staff/14.jpg",
        name: "Ibu Sri Mulyani",
        position: "Guru Ekonomi",
        type: "teacher"
    },
    {
        src: "assets/images/staff/15.jpg",
        name: "Bapak Agus Salim",
        position: "Guru Sosiologi",
        type: "teacher"
    },
    {
        src: "assets/images/staff/16.jpg",
        name: "Ibu Dian Pelangi",
        position: "Guru Seni Budaya",
        type: "teacher"
    },
    {
        src: "assets/images/staff/17.jpg",
        name: "Bapak Bambang Pamungkas",
        position: "Guru TIK",
        type: "teacher"
    },
    {
        src: "assets/images/staff/18.jpg",
        name: "Ibu Susi Pudjiastuti",
        position: "Guru Prakarya",
        type: "teacher"
    },
    {
        src: "assets/images/staff/19.jpg",
        name: "Bapak Chairul Tanjung",
        position: "Guru Kewirausahaan",
        type: "teacher"
    },
    {
        src: "assets/images/staff/20.jpg",
        name: "Ibu Najwa Shihab",
        position: "Guru Bahasa Arab",
        type: "teacher"
    },
    {
        src: "assets/images/staff/21.jpg",
        name: "Bapak Ridwan Kamil",
        position: "Guru Geografi",
        type: "teacher"
    },
    {
        src: "assets/images/staff/22.jpg",
        name: "Ibu Maudy Ayunda",
        position: "Guru Bimbingan Konseling",
        type: "teacher"
    }
];

// Load data into the page
function loadMemories(containerId, count = 6) {
    const gallery = document.getElementById(containerId);
    if (!gallery) return;
    
    gallery.innerHTML = '';
    
    const featuredMemories = memoriesData.slice(0, count);
    
    featuredMemories.forEach((memory, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.setAttribute('data-year', memory.year);
        item.onclick = () => openLightbox(index);
        item.innerHTML = `
            <img src="${memory.src}" alt="${memory.caption}">
            <div class="caption">${memory.caption}</div>
            <div class="date">${memory.date}</div>
        `;
        gallery.appendChild(item);
    });
}

function loadStaff(containerId, count = 8) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    
    grid.innerHTML = '';
    
    const featuredStaff = staffData.slice(0, count);
    
    featuredStaff.forEach(staff => {
        const card = document.createElement('div');
        card.className = 'staff-card';
        card.setAttribute('data-type', staff.type);
        card.innerHTML = `
            <div class="staff-img">
                <img src="${staff.src}" alt="${staff.name}">
            </div>
            <div class="staff-info">
                <h3>${staff.name}</h3>
                <p>${staff.position}</p>
                <div class="staff-social">
                    <a href="#"><i class="fab fa-whatsapp"></i></a>
                    <a href="#"><i class="fab fa-envelope"></i></a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}