// Cargar los productos desde el archivo JSON
fetch('../data/products.json')
    .then(response => response.json())
    .then(data => {
        const productContainer = document.getElementById('product-container');
        const tipos = ['consola', 'celular', 'accesorio'];

        tipos.forEach(tipo => {
            const sectionTitle = document.createElement('h2');
            sectionTitle.textContent = tipo.toUpperCase();
            productContainer.appendChild(sectionTitle);

            const productosFiltrados = data.filter(producto => producto.tipo === tipo);
            const cardContainer = document.createElement('div');
            cardContainer.classList.add('card-container');

            productosFiltrados.forEach(producto => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = 
                    `<img src="${producto.imagen}" alt="${producto.nombre}" class="card-image">
                    <h3 class="card-title">${producto.nombre}</h3>
                    <p class="card-price">$${producto.precio}</p>
                    <button class="add-to-cart-button">Agregar al carrito</button>`;
                
                // Asignamos el evento al botón de "Agregar al carrito"
                card.querySelector('.add-to-cart-button').addEventListener('click', () => {
                    addToCart(producto);
                });

                cardContainer.appendChild(card);
            });

            productContainer.appendChild(cardContainer);
        });
    })
    .catch(error => console.error('Error cargando productos:', error));

// Carrito de compras
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para agregar productos al carrito
function addToCart(producto) {
    const existingProductIndex = cart.findIndex(item => item.nombre === producto.nombre);

    if (existingProductIndex === -1) {
        producto.quantity = 1;
        cart.push(producto);
    } else {
        cart[existingProductIndex].quantity += 1;
    }

    // Guardamos el carrito actualizado en el localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Función para renderizar el carrito
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const totalPriceElement = document.getElementById('total-price');
    cartItemsContainer.innerHTML = '';  // Limpiamos el contenedor del carrito

    let totalPrice = 0;

    cart.forEach((producto, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = 
            `<p>${producto.nombre} - $${producto.precio} x ${producto.quantity}</p>
            <button onclick="removeFromCart(${index})">Eliminar</button>`;
        cartItemsContainer.appendChild(cartItem);

        totalPrice += producto.precio * producto.quantity;
    });

    totalPriceElement.textContent = totalPrice.toFixed(2);  // Mostrar el total
}

// Función para eliminar un producto del carrito
function removeFromCart(index) {
    cart.splice(index, 1);  // Eliminar el producto en el índice
    localStorage.setItem('cart', JSON.stringify(cart));  // Actualizamos el carrito en el localStorage
    renderCart();  // Volver a renderizar el carrito
}

// Función para vaciar el carrito
document.getElementById('clear-cart').addEventListener('click', () => {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));  // Limpiar el carrito en el localStorage
    renderCart();  // Volver a renderizar el carrito
});

// Función para realizar la compra
document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length > 0) {
        alert("¡Compra realizada con éxito!");  // Mensaje de éxito
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));  // Limpiar carrito después de la compra
        renderCart();  // Actualizar la vista del carrito
    } else {
        alert("Tu carrito está vacío. Agrega productos antes de realizar la compra.");
    }
});

// Inicializar el carrito al cargar la página
renderCart();
