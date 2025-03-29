// Password bisa diubah disini
const ADMIN_PASSWORD = "admin123"; 

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const adminPanel = document.getElementById('adminPanel');
    const uploadForm = document.getElementById('uploadForm');
    const imagePreview = document.getElementById('imagePreview');
    const logoutBtn = document.getElementById('logoutBtn');
    
    // Check if already logged in
    if(localStorage.getItem('isAdminLoggedIn') === 'true') {
        loginForm.style.display = 'none';
        adminPanel.style.display = 'block';
    }
    
    // Login handler
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const password = document.getElementById('adminPass').value;
        
        if(password === ADMIN_PASSWORD) {
            localStorage.setItem('isAdminLoggedIn', 'true');
            loginForm.style.display = 'none';
            adminPanel.style.display = 'block';
        } else {
            alert('Wrong password!');
        }
    });
    
    // Image preview
    document.getElementById('imageUpload').addEventListener('change', function(e) {
        const file = e.target.files[0];
        if(file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                imagePreview.innerHTML = `
                    <img src="${event.target.result}" alt="Preview" style="max-width:100%; max-height:200px;">
                `;
            }
            reader.readAsDataURL(file);
        }
    });
    
    // Upload handler (simulasi)
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const caption = document.getElementById('imageCaption').value;
        const fileInput = document.getElementById('imageUpload');
        
        if(fileInput.files.length > 0) {
            // Di production, ini akan upload ke server
            const file = fileInput.files[0];
            const fileName = "uploaded_" + Date.now() + "_" + file.name;
            
            alert(`Foto berhasil diupload!\nCaption: ${caption}\nFilename: ${fileName}`);
            
            // Reset form
            uploadForm.reset();
            imagePreview.innerHTML = '';
        } else {
            alert('Pilih foto terlebih dahulu!');
        }
    });
    
    // Logout handler
    logoutBtn.addEventListener('click', function() {
        localStorage.removeItem('isAdminLoggedIn');
        window.location.reload();
    });
});