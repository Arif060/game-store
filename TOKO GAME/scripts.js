let cart = [];

function addToCart(productName, price) {
    const product = { name: productName, price: price };
    cart.push(product);
    alert(productName + " has been added to your cart.");
    updateCart();
}

function updateCart() {
    console.log("Cart Contents:", cart);
    // Implementasi tambahan untuk menampilkan isi keranjang di halaman
}
