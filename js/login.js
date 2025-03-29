document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // In a real app, you would validate with a server
            // For demo purposes, using hardcoded credentials
            if (username === 'admin' && password === 'password') {
                alert('Login berhasil! Anda akan diarahkan ke panel admin.');
                // In a real app, redirect to admin panel
                // window.location.href = 'admin-dashboard.html';
            } else {
                alert('Username atau password salah!');
            }
        });
    }
});