document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    // Function to get basket items from local storage
    function getBasketItems() {
        try {
            return JSON.parse(localStorage.getItem('basket')) || [];
        } catch (e) {
            console.error('Error reading basket from localStorage', e);
            return [];
        }
    }

    // Function to save basket items to local storage
    function saveBasketItems(items) {
        try {
            localStorage.setItem('basket', JSON.stringify(items));
        } catch (e) {
            console.error('Error saving basket to localStorage', e);
        }
    }

    // Function to update the basket UI in cart.html
    function updateBasketUI() {
        console.log('Updating basket UI');
        const basketItemsContainer = document.getElementById('basketItems');
        const basketTotal = document.getElementById('basketTotal');
        const items = getBasketItems();
        basketItemsContainer.innerHTML = '';
        let total = 0;
        items.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('flex', 'justify-between', 'items-center', 'p-2', 'border', 'border-gray-300');
            itemDiv.innerHTML = `
                <div>
                    <img src="${item.image}" class="h-24 w-24">
                    <h4 class="font-bold text-black">${item.name}</h4>
                    <p class="text-gray-500">${item.brand}</p>
                </div>
                <div class="text-black font-bold">Rs ${item.price}</div>
                <button class="removeBtn bg-red-500 text-white px-2 py-1 rounded" data-index="${index}">Remove</button>
            `;
            basketItemsContainer.appendChild(itemDiv);
            total += item.price;
        });
        basketTotal.textContent = total;

        // Add event listeners to remove buttons
        const removeButtons = document.querySelectorAll('.removeBtn');
        removeButtons.forEach(button => {
            button.addEventListener('click', function(event) {
                const itemIndex = parseInt(event.target.getAttribute('data-index'));
                removeItemFromBasket(itemIndex);
            });
        });
    }

    // Function to remove item from basket
    function removeItemFromBasket(itemIndex) {
        console.log('Removing item from basket, index:', itemIndex);
        const basketItems = getBasketItems();
        if (itemIndex > -1) {
            basketItems.splice(itemIndex, 1);
            saveBasketItems(basketItems);
            updateBasketUI();
            updateBasketCounter();
        }
    }

    // Function to add item to basket
    function addToBasket(productContainer) {
        console.log('Adding item to basket');
        const productImage = productContainer.querySelector('img').src;
        const productName = productContainer.querySelector('h1').textContent;
        const productBrand = productContainer.querySelector('span').textContent;
        const productPrice = parseInt(productContainer.querySelector('h1:nth-of-type(2)').textContent.replace('Rs-', ''), 10);
        const basketItems = getBasketItems();
        basketItems.push({
            image: productImage,
            name: productName,
            brand: productBrand,
            price: productPrice
        });
        saveBasketItems(basketItems);
        alert('Item added to basket!');
        updateBasketCounter();
    }

    // Function to update the basket counter
    function updateBasketCounter() {
        console.log('Updating basket counter');
        const basketCounter = document.getElementById('basket-counter');
        const basketItems = getBasketItems();
        basketCounter.textContent = basketItems.length;
    }

    // Add event listeners for "BUY NOW" buttons and basket icons
    const productContainers = document.querySelectorAll('div[id^="img"]');
    productContainers.forEach(container => {
        const buyButton = container.querySelector('button');
        const basketIcon = container.querySelector('.fa-shopping-basket');
        buyButton.addEventListener('click', function() {
            addToBasket(container);
        });
        basketIcon.addEventListener('click', function() {
            addToBasket(container);
        });
    });

    // Update basket counter on page load
    updateBasketCounter();

    // If on the basket page, update the UI
    if (document.getElementById('basketItems')) {
        updateBasketUI();
    }
});
let btn=document.getElementById('btn');

btn.addEventListener('click',function(){

    prompt("Enter your upi id");
    alert("Invalid UPI id please try after some time")
})
