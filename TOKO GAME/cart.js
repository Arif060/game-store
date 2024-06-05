let cart = [];

// Fungsi untuk menambah produk ke keranjang
function addToCart(productName, price) {
    const product = { name: productName, price: price, quantity: 1 };
    const existingProductIndex = cart.findIndex(item => item.name === productName);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push(product);
    }

    alert(productName + " has been added to your cart.");
    updateCart();
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    cart.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.className = 'cart-item';
        productElement.innerHTML = `
            <span>${product.name} - $${product.price} x ${product.quantity}</span>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(productElement);
    });

    updateCartTotal();
}

// Fungsi untuk menghitung dan memperbarui total keranjang
function updateCartTotal() {
    const cartTotalElement = document.getElementById('cart-total');
    const total = cart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    cartTotalElement.innerText = `Total: $${total.toFixed(2)}`;
}

// Fungsi untuk menghapus produk dari keranjang
function removeFromCart(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    updateCart();
}
