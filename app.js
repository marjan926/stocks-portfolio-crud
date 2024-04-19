document.addEventListener('DOMContentLoaded', () => {
    const createForm = document.getElementById('create-form');
    const stockList = document.querySelector('.stock-item'); 

    
    createForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const stockName = document.getElementById('stock-name').value;
        const stockSymbol = document.getElementById('stock-symbol').value;
        const stockPrice = parseFloat(document.getElementById('stock-price').value);

        const newStock = {
            name: stockName,
            symbol: stockSymbol,
            price: stockPrice
        };

        console.log('New Stock:', newStock);
        createForm.reset();
    });

    // Delete and Update Functionality
    stockList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const stockItem = e.target.parentElement;
            stockItem.remove();
            console.log('Deleted stock:', stockItem.querySelector('.stock-name').textContent);
        }

        if (e.target.classList.contains('update-btn')) {
            const stockItem = e.target.parentElement;
            const stockName = stockItem.querySelector('.stock-name').textContent;
            const stockSymbol = stockItem.querySelector('.stock-symbol').textContent;
            const stockPrice = parseFloat(stockItem.querySelector('.stock-price').textContent);

            console.log('Updated stock:', { name: stockName, symbol: stockSymbol, price: stockPrice });

        }
    });
});
