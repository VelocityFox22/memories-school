document.addEventListener('DOMContentLoaded', function() {
    loadMemories('memoriesGallery', memoriesData.length);
    
    // Filter memories by year
    const memoriesTabs = document.querySelectorAll('.memories-tab');
    const gallery = document.getElementById('memoriesGallery');
    
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
    
    // Initialize lightbox with all memories for navigation
    const lightboxImages = document.querySelectorAll('.gallery-item');
    lightboxImages.forEach((img, index) => {
        img.onclick = () => openLightbox(index);
    });
});