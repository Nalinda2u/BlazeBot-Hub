document.addEventListener('DOMContentLoaded', () => {
    // Basic functionality for filter buttons (can be expanded)
    const sizeButtons = document.querySelectorAll('.size-btn');
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            // In a real app, you'd filter products here
            console.log(`Selected size: ${button.textContent}`);
        });
    });

    const colorBoxes = document.querySelectorAll('.color-box');
    colorBoxes.forEach(box => {
        box.addEventListener('click', () => {
            colorBoxes.forEach(b => b.classList.remove('active'));
            box.classList.add('active');
            // In a real app, you'd filter products here
            const color = box.classList[1]; // e.g., 'black', 'navy'
            console.log(`Selected color: ${color}`);
        });
    });

    const clearFiltersBtn = document.querySelector('.btn-clear-filters');
    clearFiltersBtn.addEventListener('click', () => {
        // Clear all active states for filters
        sizeButtons.forEach(btn => btn.classList.remove('active'));
        colorBoxes.forEach(box => box.classList.remove('active'));
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
        console.log("Filters cleared.");
        // In a real app, you'd reset product list here
    });

    // Example for product card click (can navigate to a detail page)
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', () => {
            const productName = card.querySelector('h3').textContent;
            console.log(`Clicked on: ${productName}`);
            // window.location.href = `product-detail.html?name=${encodeURIComponent(productName)}`;
        });
    });

    // You can add more interactive JavaScript here later
});