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
                
                // Show the corresponding tab content
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            }
        });
    });
}

// Setup memories tabs
const memoriesTabs = document.querySelectorAll('.memories-tab');
setupTabs(memoriesTabs, [], 'active');

// Setup staff tabs
const staffTabs = document.querySelectorAll('.staff-tab');
setupTabs(staffTabs, [], 'active');

// Setup admin tabs
const adminTabs = document.querySelectorAll('.admin-tab');
const adminContents = document.querySelectorAll('.admin-content');
setupTabs(adminTabs, adminContents, 'active');

// Sample data - in a real app, this would come from a database
let memoriesData = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Hari Pertama Sekolah",
        year: "2022",
        date: "15 Juli 2022"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Kegiatan Pramuka",
        year: "2022",
        date: "20 Agustus 2022"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Study Tour ke Museum",
        year: "2023",
        date: "10 Maret 2023"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Pentas Seni Akhir Tahun",
        year: "2023",
        date: "15 Desember 2023"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Kegiatan Bakti Sosial",
        year: "2024",
        date: "5 Februari 2024"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        caption: "Persiapan Ujian Akhir",
        year: "2024",
        date: "20 April 2024"
    }
];

const staffData = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Bapak Saadullah",
        position: "Guru PPKN",
        type: "teacher"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Ibu Junirah Martha",
        position: "Guru Bahasa Indonesia",
        type: "teacher"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Bapak Syarifudin",
        position: "Guru Akidah Akhlak",
        type: "teacher"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Ibu Meida",
        position: "Guru Matematika",
        type: "teacher"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Ibu Siti Aminah",
        position: "Kepala Tata Usaha",
        type: "administration"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Bapak Ahmad Fauzi",
        position: "Staf Administrasi",
        type: "administration"
    },
    {
        id: 7,
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Bapak Dr. H. Muhammad Ali",
        position: "Kepala Madrasah",
        type: "leadership"
    },
    {
        id: 8,
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Ibu Dr. Siti Khadijah",
        position: "Wakil Kepala Madrasah",
        type: "leadership"
    },
    // Additional staff to reach 22
    {
        id: 9,
        src: "https://images.unsplash.com/photo-1546820389-44d77e1f3b31?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Bapak Rudi Hartono",
        position: "Guru Fisika",
        type: "teacher"
    },
    {
        id: 10,
        src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Ibu Linda Suryani",
        position: "Guru Kimia",
        type: "teacher"
    },
    {
        id: 11,
        src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Bapak Budi Santoso",
        position: "Guru Biologi",
        type: "teacher"
    },
    {
        id: 12,
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Bapak Joko Prasetyo",
        position: "Guru Sejarah",
        type: "teacher"
    },
    {
        id: 13,
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Ibu Sri Wahyuni",
        position: "Guru Bahasa Inggris",
        type: "teacher"
    },
    {
        id: 14,
        src: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Bapak Agus Setiawan",
        position: "Guru Olahraga",
        type: "teacher"
    },
    {
        id: 15,
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Ibu Dian Permatasari",
        position: "Guru Seni Budaya",
        type: "teacher"
    },
    {
        id: 16,
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Ibu Ratna Dewi",
        position: "Guru BK",
        type: "teacher"
    },
    {
        id: 17,
        src: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Bapak Eko Prasetyo",
        position: "Guru TIK",
        type: "teacher"
    },
    {
        id: 18,
        src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Bapak Bambang Sutrisno",
        position: "Staf Perpustakaan",
        type: "administration"
    },
    {
        id: 19,
        src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Ibu Wulan Sari",
        position: "Staf Keuangan",
        type: "administration"
    },
    {
        id: 20,
        src: "https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Bapak Hendra Gunawan",
        position: "Staf Sarana Prasarana",
        type: "administration"
    },
    {
        id: 21,
        src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Ibu Maya Indah",
        position: "Staf Humas",
        type: "administration"
    },
    {
        id: 22,
        src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
        name: "Ibu Rina Astuti",
        position: "Wakil Kepala Bidang Kurikulum",
        type: "leadership"
    }
];

// Load data into the page
function loadMemories() {
    const gallery = document.getElementById('memoriesGallery');
    gallery.innerHTML = '';
    
    memoriesData.forEach((memory, index) => {
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
    
    // Filter memories by year
    memoriesTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const year = this.getAttribute('data-year');
            const items = gallery.querySelectorAll('.gallery-item');
            
            items.forEach(item => {
                if (year === 'all' || item.getAttribute('data-year') === year) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

function loadStaff() {
    const grid = document.getElementById('staffGrid');
    grid.innerHTML = '';
    
    staffData.forEach(staff => {
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
    
    // Filter staff by type
    staffTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            const cards = grid.querySelectorAll('.staff-card');
            
            cards.forEach(card => {
                if (type === 'all' || card.getAttribute('data-type') === type) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
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
    
    if (currentImageIndex >= memoriesData.length) {
        currentImageIndex = 0;
    } else if (currentImageIndex < 0) {
        currentImageIndex = memoriesData.length - 1;
    }
    
    updateLightbox();
}

function updateLightbox() {
    const memory = memoriesData[currentImageIndex];
    document.getElementById('lightbox-image').src = memory.src;
    document.getElementById('lightbox-caption').textContent = `${memory.caption} - ${memory.date}`;
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

// Login Form
const loginForm = document.getElementById('loginForm');
let isAdminLoggedIn = false;

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // In a real app, you would validate with a server
    // For demo purposes, using hardcoded credentials
    if (username === 'admin' && password === 'password') {
        isAdminLoggedIn = true;
        alert('Login berhasil! Anda sekarang dapat mengunggah dan menghapus foto.');
        document.querySelector('.admin-tab[data-tab="upload"]').click();
        setupAdminFeatures();
    } else {
        alert('Username atau password salah!');
    }
});

// Upload Form
const uploadForm = document.getElementById('uploadForm');

uploadForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!isAdminLoggedIn) {
        alert('Silakan login sebagai admin terlebih dahulu.');
        document.querySelector('.admin-tab[data-tab="login"]').click();
        return;
    }
    
    const fileInput = document.getElementById('photo-upload');
    const caption = document.getElementById('photo-caption').value;
    const year = document.getElementById('photo-year').value;
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const newPhoto = {
                id: memoriesData.length + 1,
                src: e.target.result,
                caption: caption,
                year: year,
                date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
            };
            
            memoriesData.push(newPhoto);
            loadMemories();
            
            alert('Foto berhasil diunggah!');
            uploadForm.reset();
            
            // Update management grid
            if (isAdminLoggedIn) {
                loadManagementGrid();
            }
        };
        
        reader.readAsDataURL(file);
    }
});

// Admin features
function setupAdminFeatures() {
    if (isAdminLoggedIn) {
        loadManagementGrid();
    }
}

function loadManagementGrid() {
    const manageGrid = document.getElementById('manageGrid');
    manageGrid.innerHTML = '';
    
    memoriesData.forEach((memory, index) => {
        const item = document.createElement('div');
        item.className = 'manage-item';
        item.innerHTML = `
            <img src="${memory.src}" alt="${memory.caption}">
            <div class="manage-actions">
                <button class="delete-btn" onclick="deletePhoto(${memory.id})">Hapus</button>
            </div>
        `;
        manageGrid.appendChild(item);
    });
}

function deletePhoto(id) {
    if (!isAdminLoggedIn) {
        alert('Silakan login sebagai admin terlebih dahulu.');
        document.querySelector('.admin-tab[data-tab="login"]').click();
        return;
    }
    
    if (confirm('Apakah Anda yakin ingin menghapus foto ini?')) {
        memoriesData = memoriesData.filter(memory => memory.id !== id);
        loadMemories();
        loadManagementGrid();
        alert('Foto berhasil dihapus!');
    }
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

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    loadMemories();
    loadStaff();
    
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
    
    // Parallax effect
    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const parallaxBg = document.querySelector('.parallax-bg');
        if (parallaxBg) {
            parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });
});