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
