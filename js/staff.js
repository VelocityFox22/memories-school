document.addEventListener('DOMContentLoaded', function() {
    loadStaff('staffGrid', staffData.length);
    
    // Filter staff by type
    const staffTabs = document.querySelectorAll('.staff-tab');
    const grid = document.getElementById('staffGrid');
    
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
});