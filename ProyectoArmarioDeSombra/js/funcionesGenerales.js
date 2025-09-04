const comunasPorRegion = {
  "Arica y Parinacota": [
    "Arica", "Camarones", "Putre", "General Lagos"
  ],
  "Tarapacá": [
    "Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"
  ],
  "Antofagasta": [
    "Antofagasta", "Mejillones", "Sierra Gorda", "Taltal",
    "Calama", "Ollagüe", "San Pedro de Atacama",
    "Tocopilla", "María Elena"
  ],
  "Atacama": [
    "Copiapó", "Caldera", "Tierra Amarilla",
    "Chañaral", "Diego de Almagro",
    "Vallenar", "Huasco", "Freirina", "Alto del Carmen"
  ],
  "Coquimbo": [
    "La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paihuano", "Vicuña",
    "Illapel", "Canela", "Los Vilos", "Salamanca",
    "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"
  ],
  "Valparaíso": [
    "Valparaíso", "Viña del Mar", "Concón", "Quintero", "Puchuncaví", "Casablanca", "Juan Fernández", "Isla de Pascua",
    "San Antonio", "Cartagena", "El Quisco", "El Tabo", "Algarrobo", "Santo Domingo",
    "San Felipe", "Llaillay", "Catemu", "Panquehue", "Putaendo", "Santa María",
    "Los Andes", "Calle Larga", "Rinconada", "San Esteban",
    "Quillota", "La Cruz", "La Calera", "Hijuelas", "Nogales",
    "Petorca", "La Ligua", "Cabildo", "Zapallar", "Papudo",
    "Quilpué", "Villa Alemana", "Limache", "Olmué"
  ],
  "Región Metropolitana": [
    "Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia",
    "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado",
    "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura",
    "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura",
    "Colina", "Lampa", "Tiltil",
    "Puente Alto", "Pirque", "San José de Maipo",
    "San Bernardo", "Buin", "Paine", "Calera de Tango",
    "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro",
    "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"
  ],
  "O’Higgins": [
    "Rancagua", "Machalí", "Graneros", "Mostazal", "Codegua", "Coinco", "Coltauco", "Doñihue", "Las Cabras", "Malloa", "Olivar",
    "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente",
    "Pichilemu", "Marchigüe", "La Estrella", "Litueche", "Navidad", "Paredones",
    "San Fernando", "Chimbarongo", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"
  ],
  "Maule": [
    "Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pencahue", "Río Claro", "San Clemente", "San Rafael",
    "Linares", "Colbún", "Longaví", "Parral", "Retiro", "Villa Alegre", "Yerbas Buenas",
    "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén",
    "Cauquenes", "Chanco", "Pelluhue"
  ],
  "Ñuble": [
    "Chillán", "Chillán Viejo", "Coihueco", "Pinto", "San Ignacio", "El Carmen", "Pemuco", "Yungay",
    "Quillón", "San Nicolás", "Bulnes",
    "Quirihue", "Cobquecura", "Ninhue", "Portezuelo", "Ránquil", "Trehuaco", "Coelemu"
  ],
  "Biobío": [
    "Concepción", "Talcahuano", "Hualpén", "San Pedro de la Paz", "Chiguayante", "Penco", "Tomé", "Florida", "Hualqui", "Santa Juana",
    "Coronel", "Lota",
    "Los Ángeles", "Cabrero", "Laja", "San Rosendo", "Yumbel", "Alto Biobío", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "Santa Bárbara", "Tucapel", "Antuco",
    "Arauco", "Cañete", "Contulmo", "Curanilahue", "Lebu", "Los Álamos", "Tirúa"
  ],
  "La Araucanía": [
    "Temuco", "Padre Las Casas", "Lautaro", "Perquenco", "Vilcún", "Cunco", "Melipeuco", "Curarrehue", "Pucón", "Villarrica",
    "Freire", "Gorbea", "Toltén", "Loncoche", "Teodoro Schmidt", "Carahue", "Nueva Imperial", "Saavedra", "Cholchol",
    "Angol", "Renaico", "Collipulli", "Ercilla", "Los Sauces", "Purén", "Lumaco", "Traiguén", "Victoria",
    "Lonquimay", "Curacautín", "Galvarino"
  ],
  "Los Ríos": [
    "Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli",
    "La Unión", "Futrono", "Lago Ranco", "Río Bueno"
  ],
  "Los Lagos": [
    "Puerto Montt", "Puerto Varas", "Llanquihue", "Frutillar", "Los Muermos", "Calbuco", "Maullín", "Cochamó",
    "Osorno", "San Pablo", "Puyehue", "Río Negro", "Purranque", "San Juan de la Costa",
    "Castro", "Ancud", "Chonchi", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao",
    "Chaitén", "Futaleufú", "Hualaihué", "Palena"
  ],
  "Aysén": [
    "Coyhaique", "Aysén", "Cisnes", "Guaitecas", "Lago Verde",
    "Cochrane", "O’Higgins", "Tortel",
    "Chile Chico", "Río Ibáñez"
  ],
  "Magallanes y la Antártica": [
    "Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio",
    "Natales", "Torres del Paine",
    "Porvenir", "Primavera", "Timaukel",
    "Cabo de Hornos", "Antártica"
  ]
};

function cargarRegiones(regionSelectId, comunaSelectId) {
  const regionSelect = document.getElementById(regionSelectId);
  const comunaSelect = document.getElementById(comunaSelectId);

  // Poblar regiones
  regionSelect.innerHTML = '<option value="">Selecciona una región</option>';
  Object.keys(comunasPorRegion).forEach(region => {
    const opt = document.createElement('option');
    opt.value = region;
    opt.textContent = region;
    regionSelect.appendChild(opt);
  });

  // Escuchar cambios de región
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

document.addEventListener("DOMContentLoaded", () => {
  crearAdminPorDefecto();

  const form = document.getElementById("registroForm");

  if (form) {  // Evita el error de null en páginas sin formulario
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const confirmEmail = document.getElementById("confirmEmail").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const telefono = document.getElementById("telefono").value;
      const region = document.getElementById("region").value;
      const comuna = document.getElementById("comuna").value;

      // Validaciones
      if (email !== confirmEmail) {
        alert("Los correos no coinciden");
        return;
      }

      if (password !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }

      // Recuperar lista de usuarios
      let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

      // Crear usuario normal (permiso 1)
      const usuario = {
        nombre,
        email,
        password,
        telefono,
        region,
        comuna,
        permiso: 1
      };

      usuarios.push(usuario);

      // Guardar en LocalStorage
      localStorage.setItem("usuarios", JSON.stringify(usuarios));

      alert("Usuario registrado y guardado en LocalStorage ✅");
      form.reset();
      window.location.href = "Home.html";
    });
  }
});

// Crear usuario admin por defecto (permiso 0)
function crearAdminPorDefecto() {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  // Verificar si ya existe un admin
  const existeAdmin = usuarios.some(u => u.permiso === 0);

  if (!existeAdmin) {
    const admin = {
      nombre: "Administrador",
      email: "admin@tienda.cl",
      password: "admin123",
      telefono: "000000000",
      region: "Región Metropolitana",
      comuna: "Santiago",
      permiso: 0
    };

    usuarios.push(admin);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
}

const productos = [
  { id:1, nombre:"Polera Iron Maiden", descripcion:"Polera con diseño de Iron Maiden.", precio:8000, tallas:["S","M"], colores:["Negro"], material:"100% algodón", imagen:"img/PoleraIron.jpg", categoria:"Poleras" },
  { id:2, nombre:"Polera Slipknot", descripcion:"Polera de Slipknot con detalles de metal.", precio:15990, tallas:["S","M"], colores:["Negro"], material:"Poliéster", imagen:"img/PoleraSlip.jpg", categoria:"Poleras" },
  { id:3, nombre:"Polera The Misfits", descripcion:"Polera con diseño de The Misfits", precio:25990, tallas:["S","M"], colores:["Negro"], material:"100% algodón", imagen:"img/PoleraMis.jpg", categoria:"Poleras" },
  { id:4, nombre:"Polera Esqueleto", descripcion:"Polera halter con diseño de The Misfits", precio: 10000, tallas:["S","M","L"], colores:["Negro"], material:"Poliester", imagen:"img/PoleraCost.jpg", categoria:"Poleras" },
  { id:5, nombre:"Falda Murcielagos", descripcion:"Falda negra con estampado de murcielagos.", precio:11000, tallas:["S","M","L"], colores:["Negro"], material:"Algodón", imagen:"img/FaldaMur.jpg", categoria:"Faldas" },
  { id:6, nombre:"Falda Amon Amarth", descripcion:"Falda negra con estampado de la banda Amon Amarth.", precio:11000, tallas:["S","M","L"], colores:["Negro"], material:"100% algodón", imagen:"img/FaldaAmon.jpg", categoria:"Faldas" },
  { id:7, nombre:"Falda Distubed", descripcion:"Falda negra con estampado de la banda Disturbed.", precio:9000, tallas:["S","M"], colores:["Negro"], material:"Poliéster", imagen:"img/FaldaDis.png", categoria:"Faldas" },
  { id:8, nombre:"Falda Baphomet", descripcion:"Flada negra con estampado de la banda Baphomet", precio:12000, tallas:["S","M","L"], colores:["Negro"], material:"Algodón", imagen:"img/FaldaBap.png", categoria:"Faldas" },
  { id:9, nombre:"Calza Baphometh", descripcion:"Calza negra con estampado de la banda Baphometh", precio:10000, tallas:["S","M","L"], colores:["Negro"], material:"Poliéster", imagen:"img/CalzaBap.jpg", categoria:"Calzas" },
  { id:10, nombre:"Calza Cadenas", descripcion:"Calza negra con estampado de cadenas", precio:10000, tallas:["S","M"], colores:["Negro"], material:"Poliéster", imagen:"img/CalzaCade.png", categoria:"Calzas" },
  { id:11, nombre:"Calza Nargaroth", descripcion:"Calza con estampado de banda Nargaroth", precio:10000, tallas:["S","M","L"], colores:["Negro"], material:"Algodón", imagen:"img/CalzaNar.png", categoria:"Calzas" },
  { id:12, nombre:"Calza Baphometh latex", descripcion:"Calza negra con estampado de Baphometh", precio:10000, tallas:["M"], colores:["Negro"], material:"Latex", imagen:"img/CalzaBap2.png", categoria:"Calzas" },
  { id:13, nombre:"Chocker cruz", descripcion:"Chocker de cruz con encaje", precio:5000, tallas:["Standar"], colores:["Negro"], material:"Cuero sintetico", imagen:"img/ChokerCruz.jpg", categoria:"Accesorios" },
  { id:14, nombre:"Arnes Estrella", descripcion:"Arnes elasticado con cadenas", precio:10000, tallas:["Standar"], colores:["Negro"], material:"elástico grueso", imagen:"img/Arnes1.jpg", categoria:"Accesorios" },
  { id:15, nombre:"Chocker calavera", descripcion:"Chocker negro de calavera y cadenas", precio:5000, tallas:["Standar"], colores:["Negro"], material:"Cuero sintetico", imagen:"img/ChockerCalavera.jpg", categoria:"Accesorios" },
  { id:16, nombre:"Cinturon baphomet", descripcion:"Cinturon negro con cadenas de baphomet", precio:12000, tallas:["Standar"], colores:["Negro"], material:"Cuero sintetico", imagen:"img/Cinturon.jpg", categoria:"Accesorios" }
];
//Funcion  (crear card y modal)
function crearCard(prod){
  return `
    <div class="col-md-3 mb-5">
      <div class="card">
        <img class="card-img-top" src="${prod.imagen}" alt="${prod.nombre}">
        <div class="card-body text-center">
          <h2 class="card-title">${prod.nombre}</h2>
          <h3 class="card-text">${prod.descripcion}</h3>
          <button type="button" class="btn button1" data-bs-toggle="modal" data-bs-target="#modal${prod.id}">Ver más</button>
        </div>
      </div>
    </div>
  `;
}

function crearModal(prod){
  return `
    <div class="modal fade" id="modal${prod.id}" tabindex="-1" aria-labelledby="tituloModal${prod.id}" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="tituloModal${prod.id}">${prod.nombre}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <img src="${prod.imagen}" class="img-fluid mb-3" alt="${prod.nombre}">
            <p><strong>Precio:</strong> $${prod.precio.toLocaleString()} CLP</p>
            <p><strong>Tallas disponibles:</strong> ${prod.tallas.join(", ")}</p>
            <p><strong>Colores disponibles:</strong> ${prod.colores.join(", ")}</p>
            <p><strong>Material:</strong> ${prod.material}</p>
            <p><strong>Descripción:</strong> ${prod.descripcion}</p>
          </div>
          <div class="modal-footer">
            <button class="btn button1" data-bs-dismiss="modal">Cerrar</button>
            <button class="btn button2">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

//Funcion para crear card y modal en home (solo 4)
function renderizarProductosHome(productos) {
  const contenedorProductos = document.getElementById("contenedor-productos");
  const contenedorModals = document.getElementById("contenedor-modals");

  // Limpiar contenedores antes de renderizar
  contenedorProductos.innerHTML = "";
  contenedorModals.innerHTML = "";

  // Tomar solo los primeros 4 productos
  productos.slice(-4).forEach(prod => {
    // Agregar card y modal usando funciones auxiliares
    contenedorProductos.innerHTML += crearCard(prod);
    contenedorModals.innerHTML += crearModal(prod);
  });
}

function renderizarProductosPorCategoria(categoria) {
  const contenedorProductos = document.getElementById("contenedor-productos");
  const contenedorModals = document.getElementById("contenedor-modals");

  // Limpiar contenedores antes de renderizar
  contenedorProductos.innerHTML = "";
  contenedorModals.innerHTML = "";

  // Filtrar productos por categoría
  const productosFiltrados = categoria === "Todos"
    ? productos
    : productos.filter(prod => prod.categoria === categoria);

  productosFiltrados.forEach(prod => {
    contenedorProductos.innerHTML += crearCard(prod);
    contenedorModals.innerHTML += crearModal(prod);
  });
}
renderizarProductosPorCategoria("Poleras");   // Solo productos Poleras
renderizarProductosPorCategoria("Calzas");    // Solo productos Calzas
renderizarProductosPorCategoria("Faldas");    // Solo productos Faldas
renderizarProductosPorCategoria("Accesorios");// Solo productos Accesorios
renderizarProductosPorCategoria("Todos");     // Todos los productos