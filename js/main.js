// Menu Toggle
const menuBtn = document.getElementById('menuBtn');
const menuOverlay = document.getElementById('menuOverlay');

menuBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    menuOverlay.classList.toggle('active');
});

// Close menu when clicking on a link
const menuLinks = document.querySelectorAll('.menu-links a');
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        menuBtn.classList.remove('active');
        menuOverlay.classList.remove('active');
    });
});

// Sample data - in a real app, this would come from a database
const memoriesData = [
    {
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Hari Pertama Sekolah - 2022"
    },
    {
        src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Kegiatan Ekstrakurikuler - Tim Basket Juara"
    },
    {
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Study Tour Kelas - Kunjungan ke Museum Nasional"
    },
    {
        src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Belajar Bersama - Persiapan Ujian Akhir"
    },
    {
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Acara Perpisahan - Hari yang mengharukan"
    },
    {
        src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Foto Bersama Guru - Terima kasih atas bimbingannya"
    }
];

const teachersData = [
    {
        src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Bapak Saadullah",
        position: "Guru PPKN"
    },
    {
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Ibu Junirah Martha",
        position: "Guru Bahasa Indonesia"
    },
    {
        src: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Bapak Syarifudin",
        position: "Guru Akidah Akhlak"
    },
    {
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Ibu Meida",
        position: "Guru Matematika"
    }
];

const buildingsData = [
    {
        src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        title: "Gedung Utama",
        description: "Tempat kami menghabiskan sebagian besar waktu belajar"
    },
    {
        src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        title: "Perpustakaan",
        description: "Tempat mencari ilmu dan mengerjakan tugas"
    },
    {
        src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        title: "Lapangan Sekolah",
        description: "Tempat olahraga dan upacara bendera"
    }
];

// Load data into the page
function loadMemories() {
    const gallery = document.getElementById('memoriesGallery');
    gallery.innerHTML = '';
    
    memoriesData.forEach((memory, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.onclick = () => openLightbox(index);
        item.innerHTML = `
            <img src="${memory.src}" alt="Class Memory">
            <div class="caption">${memory.caption}</div>
        `;
        gallery.appendChild(item);
    });
}

function loadTeachers() {
    const grid = document.getElementById('teachersGrid');
    grid.innerHTML = '';
    
    teachersData.forEach(teacher => {
        const card = document.createElement('div');
        card.className = 'teacher-card';
        card.innerHTML = `
            <div class="teacher-img">
                <img src="${teacher.src}" alt="Teacher">
            </div>
            <div class="teacher-info">
                <h3>${teacher.name}</h3>
                <p>${teacher.position}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function loadBuildings() {
    const gallery = document.getElementById('buildingGallery');
    gallery.innerHTML = '';
    
    buildingsData.forEach(building => {
        const card = document.createElement('div');
        card.className = 'building-card';
        card.innerHTML = `
            <div class="building-img">
                <img src="${building.src}" alt="School Building">
            </div>
            <div class="building-info">
                <h3>${building.title}</h3>
                <p>${building.description}</p>
            </div>
        `;
        gallery.appendChild(card);
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
    
    if (currentImageIndex >= memoriesData.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = memoriesData.length - 1;
    }
    
    updateLightbox();
}

function updateLightbox() {
    document.getElementById('lightbox-image').src = memoriesData[currentImageIndex].src;
    document.getElementById('lightbox-caption').textContent = memoriesData[currentImageIndex].caption;
}

// Keyboard navigation
document.addEventListener('keydown', function(event) {
    const lightbox = document.getElementById('lightbox');
    if (lightbox.style.display === 'flex') {
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

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadMemories();
    loadTeachers();
    loadBuildings();
    
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
});