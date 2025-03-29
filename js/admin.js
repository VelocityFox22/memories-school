// Admin functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const loginForm = document.getElementById('loginForm');
    const adminPanel = document.getElementById('adminPanel');
    
    if (isLoggedIn) {
        loginForm.style.display = 'none';
        adminPanel.style.display = 'block';
    } else {
        loginForm.style.display = 'block';
        adminPanel.style.display = 'none';
    }
    
    // Login form
    const loginFormElement = document.getElementById('loginFormElement');
    loginFormElement.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // In a real app, you would validate with a server
        // For demo purposes, using hardcoded credentials
        if (username === 'admin' && password === 'password') {
            localStorage.setItem('isLoggedIn', 'true');
            loginForm.style.display = 'none';
            adminPanel.style.display = 'block';
        } else {
            alert('Username atau password salah!');
        }
    });
    
    // Logout button
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('isLoggedIn');
        window.location.reload();
    });
    
    // Tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Update active tab button
            tabBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Update active tab content
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === tabId) {
                    content.classList.add('active');
                }
            });
        });
    });
    
    // Show/hide conditional fields based on image type
    const imageType = document.getElementById('imageType');
    const conditionalFields = document.querySelectorAll('.conditional');
    
    imageType.addEventListener('change', function() {
        const showFields = this.value === 'teacher';
        
        conditionalFields.forEach(field => {
            field.style.display = showFields ? 'block' : 'none';
        });
    });
    
    // Upload form
    const uploadForm = document.getElementById('uploadForm');
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const imageType = document.getElementById('imageType').value;
        const imageFile = document.getElementById('imageUpload').files[0];
        const caption = document.getElementById('imageCaption').value;
        
        // In a real app, you would upload to a server
        // For demo purposes, we'll just show an alert
        alert('Foto berhasil diupload!\nJenis: ' + imageType + '\nKeterangan: ' + caption);
        
        // Reset form
        this.reset();
        conditionalFields.forEach(field => {
            field.style.display = 'none';
        });
    });
    
    // Load content for management tab
    function loadContentItems() {
        const contentItems = document.getElementById('contentItems');
        contentItems.innerHTML = '';
        
        // Combine all data for management
        const allData = [
            ...memoriesData.map(item => ({ ...item, type: 'memory' })),
            ...teachersData.map(item => ({ ...item, caption: item.name + ' - ' + item.position, type: 'teacher' })),
            ...buildingsData.map(item => ({ ...item, caption: item.title, type: 'building' }))
        ];
        
        allData.forEach((item, index) => {
            const contentItem = document.createElement('div');
            contentItem.className = 'content-item';
            contentItem.innerHTML = `
                <div class="content-item-img">
                    <img src="${item.src}" alt="${item.caption}">
                </div>
                <div class="content-item-info">
                    <h4>${item.caption}</h4>
                    <p>Type: ${item.type}</p>
                    <div class="content-item-actions">
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            contentItems.appendChild(contentItem);
        });
    }
    
    // Load content when management tab is clicked
    document.querySelector('[data-tab="manage"]').addEventListener('click', loadContentItems);
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
    }
];

const buildingsData = [
    {
        src: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
        title: "Gedung Utama",
        description: "Tempat kami menghabiskan sebagian besar waktu belajar"
    }
];