document.addEventListener('DOMContentLoaded', function() {
    loadMemories('featuredGallery', 6);
    loadStaff('staffPreviewGrid', 4);
    
    // Initialize lightbox with all memories for navigation
    const lightboxImages = document.querySelectorAll('.gallery-item');
    lightboxImages.forEach((img, index) => {
        img.onclick = () => openLightbox(index);
    });
});