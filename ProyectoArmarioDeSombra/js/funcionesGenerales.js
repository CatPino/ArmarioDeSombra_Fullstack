/******************************************************
 * funcionesGenerales.js
 * - Inyección de Navbar / Modales / Footer
 * - Registro + Validaciones + Sesión
 * - Productos (persistentes en localStorage)
 * - Catálogo / Render cards y modals
 * - Carrito con badge y modal
 * - Panel Admin: CRUD (crear/editar/eliminar) + modal
 ******************************************************/

/* ============================
   1) Layout común (Navbar/Modales/Footer)
   ============================ */
function htmlNavbar() {
  return `
  <div class="container-fluid">
    <nav class="navbar navbar-expand-sm mi-navbar position-relative">
      <div class="container-fluid">
        <!-- Botón hamburguesa -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Menu"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <img src="img/Menu.png" alt="Menu">
        </button>

        <!-- Logo -->
        <a class="navbar-brand mx-auto order-0" href="Home.html">
          <img src="img/Logo.png" alt="Logo" width="60">
        </a>

        <!-- Menú -->
        <div class="collapse navbar-collapse" id="Menu">
          <ul class="navbar-nav mx-auto">
            <li id="navAdmin" class="nav-item d-none"><a class="nav-link" href="AdminProductos.html">Admin</a></li>
            <li class="nav-item"><a class="nav-link" href="Home.html">Home</a></li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="Producto.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Productos
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="Todos.html">Todos los productos</a></li>
                <li><a class="dropdown-item" href="Poleras.html">Poleras</a></li>
                <li><a class="dropdown-item" href="Calzas.html">Calzas</a></li>
                <li><a class="dropdown-item" href="Faldas.html">Faldas</a></li>
                <li><a class="dropdown-item" href="Accesorios.html">Accesorios</a></li>
              </ul>
            </li>
            <li class="nav-item"><a class="nav-link" href="Nosotros.html">Nosotros</a></li>
            <li class="nav-item"><a class="nav-link" href="Blogs.html">Blogs</a></li>
            <li class="nav-item"><a class="nav-link" href="Contacto.html">Contacto</a></li>
          </ul>
        </div>

        <!-- Iconos -->
        <div class="iconos-navbar d-flex align-items-center gap-3">
          <div class="position-relative">
            <button type="button" class="btn btn-transparent p-0" data-bs-toggle="modal" data-bs-target="#carritoModal">
              <img src="img/carrito1.png" alt="Carrito">
            </button>
            <!-- Badge de cantidad -->
            <span id="cartCount"
                  class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger d-none"
                  style="font-size:.65rem;">0</span>
          </div>
          <button type="button" class="btn btn-transparent p-0" data-bs-toggle="modal" data-bs-target="#usuarioModal">
            <img src="img/user.png" alt="Usuario">
          </button>
        </div>
      </div>
    </nav>
  </div>`;
}

function htmlModales() {
  return `
  <!-- Modal carrito -->
  <div class="modal fade" id="carritoModal" tabindex="-1" aria-labelledby="carritoModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered"><div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title" id="carritoModalLabel">Carrito de Compras</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body"><h3>No hay productos en el carrito.</h3></div>
      <div class="modal-footer">
        <button type="button" class="btn button2" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn button1" disabled>Ir al pago</button>
      </div>
    </div></div>
  </div>

  <!-- Modal usuario -->
  <div class="modal fade" id="usuarioModal" tabindex="-1" aria-labelledby="usuarioModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered"><div class="modal-content">
      <div class="modal-header">
       <h2 class="modal-title titulo w-100 text-center" id="usuarioModalLabel">Usuario</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>
      <div class="modal-body">
        <!-- contenido por defecto; se reemplaza si hay sesión -->
        <h3>Inicia sesión o registrate.</h3>
        <button class="btn btn-sm w-50 d-block mx-auto mb-2 button1" onclick="window.location.href='Login.html'">Iniciar sesión</button>
        <button class="btn btn-sm w-50 d-block mx-auto button2" onclick="window.location.href='Registro.html'">Regístrate</button>
      </div>
    </div></div>
  </div>`;
}

function htmlFooter() {
  return `
  <footer class="mi-footer">
    <div class="container">
      <h2 style="color: white;">Síguenos en:</h2>
      <a href="https://www.instagram.com/" target="_blank">
        <img src="img/instagram.png" alt="Instagram" width="40" height="40">
      </a>
    </div>
  </footer>`;
}

function injectCommonLayout() {
  if (document.getElementById("usuarioModal")) return; // ya inyectado
  document.body.insertAdjacentHTML("afterbegin", htmlNavbar() + htmlModales());
  document.body.insertAdjacentHTML("beforeend", htmlFooter());
  controlarModalUsuario(); // adapta el modal al estado de sesión
}

/* ============================
   2) Regiones / Comunas (Registro)
   ============================ */
const comunasPorRegion = {
  "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
  "Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
  "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
  "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Huasco", "Freirina", "Alto del Carmen"],
  "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
  "Valparaíso": ["Valparaíso", "Viña del Mar", "Concón", "Quintero", "Puchuncaví", "Casablanca", "Juan Fernández", "Isla de Pascua", "San Antonio", "Cartagena", "El Quisco", "El Tabo", "Algarrobo", "Santo Domingo", "San Felipe", "Llaillay", "Catemu", "Panquehue", "Putaendo", "Santa María", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "Quillota", "La Cruz", "La Calera", "Hijuelas", "Nogales", "Petorca", "La Ligua", "Cabildo", "Zapallar", "Papudo", "Quilpué", "Villa Alemana", "Limache", "Olmué"],
  "Región Metropolitana": ["Santiago","Cerrillos","Cerro Navia","Conchalí","El Bosque","Estación Central","Huechuraba","Independencia","La Cisterna","La Florida","La Granja","La Pintana","La Reina","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipú","Ñuñoa","Pedro Aguirre Cerda","Peñalolén","Providencia","Pudahuel","Quilicura","Quinta Normal","Recoleta","Renca","San Joaquín","San Miguel","San Ramón","Vitacura","Colina","Lampa","Tiltil","Puente Alto","Pirque","San José de Maipo","San Bernardo","Buin","Paine","Calera de Tango","Melipilla","Alhué","Curacaví","María Pinto","San Pedro","Talagante","El Monte","Isla de Maipo","Padre Hurtado","Peñaflor"],
  "O’Higgins": ["Rancagua","Machalí","Graneros","Mostazal","Codegua","Coinco","Coltauco","Doñihue","Las Cabras","Malloa","Olivar","Peumo","Pichidegua","Quinta de Tilcoco","Rengo","Requínoa","San Vicente","Pichilemu","Marchigüe","La Estrella","Litueche","Navidad","Paredones","San Fernando","Chimbarongo","Nancagua","Palmilla","Peralillo","Placilla","Pumanque","Santa Cruz"],
  "Maule": ["Talca","Constitución","Curepto","Empedrado","Maule","Pencahue","Río Claro","San Clemente","San Rafael","Linares","Colbún","Longaví","Parral","Retiro","Villa Alegre","Yerbas Buenas","Curicó","Hualañé","Licantén","Molina","Rauco","Romeral","Sagrada Familia","Teno","Vichuquén","Cauquenes","Chanco","Pelluhue"],
  "Ñuble": ["Chillán","Chillán Viejo","Coihueco","Pinto","San Ignacio","El Carmen","Pemuco","Yungay","Quillón","San Nicolás","Bulnes","Quirihue","Cobquecura","Ninhue","Portezuelo","Ránquil","Trehuaco","Coelemu"],
  "Biobío": ["Concepción","Talcahuano","Hualpén","San Pedro de la Paz","Chiguayante","Penco","Tomé","Florida","Hualqui","Santa Juana","Coronel","Lota","Los Ángeles","Cabrero","Laja","San Rosendo","Yumbel","Alto Biobío","Mulchén","Nacimiento","Negrete","Quilaco","Quilleco","Santa Bárbara","Tucapel","Antuco","Arauco","Cañete","Contulmo","Curanilahue","Lebu","Los Álamos","Tirúa"],
  "La Araucanía": ["Temuco","Padre Las Casas","Lautaro","Perquenco","Vilcún","Cunco","Melipeuco","Curarrehue","Pucón","Villarrica","Freire","Gorbea","Toltén","Loncoche","Teodoro Schmidt","Carahue","Nueva Imperial","Saavedra","Cholchol","Angol","Renaico","Collipulli","Ercilla","Los Sauces","Purén","Lumaco","Traiguén","Victoria","Lonquimay","Curacautín","Galvarino"],
  "Los Ríos": ["Valdivia","Corral","Lanco","Los Lagos","Máfil","Mariquina","Paillaco","Panguipulli","La Unión","Futrono","Lago Ranco","Río Bueno"],
  "Los Lagos": ["Puerto Montt","Puerto Varas","Llanquihue","Frutillar","Los Muermos","Calbuco","Maullín","Cochamó","Osorno","San Pablo","Puyehue","Río Negro","Purranque","San Juan de la Costa","Castro","Ancud","Chonchi","Dalcahue","Puqueldón","Queilén","Quellón","Quemchi","Quinchao","Chaitén","Futaleufú","Hualaihué","Palena"],
  "Aysén": ["Coyhaique","Aysén","Cisnes","Guaitecas","Lago Verde","Cochrane","O’Higgins","Tortel","Chile Chico","Río Ibáñez"],
  "Magallanes y la Antártica": ["Punta Arenas","Laguna Blanca","Río Verde","San Gregorio","Natales","Torres del Paine","Porvenir","Primavera","Timaukel","Cabo de Hornos","Antártica"]
};

function cargarRegiones(regionSelectId, comunaSelectId) {
  const regionSelect = document.getElementById(regionSelectId);
  const comunaSelect = document.getElementById(comunaSelectId);
  if (!regionSelect || !comunaSelect) return;

  regionSelect.innerHTML = '<option value="">Selecciona una región</option>';
  Object.keys(comunasPorRegion).forEach(region => {
    const opt = document.createElement('option');
    opt.value = region;
    opt.textContent = region;
    regionSelect.appendChild(opt);
  });

  regionSelect.addEventListener('change', () => {
    const region = regionSelect.value;
    comunaSelect.innerHTML = '<option value="">Selecciona una comuna</option>';
    comunaSelect.disabled = true;

    if (region && comunasPorRegion[region]) {
      comunasPorRegion[region].forEach(comuna => {
        const opt = document.createElement('option');
        opt.value = comuna;
        opt.textContent = comuna;
        comunaSelect.appendChild(opt);
      });
      comunaSelect.disabled = false;
    }
  });
}

/* ============================
   3) Usuarios / Sesión
   ============================ */
function crearAdminPorDefecto() {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const existeAdmin = usuarios.some(u => u.permiso === 0);
  if (!existeAdmin) {
    usuarios.push({
      nombre: "Administrador",
      email: "admin@tienda.cl",
      password: "admin123",
      telefono: "000000000",
      region: "Región Metropolitana",
      comuna: "Santiago",
      permiso: 0
    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
}

function esAdmin() {
  const usuario = JSON.parse(sessionStorage.getItem("usuarioActivo") || "null");
  return !!(usuario && usuario.permiso === 0);
}

function controlarModalUsuario() {
  const modalBody = document.querySelector("#usuarioModal .modal-body");
  if (!modalBody) return;

  const usuarioActivo = JSON.parse(sessionStorage.getItem("usuarioActivo") || "null");
  if (usuarioActivo) {
    modalBody.innerHTML = `
      <p class="text-center"><strong>Hola, ${usuarioActivo.nombre || usuarioActivo.email}</strong></p>
      <p class="text-center">Sesión iniciada con: <em>${usuarioActivo.email}</em></p>
      <button class="btn btn-danger btn-sm d-block mx-auto mt-3" onclick="cerrarSesion()">Cerrar sesión</button>
    `;
  } else {
    modalBody.innerHTML = `
      <h3>Inicia sesión o registrate.</h3>
      <button class="btn btn-sm w-50 d-block mx-auto mb-2 button1" onclick="window.location.href='Login.html'">Iniciar sesión</button>
      <button class="btn btn-sm w-50 d-block mx-auto button2" onclick="window.location.href='Registro.html'">Regístrate</button>
    `;
  }
}

function cerrarSesion() {
  sessionStorage.removeItem("usuarioActivo");
  window.location.href = "Login.html";
}

/* Validaciones (registro) */
function esEmailValido(email) {
  const re = /^[^\s@]+@[^\s@]+\.(com|cl)$/i;
  return re.test((email || "").trim());
}
function esPasswordValida(pass) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&.#_-]{8,}$/;
  return re.test(pass || "");
}
function esTelefonoValido(fono) {
  const re = /^\d{9,11}$/;
  return re.test((fono || "").trim());
}

/* Helpers visuales (Bootstrap) */
function setError(id, msg) {
  const input = document.getElementById(id);
  const fb = document.getElementById(`err-${id}`);
  if (!input || !fb) return;
  input.classList.add("is-invalid");
  fb.textContent = msg || "Campo inválido";
}
function clearError(id) {
  const input = document.getElementById(id);
  const fb = document.getElementById(`err-${id}`);
  if (!input || !fb) return;
  input.classList.remove("is-invalid");
  fb.textContent = "";
}
function bindLiveClear(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener("input", () => clearError(id));
  el.addEventListener("change", () => clearError(id));
}

/* Registro validado */
function initRegistroValidado(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  ["nombre","email","confirmEmail","password","confirmPassword","telefono","region","comuna"]
    .forEach(bindLiveClear);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre")?.value?.trim() || "";
    const email = document.getElementById("email")?.value?.trim() || "";
    const confirmEmail = document.getElementById("confirmEmail")?.value?.trim() || "";
    const password = document.getElementById("password")?.value || "";
    const confirmPassword = document.getElementById("confirmPassword")?.value || "";
    const telefono = document.getElementById("telefono")?.value?.trim() || "";
    const region = document.getElementById("region")?.value || "";
    const comuna = document.getElementById("comuna")?.value || "";

    ["nombre","email","confirmEmail","password","confirmPassword","telefono","region","comuna"].forEach(clearError);

    let ok = true;
    if (nombre.length < 2) { setError("nombre", "El nombre debe tener al menos 2 caracteres."); ok = false; }
    if (!esEmailValido(email)) { setError("email", "Correo inválido. Debe contener @ y terminar en .com o .cl."); ok = false; }
    if (email !== confirmEmail) { setError("confirmEmail", "Los correos no coinciden."); ok = false; }
    if (!esPasswordValida(password)) { setError("password", "Mínimo 8 caracteres, con mayúscula, minúscula y número."); ok = false; }
    if (password !== confirmPassword) { setError("confirmPassword", "Las contraseñas no coinciden."); ok = false; }
    if (telefono && !esTelefonoValido(telefono)) { setError("telefono", "El teléfono debe tener entre 9 y 11 dígitos."); ok = false; }
    if (!region) { setError("region", "Selecciona una región."); ok = false; }
    if (!comuna) { setError("comuna", "Selecciona una comuna."); ok = false; }

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const existe = usuarios.some(u => (u.email || "").toLowerCase() === email.toLowerCase());
    if (existe) { setError("email", "Este correo ya está registrado."); ok = false; }

    if (!ok) return;

    usuarios.push({ nombre, email, password, telefono, region, comuna, permiso: 1 });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado correctamente.");
    form.reset();
    const selComuna = document.getElementById("comuna");
    if (selComuna) selComuna.disabled = true;
    window.location.href = "Login.html";
  });
}

/* Mostrar/ocultar ítem Admin del navbar */
function toggleAdminNav() {
  const li = document.getElementById("navAdmin");
  if (!li) return;
  esAdmin() ? li.classList.remove("d-none") : li.classList.add("d-none");
}

/* ============================
   4) Productos (persistencia)
   ============================ */
const KEY_PRODS = "productos";

// Catálogo inicial (se usa una sola vez, si no hay nada en localStorage)
const initialProductos = [
  { id: 1,  nombre: "Polera Iron Maiden",      descripcion: "Polera con diseño de Iron Maiden.",                      precio: 8000,  tallas: ["S","M"],     colores: ["Negro"], material: "100% algodón", imagen: "img/PoleraIron.jpg",   categoria: "Poleras" },
  { id: 2,  nombre: "Polera Slipknot",         descripcion: "Polera de Slipknot con detalles de metal.",              precio: 15990, tallas: ["S","M"],     colores: ["Negro"], material: "Poliéster",     imagen: "img/PoleraSlip.jpg",   categoria: "Poleras" },
  { id: 3,  nombre: "Polera The Misfits",      descripcion: "Polera con diseño de The Misfits",                       precio: 25990, tallas: ["S","M"],     colores: ["Negro"], material: "100% algodón",  imagen: "img/PoleraMis.jpg",    categoria: "Poleras" },
  { id: 4,  nombre: "Polera Esqueleto",        descripcion: "Polera halter con diseño de The Misfits",                precio: 10000, tallas: ["S","M","L"], colores: ["Negro"], material: "Poliester",     imagen: "img/PoleraCost.jpg",   categoria: "Poleras" },
  { id: 5,  nombre: "Falda Murcielagos",       descripcion: "Falda negra con estampado de murcielagos.",              precio: 11000, tallas: ["S","M","L"], colores: ["Negro"], material: "Algodón",       imagen: "img/FaldaMur.jpg",     categoria: "Faldas" },
  { id: 6,  nombre: "Falda Amon Amarth",       descripcion: "Falda negra con estampado de la banda Amon Amarth.",     precio: 11000, tallas: ["S","M","L"], colores: ["Negro"], material: "100% algodón",  imagen: "img/FaldaAmon.jpg",    categoria: "Faldas" },
  { id: 7,  nombre: "Falda Distubed",          descripcion: "Falda negra con estampado de la banda Disturbed.",       precio: 9000,  tallas: ["S","M"],     colores: ["Negro"], material: "Poliéster",     imagen: "img/FaldaDis.png",     categoria: "Faldas" },
  { id: 8,  nombre: "Falda Baphomet",          descripcion: "Flada negra con estampado de la banda Baphomet",         precio: 12000, tallas: ["S","M","L"], colores: ["Negro"], material: "Algodón",       imagen: "img/FaldaBap.png",     categoria: "Faldas" },
  { id: 9,  nombre: "Calza Baphometh",         descripcion: "Calza negra con estampado de la banda Baphometh",        precio: 10000, tallas: ["S","M","L"], colores: ["Negro"], material: "Poliéster",     imagen: "img/CalzaBap.jpg",     categoria: "Calzas" },
  { id: 10, nombre: "Calza Cadenas",           descripcion: "Calza negra con estampado de cadenas",                   precio: 10000, tallas: ["S","M"],     colores: ["Negro"], material: "Poliéster",     imagen: "img/CalzaCade.png",    categoria: "Calzas" },
  { id: 11, nombre: "Calza Nargaroth",         descripcion: "Calza con estampado de banda Nargaroth",                 precio: 10000, tallas: ["S","M","L"], colores: ["Negro"], material: "Algodón",       imagen: "img/CalzaNar.png",     categoria: "Calzas" },
  { id: 12, nombre: "Calza Baphometh latex",   descripcion: "Calza negra con estampado de Baphometh",                 precio: 10000, tallas: ["M"],         colores: ["Negro"], material: "Latex",         imagen: "img/CalzaBap2.png",    categoria: "Calzas" },
  { id: 13, nombre: "Chocker cruz",            descripcion: "Chocker de cruz con encaje",                             precio: 5000,  tallas: ["Standar"],   colores: ["Negro"], material: "Cuero sintetico", imagen: "img/ChokerCruz.jpg",  categoria: "Accesorios" },
  { id: 14, nombre: "Arnes Estrella",          descripcion: "Arnes elasticado con cadenas",                           precio: 10000, tallas: ["Standar"],   colores: ["Negro"], material: "elástico grueso", imagen: "img/Arnes1.jpg",      categoria: "Accesorios" },
  { id: 15, nombre: "Chocker calavera",        descripcion: "Chocker negro de calavera y cadenas",                    precio: 5000,  tallas: ["Standar"],   colores: ["Negro"], material: "Cuero sintetico", imagen: "img/ChockerCalavera.jpg", categoria: "Accesorios" },
  { id: 16, nombre: "Cinturon baphomet",       descripcion: "Cinturon negro con cadenas de baphomet",                 precio: 12000, tallas: ["Standar"],   colores: ["Negro"], material: "Cuero sintetico", imagen: "img/Cinturon.jpg",   categoria: "Accesorios" }
];

function getProductos() {
  let arr = JSON.parse(localStorage.getItem(KEY_PRODS) || "null");
  if (!Array.isArray(arr) || arr.length === 0) {
    arr = initialProductos.slice();
    setProductos(arr);
  }
  return arr;
}
function setProductos(list) {
  localStorage.setItem(KEY_PRODS, JSON.stringify(list || []));
}

/* ============================
   5) Render catálogos (cards + modals)
   ============================ */
function crearCard(prod) {
  return `
    <div class="col-md-3 mb-5">
      <div class="card h-100 position-relative">
        
        <!-- Contenedor que abre el modal -->
        <div role="button" data-bs-toggle="modal" data-bs-target="#modal${prod.id}">
          <img class="card-img-top" src="${prod.imagen}" alt="${prod.nombre}">
          <div class="card-body text-center">
            <h2 class="card-title">${prod.nombre}</h2>
            <h3 class="card-text">${prod.descripcion}</h3>
            <p class="fw-bold">$${prod.precio.toLocaleString()} CLP</p>
          </div>
        </div>

        <!-- Botón independiente que NO abre modal -->
        <div class="card-footer bg-transparent border-0 text-center p-2">
          <button class="btn btn-sm button2"
                  onclick="agregarAlCarrito(${prod.id});">
             Agregar al carrito
          </button>
        </div>
      </div>
    </div>`;
}




function crearModal(prod) {
  return `
    <div class="modal fade" id="modal${prod.id}" tabindex="-1" aria-labelledby="tituloModal${prod.id}" aria-hidden="true">
      <div class="modal-dialog modal-lg"><div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="tituloModal${prod.id}">${prod.nombre}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <img src="${prod.imagen}" class="img-fluid mb-3" alt="${prod.nombre}">
          <p><strong>Precio:</strong> $${Number(prod.precio||0).toLocaleString()} CLP</p>
          <p><strong>Tallas disponibles:</strong> ${Array.isArray(prod.tallas) ? prod.tallas.join(", ") : "-"}</p>
          <p><strong>Colores disponibles:</strong> ${Array.isArray(prod.colores) ? prod.colores.join(", ") : "-"}</p>
          <p><strong>Material:</strong> ${prod.material || "-"}</p>
          <p><strong>Descripción:</strong> ${prod.descripcion || "-"}</p>
        </div>
        <div class="modal-footer">
          <button class="btn button1" data-bs-dismiss="modal">Cerrar</button>
          <button class="btn button2" onclick="agregarAlCarrito(${prod.id});" data-bs-dismiss="modal">Agregar al carrito</button>
        </div>
      </div></div>
    </div>`;
}

function renderizarProductosHome() {
  const cont = document.getElementById("contenedor-productos");
  const contModals = document.getElementById("contenedor-modals");
  if (!cont || !contModals) return;
  cont.innerHTML = "";
  contModals.innerHTML = "";
  const data = getProductos();
  data.slice(-4).forEach(p => {
    cont.insertAdjacentHTML("beforeend", crearCard(p));
    contModals.insertAdjacentHTML("beforeend", crearModal(p));
  });
}

function renderizarProductosPorCategoria(categoria) {
  const cont = document.getElementById("contenedor-productos");
  const contModals = document.getElementById("contenedor-modals");
  if (!cont || !contModals) return;
  cont.innerHTML = "";
  contModals.innerHTML = "";
  const data = getProductos();
  const lista = categoria === "Todos" ? data : data.filter(p => p.categoria === categoria);
  lista.forEach(p => {
    cont.insertAdjacentHTML("beforeend", crearCard(p));
    contModals.insertAdjacentHTML("beforeend", crearModal(p));
  });
}

/* ============================
   6) Carrito de compras
   ============================ */
const KEY_CARRITO = "carrito";

function obtenerCarrito() {
  return JSON.parse(localStorage.getItem(KEY_CARRITO) || "[]");
}
function guardarCarrito(carrito) {
  localStorage.setItem(KEY_CARRITO, JSON.stringify(carrito));
  actualizarBadgeCarrito();
}
function formatoCLP(num) {
  try { return Number(num || 0).toLocaleString("es-CL"); }
  catch { return num; }
}

function agregarAlCarrito(id, { talla = null, color = null, cantidad = 1 } = {}) {
  const prod = getProductos().find(p => p.id === id);
  if (!prod) { alert("Producto no encontrado."); return; }

  const carrito = obtenerCarrito();
  const idx = carrito.findIndex(i =>
    i.id === id &&
    (i.talla || null) === (talla || null) &&
    (i.color || null) === (color || null)
  );

  if (idx >= 0) {
    carrito[idx].cantidad += cantidad;
  } else {
    carrito.push({ id, talla, color, cantidad });
  }

  guardarCarrito(carrito);
  renderizarCarritoModal();
}

function cambiarCantidadCarrito(id, talla, color, nuevaCantidad) {
  const carrito = obtenerCarrito();
  const idx = carrito.findIndex(i =>
    i.id === id &&
    (i.talla || null) === (talla || null) &&
    (i.color || null) === (color || null)
  );
  if (idx < 0) return;

  const q = Number(nuevaCantidad);
  if (q <= 0 || Number.isNaN(q)) {
    carrito.splice(idx, 1);
  } else {
    carrito[idx].cantidad = q;
  }

  guardarCarrito(carrito);
  renderizarCarritoModal();
}

function quitarDelCarrito(id, talla, color) {
  const carrito = obtenerCarrito().filter(i =>
    !(i.id === id &&
      (i.talla || null) === (talla || null) &&
      (i.color || null) === (color || null))
  );
  guardarCarrito(carrito);
  renderizarCarritoModal();
}

function calcularTotalCarrito() {
  const carrito = obtenerCarrito();
  const prods = getProductos();
  return carrito.reduce((acc, item) => {
    const prod = prods.find(p => p.id === item.id);
    if (!prod) return acc;
    return acc + (prod.precio * item.cantidad);
  }, 0);
}

function actualizarBadgeCarrito() {
  const badge = document.getElementById("cartCount");
  if (!badge) return;
  const carrito = obtenerCarrito();
  const totalItems = carrito.reduce((acc, i) => acc + (i.cantidad || 0), 0);
  badge.textContent = totalItems > 99 ? "99+" : String(totalItems || 0);
  badge.classList.toggle("d-none", totalItems === 0);
}

function renderizarCarritoModal() {
  const modalBody = document.querySelector("#carritoModal .modal-body");
  const modalFooter = document.querySelector("#carritoModal .modal-footer");
  if (!modalBody) return;

  const carrito = obtenerCarrito();
  const prods = getProductos();

  if (!carrito.length) {
    modalBody.innerHTML = `<h3>No hay productos en el carrito.</h3>`;
    if (modalFooter) {
      modalFooter.innerHTML = `
        <button type="button" class="btn button2" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn button1" disabled>Ir al pago</button>
      `;
    }
    actualizarBadgeCarrito();
    return;
  }

  let html = `<div class="list-group">`;
  carrito.forEach(item => {
    const prod = prods.find(p => p.id === item.id);
    if (!prod) return;
    html += `
      <div class="list-group-item d-flex align-items-center">
        <img src="${prod.imagen}" alt="${prod.nombre}" style="width:64px;height:64px;object-fit:cover;" class="me-3 rounded">
        <div class="flex-grow-1">
          <div class="fw-semibold">${prod.nombre}</div>
          <div class="small text-muted">
            ${item.talla ? `Talla: ${item.talla} · ` : ""}${item.color ? `Color: ${item.color} · ` : ""}Precio: $${formatoCLP(prod.precio)}
          </div>
          <div class="d-flex align-items-center mt-2" style="gap:.5rem;">
            <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidadCarrito(${item.id}, ${item.talla ? `'${item.talla}'` : null}, ${item.color ? `'${item.color}'` : null}, ${item.cantidad - 1})">-</button>
            <input type="number" min="1" class="form-control form-control-sm" style="width:80px;"
                   value="${item.cantidad}"
                   onchange="cambiarCantidadCarrito(${item.id}, ${item.talla ? `'${item.talla}'` : null}, ${item.color ? `'${item.color}'` : null}, this.value)">
            <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidadCarrito(${item.id}, ${item.talla ? `'${item.talla}'` : null}, ${item.color ? `'${item.color}'` : null}, ${item.cantidad + 1})">+</button>

            <button class="btn btn-sm btn-outline-danger ms-2"
              onclick="quitarDelCarrito(${item.id}, ${item.talla ? `'${item.talla}'` : null}, ${item.color ? `'${item.color}'` : null})">
              Quitar
            </button>
          </div>
        </div>
        <div class="ms-3 fw-semibold">$${formatoCLP(prod.precio * item.cantidad)}</div>
      </div>
    `;
  });
  html += `</div>`;

  const total = calcularTotalCarrito();
  html += `
    <div class="d-flex justify-content-end mt-3">
      <h4>Total: $${formatoCLP(total)} CLP</h4>
    </div>
  `;

  modalBody.innerHTML = html;

  if (modalFooter) {
    modalFooter.innerHTML = `
      <button type="button" class="btn button2" data-bs-dismiss="modal">Seguir comprando</button>
      <button type="button" class="btn button1" onclick="irAlPago()">Ir al pago</button>
    `;
  }

  actualizarBadgeCarrito();
}

function irAlPago() {
  alert("Flujo de pago pendiente de implementar.");
}

function initCarrito() {
  actualizarBadgeCarrito();
  const carritoModal = document.getElementById("carritoModal");
  if (carritoModal) {
    carritoModal.addEventListener("show.bs.modal", () => {
      renderizarCarritoModal();
    });
  }
}

/* ============================
   7) Admin: CRUD productos
   ============================ */

/** Inyecta (si no existe) el modal de crear/editar producto */
function ensureAdminModal() {
  if (document.getElementById("modalProductoAdmin")) return;

  const html = `
  <div class="modal fade" id="modalProductoAdmin" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered"><div class="modal-content">
      <div class="modal-header">
        <h2 class="modal-title">Producto</h2>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body">
        <form id="formProducto">
          <input type="hidden" id="prodId">

          <div class="row g-3">
            <div class="col-md-6">
              <label class="form-label">Nombre</label>
              <input id="prodNombre" class="form-control" required>
            </div>
            <div class="col-md-3">
              <label class="form-label">Precio (CLP)</label>
              <input id="prodPrecio" type="number" min="0" class="form-control" required>
            </div>
            <div class="col-md-3">
              <label class="form-label">Categoría</label>
              <select id="prodCategoria" class="form-select" required>
                <option value="">Selecciona</option>
                <option>Poleras</option>
                <option>Calzas</option>
                <option>Faldas</option>
                <option>Accesorios</option>
              </select>
            </div>

            <div class="col-md-6">
              <label class="form-label">Tallas (separadas por coma)</label>
              <input id="prodTallas" class="form-control" placeholder="S, M, L">
            </div>
            <div class="col-md-6">
              <label class="form-label">Colores (separados por coma)</label>
              <input id="prodColores" class="form-control" placeholder="Negro, Blanco">
            </div>

            <div class="col-md-12">
              <label class="form-label">Material</label>
              <input id="prodMaterial" class="form-control">
            </div>

            <div class="col-md-12">
              <label class="form-label">Descripción</label>
              <textarea id="prodDescripcion" rows="3" class="form-control"></textarea>
            </div>

            <div class="col-md-12">
              <label class="form-label">URL Imagen</label>
              <input id="prodImagen" class="form-control" placeholder="img/archivo.jpg">
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancelar</button>
        <button class="btn button1" id="btnGuardarProd">Guardar</button>
      </div>
    </div></div>
  </div>`;

  document.body.insertAdjacentHTML("beforeend", html);

  // Bind de guardar
  document.getElementById("btnGuardarProd")?.addEventListener("click", adminGuardarProducto);
}

/** Abre modal vacío (crear) */
function adminAbrirCrear() {
  ensureAdminModal();
  const f = document.getElementById("formProducto");
  if (!f) return;

  f.reset();
  document.getElementById("prodId").value = "";
  const modal = new bootstrap.Modal(document.getElementById("modalProductoAdmin"));
  modal.show();
}

/** Abre modal con datos (editar) */
function adminAbrirEditar(id) {
  ensureAdminModal();
  const prods = getProductos();
  const p = prods.find(x => x.id === Number(id));
  if (!p) { alert("Producto no encontrado"); return; }

  document.getElementById("prodId").value = p.id;
  document.getElementById("prodNombre").value = p.nombre || "";
  document.getElementById("prodPrecio").value = p.precio || 0;
  document.getElementById("prodCategoria").value = p.categoria || "";
  document.getElementById("prodTallas").value = Array.isArray(p.tallas) ? p.tallas.join(", ") : "";
  document.getElementById("prodColores").value = Array.isArray(p.colores) ? p.colores.join(", ") : "";
  document.getElementById("prodMaterial").value = p.material || "";
  document.getElementById("prodDescripcion").value = p.descripcion || "";
  document.getElementById("prodImagen").value = p.imagen || "";

  const modal = new bootstrap.Modal(document.getElementById("modalProductoAdmin"));
  modal.show();
}

/** Guardar (crear o actualizar) */
function adminGuardarProducto() {
  const id = document.getElementById("prodId").value.trim();
  const nombre = document.getElementById("prodNombre").value.trim();
  const precio = Number(document.getElementById("prodPrecio").value || 0);
  const categoria = document.getElementById("prodCategoria").value.trim();
  const tallas = (document.getElementById("prodTallas").value || "")
                    .split(",").map(s => s.trim()).filter(Boolean);
  const colores = (document.getElementById("prodColores").value || "")
                    .split(",").map(s => s.trim()).filter(Boolean);
  const material = document.getElementById("prodMaterial").value.trim();
  const descripcion = document.getElementById("prodDescripcion").value.trim();
  const imagen = document.getElementById("prodImagen").value.trim();

  if (!nombre || !precio || !categoria) {
    alert("Por favor completa al menos Nombre, Precio y Categoría.");
    return;
  }

  let prods = getProductos();
  if (id) {
    // editar
    const idx = prods.findIndex(p => p.id === Number(id));
    if (idx < 0) { alert("No se encontró el producto para editar."); return; }
    prods[idx] = {
      ...prods[idx],
      nombre, precio, categoria, tallas, colores, material, descripcion, imagen
    };
  } else {
    // crear
    const nextId = prods.length ? Math.max(...prods.map(x => x.id)) + 1 : 1;
    prods.push({ id: nextId, nombre, precio, categoria, tallas, colores, material, descripcion, imagen });
  }
  setProductos(prods);

  // Cierra modal
  bootstrap.Modal.getInstance(document.getElementById("modalProductoAdmin"))?.hide();

  // Si la página tiene tabla admin, pide que se repinte
  if (typeof renderTablaAdminProductos === "function") {
    renderTablaAdminProductos();
  }

  // Si es una página de catálogo, repintar también
  if (document.getElementById("contenedor-productos")) {
    // detecta si hay categoría en el título
    const h1 = document.querySelector("h1");
    const titulo = h1 ? (h1.textContent || "").toLowerCase() : "";
    if (titulo.includes("poleras")) renderizarProductosPorCategoria("Poleras");
    else if (titulo.includes("calzas")) renderizarProductosPorCategoria("Calzas");
    else if (titulo.includes("faldas")) renderizarProductosPorCategoria("Faldas");
    else if (titulo.includes("accesorios")) renderizarProductosPorCategoria("Accesorios");
    else if (titulo.includes("todos")) renderizarProductosPorCategoria("Todos");
    else renderizarProductosHome();
  }

  alert("Producto guardado correctamente.");
}

/** Eliminar */
function adminEliminarProducto(id) {
  if (!confirm("¿Seguro que deseas eliminar este producto?")) return;
  let prods = getProductos();
  prods = prods.filter(p => p.id !== Number(id));
  setProductos(prods);

  if (typeof renderTablaAdminProductos === "function") {
    renderTablaAdminProductos();
  }
}

/** (Opcional) Inicializaciones de UI admin adicionales */
function initAdminProductosUI() {
  ensureAdminModal();
}

/* ============================
   8) Init por página
   ============================ */
function initApp(options = {}) {
  injectCommonLayout();
  crearAdminPorDefecto();

  if (options.regionSelectId && options.comunaSelectId) {
    cargarRegiones(options.regionSelectId, options.comunaSelectId);
  }
  if (options.registroFormId) {
    initRegistroValidado(options.registroFormId);
  }

  initCarrito();
  toggleAdminNav();
  initAdminProductosUI?.();
}
