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
  const form = document.getElementById("registroForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();


    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const telefono = document.getElementById("telefono").value;
    const region = document.getElementById("region").value;
    const comuna = document.getElementById("comuna").value;


    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }


    const usuario = {
      nombre,
      email,
      password,
      telefono,
      region,
      comuna,
      permiso: 1
    };


    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

    alert("Usuario registrado y guardado en la sesión ✅");


    form.reset();


    window.location.href = "Home.html";
  });
});


// Crear usuario admin por defecto (permiso 0)

function crearAdminPorDefecto() {
  let usuarios = JSON.parse(localStorage.getItem("usuarioAdmi")) || [];

  // Verificar si ya hay un admin creado
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
    localStorage.setItem("usuarioAdmi", JSON.stringify(usuarios));
    
  }
}


