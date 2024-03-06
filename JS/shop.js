// Функция за превключване на навигационното меню
function toggleNavbar() {
    const navbar = document.querySelector(".navbar-container");
    navbar.style.display = navbar.style.display === "none" ? "block" : "none";
}

// Инициализиране на масивите за количката и продуктите
let cart = [];
let products = [];

// Извличане на продуктите от JSON файл
fetch("products.json")
    .then((response) => response.json())
    .then((data) => {
        products = data;
        renderProducts(products);
    })
    .catch((error) => {
        console.error("Грешка при извличане на продуктите:", error);
    });

// Показване на продуктите
function renderProducts(products) {
    const shopItems = document.querySelector(".shop-items");
    shopItems.innerHTML = "";

    products.forEach((product) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("shop-item");
        if (product.id === 1 || product.id === 2) {
            itemElement.innerHTML = `
            <img class="shop-item-image" src="${product.image}" alt="${product.name}">
            <span class="shop-item-title">${product.name}</span>
                <span class="shop-item-price">${product.price}лв.</span>
                <div class="item-size">
                <label>Размер:</label>
                <select required>
                  <option></option>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                </div>
                <button class="btn btn-primary shop-item-button" onclick="addToCart(${product.id})">Добави в количката</button>
        `;
            shopItems.appendChild(itemElement);
        } else if (product.id === 3 || product.id === 4) {
            itemElement.innerHTML = `
                <img class="shop-item-image" src="${product.image}" alt="${product.name}">
                <span class="shop-item-title">${product.name}</span>
                    <span class="shop-item-price">${product.price}лв.</span>
                    <div class="item-size">
                    <label>Размер:</label>
                    <select required>
                      <option></option>
                      <option>38</option>
                      <option>39</option>
                      <option>40</option>
                      <option>41</option>
                      <option>42</option>
                      <option>43</option>
                    </select>
                  </div>
                    <button class="btn btn-primary shop-item-button" onclick="addToCart(${product.id})">Добави в количката</button>
            `;
            shopItems.appendChild(itemElement);
        } else if (product.id === 8) {
            itemElement.innerHTML = `
                <img class="shop-item-image" src="${product.image}" alt="${product.name}">
                <span class="shop-item-title">${product.name}</span>
                <div class="shop-item-details">
                    <span class="shop-item-price">${product.price}лв.</span>
                    <div class="item-size">
                    <label>Килограми:</label>
                    <select required>
                      <option></option>
                      <option>1 кг</option>
                      <option>5 кг</option>
                      <option>10 кг</option>
                      <option>15 кг</option>
                    </select>
                  </div>
                    <button class="btn btn-primary shop-item-button" onclick="addToCart(${product.id})">Добави в количката</button>
                </div>
            `;
            shopItems.appendChild(itemElement);
        } else if (product.id === 10) {
            itemElement.innerHTML = `
                <img class="shop-item-image" src="${product.image}" alt="${product.name}" style="margin-bottom:40px;">
                <span class="shop-item-title">${product.name}</span>
                <div class="shop-item-details" style="margin-bottom:15px;">
                <span><i>500 гр.</i></span><br>
                    <span class="shop-item-price">${product.price}лв.</span>
                  </div>
                    <button class="btn btn-primary shop-item-button" onclick="addToCart(${product.id})">Добави в количката</button>
            `;
            shopItems.appendChild(itemElement);
        } else {
            itemElement.innerHTML = `
            <img class="shop-item-image" src="${product.image}" alt="${product.name}">
            <span class="shop-item-title">${product.name}</span>
            <br>
                <span class="shop-item-price">${product.price}лв.</span>
                <br>
                <br>
            <button class="btn btn-primary shop-item-button" onclick="addToCart(${product.id})">Добави в количката</button>
        `;
            shopItems.appendChild(itemElement);
        }
    });
}

// Добавяне на продукт към количката
function addToCart(productId) {
    const product = products.find((item) => item.id === productId);
    if (product) {
        if (cart.some((item) => item.id === productId)) {
            alert("Този продукт вече е в количката!");
        } else {
            product.quantity = 1; // Инициализиране на количество
            cart.push(product);
            renderCart();

            productsAmount(); // Update the products amount
        }
    } else {
        console.error("Продуктът не е намерен:", productId);
    }
}

// Показване на количката
function renderCart() {
    const cartItems = document.querySelector(".cart-items");
    cartItems.innerHTML = "";

    cart.forEach((item) => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("item");
        cartItemElement.innerHTML = `
            <div class="img">
                <img src="${item.image}">
            </div>
            <div class="name">
                <span>${item.name}</span>
            </div>
            <div class="price">
                <span>${item.price}лв.</span>
            </div>
            <div class="quantity">
                <button class="minus" onclick="quantityMinus(${item.id})"><</button>
                <span>${item.quantity}</span>
                <button class="plus" onclick="quantityPlus(${item.id})">></button>
            </div>  
        `;
        cartItems.appendChild(cartItemElement);
    });
}

// Намаляване на количество на продукт в количката
function quantityMinus(productId) {
    const product = cart.find((item) => item.id === productId);
    if (product.quantity > 1) {
        product.quantity--;
        renderCart();

        productsAmount(); // Update the products amount
    } else {
        cart = cart.filter((item) => item.id !== productId);
        renderCart();
        alert("Продуктът е премахнат от количката!");

        productsAmount(); // Update the products amount
    }
}

// Увеличаване на количество на продукт в количката
function quantityPlus(productId) {
    const product = cart.find((item) => item.id === productId);
    product.quantity++;
    renderCart();

    productsAmount(); // Update the products amount
}

// Обновяване на количество на продукт в количката
function updateCartQuantity(productId, quantity) {
    const product = cart.find((item) => item.id === productId);
    if (product) {
        product.quantity = quantity;
        renderCart();
    }
}

// Обновяване на броя на продуктите
function productsAmount() {
    let amount = 0;
    for (let i = 0; i < cart.length; i++) {
        amount += cart[i].quantity;
    }
    let productsAmountElement = document.querySelector("#products-amount");
    if (productsAmountElement) {
        productsAmountElement.textContent = amount;
    } else {
        console.error("Element with id 'products-amount' not found");
    }
    let mobileProductsAmountElement = document.querySelector("#mobile-products-amount");
    if (mobileProductsAmountElement) {
        mobileProductsAmountElement.textContent = amount;
    } else {
        console.error("Element with id 'mobile-products-amount' not found");
    }
}
// Нулиране на брояча за количество
function quantityReset() {
    let amount = 0;
    let productsAmountElement = document.querySelector("#products-amount")
    productsAmountElement.textContent = amount;
    let mobileProductsAmountElement = document.querySelector("#mobile-products-amount")
    mobileProductsAmountElement.textContent = amount;
}
// Изчисляване на общата цена
function priceCalculation() {
    let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += item.price * item.quantity;
    });
    return totalPrice;
}

// Плащане
document.querySelector(".check-Out").addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Количката ви е празна!");
        return;
    } else {
        priceCalculation();
        //ако има повече от 1 продукт
        if (cart.length === 1) {
            alert("Вие успешно поръчахте следния продукт: " + cart.map((item) => item.name).join(", "));
        }else{
          alert("Вие успешно поръчахте следните продукти: " + cart.map((item) => item.name).join(", "));  
        }
        alert("Цената на поръчката ви е: " + priceCalculation() + "лв.");
        alert("Благодарим ви за поръчката!");

        quantityReset();
        renderCart();
        cart = [];
        renderCart();
    }
});

// Превключване на видимостта на количката
function cartPull() {
    var cartElement = document.getElementById("cart");
    cartElement.style.display = cartElement.style.display === "none" || cartElement.style.display === "" ? "flex" : "none";
}
