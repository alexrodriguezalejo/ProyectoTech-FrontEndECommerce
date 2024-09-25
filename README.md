# Proyecto de E-commerce: Tienda de Carteras
  ## 1.Análisis Funcional
  ### Roles de Usuarios
  **- Administrador (Vendedor):**
      - Gestiona el stock de productos.
      - Administra usuarios.
      - Revisa el historial de ventas.
  - Usuario (Comprador):
    - Compra productos.
    - Revisa su historial de compras.
    - Gestiona su cuenta personal.
  ### Funcionalidades
  - Login/Registro
    - Autenticación para usuarios y administradores.
    - Registro de usuarios con datos personales.
    - Edición y eliminación de datos personales.
  - Pantalla Principal
    - Visualización de todas las carteras disponibles.
    - Botón estático de carrito de compras.
    - Buscador de productos (opcional).
    - Barra de tareas o menú lateral con opciones para:
    - Perfil
    - Historial de compras/ventas
    - Productos
    - Favoritos
    - Configuración
    - Cerrar sesión
  - Gestión de Productos
        - Ver detalles completos de cada cartera.
        - Añadir productos al carrito de compras y a favoritos.
        - Filtro de productos por tipo.
  - Perfil de Cliente
        - Visualización y edición de datos personales.
        - Eliminar cuenta de usuario.
        - Datos de facturación y dirección de retiro (solo para el vendedor).
  - Carrito de Compras
        - Visualizar productos en el carrito.
        - Editar y eliminar productos del carrito.
        - Concretar la compra con detalle del producto y total.
        - Notificación por email con datos de pago.
  - Favoritos
        - Visualizar productos agregados como favoritos.
        - Eliminar productos de la lista de favoritos.
  - Historial de Ventas/Compras
        - Visualizar productos vendidos/comprados.
  - CRUD de Productos (Administrador)
        - Publicar nuevos productos.
        - Editar y eliminar productos existentes.
        - Aumentar el stock de productos.
  - CRUD de Usuarios (Administrador)
        - Administrar usuarios que no son administradores.
  ## 2. Configuración del Entorno de Desarrollo
  ### Requisitos Previos
  - Node.js y npm instalados.
      - MySQL y MySQL Workbench para la gestión de la base de datos.
      - Visual Studio Code con extensiones recomendadas:
        - ESLint
        - Prettier
        - Vetur (si usas Vue.js)
  ### Estructura del Proyecto
    /ProyectoTech-FrontEndCarteras
      |-- /frontend                 #Carpeta para el frontend (HTML, CSS, JS, Vue.js)
      |-- /backend                  #Carpeta para el backend (Node.js, Express, etc.)
      |-- README.md                 #Documentación del proyecto
      |-- .gitignore                #Archivos y carpetas a ignorar en git
  ### Configuración del Repositorio
  1. Clonar el repositorio:
      > git clone https://github.com/alexrodriguezalejo/ProyectoTech-FrontEndCarteras
  2. Navegar al directorio del repositorio:
      > cd ProyectoTech-FrontEndCarteras

  ## 3. Descripción de Tecnologías
  ### Frontend
  - HTML, CSS, JavaScript, Bootstrap
  - Vue.js (opcional para componentes más dinámicos)
  ### Backend
      - Node.js
      - Express
      - MySQL para la base de datos
  ## 4. Ejecución del Proyecto
    ### Instalar dependencias en el frontend:
    > cd frontend
    > npm install
    ### Instalar dependencias en el backend:
    > cd ../backend
    > npm install
    ### Configurar las variables de entorno:
      - Crea un archivo .env en la carpeta backend con las siguientes variables:
      > DB_HOST=localhost
      > DB_USER=root
      > DB_PASSWORD=root
      > DB_NAME=tienda_carteras
    ### Iniciar el servidor del backend:
    > npm start
    ### Iniciar el servidor del frontend:
    > npm run serve
