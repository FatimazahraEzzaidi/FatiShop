const products = [
    { 
        id: 1, 
        name: "Montre de Luxe", 
        price: 500, 
        image: "https://images.unsplash.com/photo-1638471649011-342a0f809762?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
        id: 2, 
        name: "Casque Sans Fil", 
        price: 120, 
        image: "https://images.unsplash.com/photo-1491927570842-0261e477d937?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    },
    { 
        id: 3, 
        name: "Clavier Gaming", 
        price: 300, 
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=1165&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    }
    
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price} Dh</p>
            <button class="btn-add" onclick="addToCart(${product.id})">Ajouter au panier</button>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const totalPrice = document.getElementById('total-price');

    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">Votre panier est vide</p>';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <li style="display:flex; justify-content:space-between; margin-bottom:10px;">
                <span>${item.name}</span>
                <strong>${item.price} Dh</strong>
            </li>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartCount.textContent = cart.length;
    totalPrice.textContent = total;
}

function checkout() {
    if (cart.length > 0) {
        alert("Commande validée ! Montant total : " + document.getElementById('total-price').textContent + " Dh");
        cart = [];
        updateCart();
    } else {
        alert("Le panier est vide !");
    }
}

// Lancement au chargement
displayProducts();