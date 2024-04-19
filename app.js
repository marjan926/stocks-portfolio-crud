document.addEventListener('DOMContentLoaded', () => {
    const createForm = document.getElementById('create-form');
    
    createForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const stockName = document.getElementById('stock-name').value;
        const stockSymbol = document.getElementById('stock-symbol').value;
        const stockPrice = parseFloat(document.getElementById('stock-price').value);

        // Create a new stock object (you can modify this part based on your data structure)
        const newStock = {
            name: stockName,
            symbol: stockSymbol,
            price: stockPrice
        };

        // Here you can add code to send the newStock object to your backend or handle it locally
        console.log('New Stock:', newStock);

        // Clear the form
        createForm.reset();
    });
});
document.addEventListener('DOMContentLoaded', () => {

    // Delete Functionality
    const stockList = document.querySelector('.stock-list'); // Assuming you have a list/container for stocks

    stockList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const stockItem = e.target.parentElement;
            stockItem.remove();
            console.log('Deleted stock:', stockItem.querySelector('.stock-name').textContent);
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const stockList = document.querySelector('.stock-list'); // Assuming you have a list/container for stocks

    stockList.addEventListener('click', (e) => {
        if (e.target.classList.contains('update-btn')) {
            const stockItem = e.target.parentElement;
            const stockName = stockItem.querySelector('.stock-name').textContent;
            const stockSymbol = stockItem.querySelector('.stock-symbol').textContent;
            const stockPrice = parseFloat(stockItem.querySelector('.stock-price').textContent);

            // Here you can add code to send an update request to your backend if needed
            console.log('Updated stock:', { name: stockName, symbol: stockSymbol, price: stockPrice });
        }
    });
});


