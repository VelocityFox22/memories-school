// Vintage effects and animations
document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.textContent = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
    });
    
    // Vintage photo hover effect
    document.querySelectorAll('.vintage-item img').forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.filter = 'sepia(0)';
        });
        img.addEventListener('mouseleave', function() {
            this.style.filter = 'sepia(0.3)';
        });
    });
    
    // Load content dynamically
    loadGallery();
});

function loadGallery() {
    // Ini akan diganti dengan data dari server/API
    const memories = [
        {
            img: 'assets/sample1.jpg',
            caption: 'First day at school - 2021'
        },
        {
            img: 'assets/sample2.jpg',
            caption: 'Field trip to museum'
        }
    ];
    
    const gallery = document.querySelector('main');
    gallery.innerHTML = `
        <section id="gallery" class="vintage-section">
            <h2>Our Memories</h2>
            <div class="vintage-gallery">
                ${memories.map(memory => `
                    <div class="vintage-item">
                        <img src="${memory.img}" alt="Memory">
                        <div class="vintage-caption">${memory.caption}</div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;
}