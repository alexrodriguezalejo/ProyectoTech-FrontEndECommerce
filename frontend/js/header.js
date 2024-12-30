const headerHTML = `
<header>
    <nav class="navbar container">
        <picture class="navbar__logo">
            <a href="../index.html">
                <img src="../images/LogoRA.png" alt="Logotipo Electronic RA" />
            </a>
        </picture>
        <ul class="navbar__menu">
            <li class="navbar__item with-submenu">
                <a class="navbar__link with-icon" href="../index.html">TIENDA <iconify-icon icon="mdi:chevron-down"></iconify-icon></a>
                <ul class="submenu">
                    <li class="submenu__item"><a href="../pages/products.html" class="submenu__link">Consolas</a></li>
                    <li class="submenu__item"><a href="../pages/products.html" class="submenu__link">Celulares</a></li>
                    <li class="submenu__item"><a href="../pages/products.html" class="submenu__link">Accesorios de PC</a></li>
                </ul>
            </li>
            <li class="navbar__item"><a class="navbar__link" href="../pages/error_404.html">INGRESAR</a></li>
            <li class="navbar__item">
                <a class="navbar__cart" href="#cart-section">
                    <img src="../images/icons/cart-icon.svg" alt="Carrito de Compras">
                </a>
            </li>
        </ul>
    </nav>
</header>
`;

document.body.insertAdjacentHTML("afterbegin", headerHTML);
