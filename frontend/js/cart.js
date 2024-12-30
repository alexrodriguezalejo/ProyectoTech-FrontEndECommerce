// Cargar los productos del carrito desde el localStorage
document.addEventListener('DOMContentLoaded', function() {
    const cartContainer = document.getElementById('cart-container');
    const cartSummary = document.getElementById('cart-summary');

    // Obtener los productos del carrito
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Si el carrito está vacío, mostrar un mensaje
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
    } else {
        // Mostrar los productos en el carrito
        cart.forEach(producto => {
            const productElement = document.createElement('div');
            productElement.classList.add('cart-product');
            productElement.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}" class="cart-product-image">
                <h3>${producto.nombre}</h3>
                <p>$${producto.precio}</p>
                <p>Cantidad: ${producto.quantity}</p>
            `;
            cartContainer.appendChild(productElement);
        });

        // Resumen del carrito
        const total = cart.reduce((acc, producto) => acc + producto.precio * producto.quantity, 0);
        cartSummary.innerHTML = `<p>Total: $${total}</p>`;
    }
});
