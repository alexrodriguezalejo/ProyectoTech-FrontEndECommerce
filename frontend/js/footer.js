const footerHTML = `
<footer>
    <nav class="navbar container">
        <ul class="navbar_item">
            <li class="navbar__item"><a class="navbar__link" href="../index.html">TIENDA</a></li>
            <li class="navbar__item"><a class="navbar__link" href="../pages/error_404.html">REGISTRARSE</a></li>
            <li class="navbar__item"><a class="navbar__link" href="../pages/error_404.html">INGRESAR</a></li>
          
        </ul>
        <picture>
            <img src="../images/LogoRA.png" alt="LogoRA">
        </picture>
    </nav>
    <p class="footer_copy">All rights reserved 2024 - Electronic RA &copy;</p>
</footer>
`;

document.body.insertAdjacentHTML("beforeend", footerHTML);
