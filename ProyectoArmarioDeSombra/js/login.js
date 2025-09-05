// login.js

/**
 * Busca un usuario por correo en localStorage.
 * @param {string} email
 * @returns {object|null} usuario encontrado o null
 */
function buscarUsuarioPorCorreo(email) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const e = (email || "").trim().toLowerCase();
  return usuarios.find(u => (u.email || "").trim().toLowerCase() === e) || null;
}

/**
 * Guarda la sesión activa en sessionStorage (nombre, email, permiso).
 * @param {object} usuario
 */
function guardarSesionActiva(usuario) {
  if (!usuario) return;
  sessionStorage.setItem(
    "usuarioActivo",
    JSON.stringify({
      nombre: usuario.nombre,
      email: usuario.email,
      permiso: usuario.permiso
    })
  );
}

/**
 * Inicializa el flujo de login sobre un formulario dado por ID.
 * Maneja validación mínima, recordarme y redirección a Home.html.
 * @param {string} formId
 */
function initLogin(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  // Soporte opcional para "Recordarme": precarga si existe
  const emailInput = document.getElementById("email");
  const recordarChk = document.getElementById("Recordar");
  const emailRecordado = localStorage.getItem("emailRecordado");
  if (emailInput && emailRecordado) {
    emailInput.value = emailRecordado;
    if (recordarChk) recordarChk.checked = true;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email")?.value || "";
    const password = document.getElementById("password")?.value || "";

    if (!email || !password) {
      alert("Por favor ingresa correo y contraseña.");
      return;
    }

    const usuario = buscarUsuarioPorCorreo(email);
    if (!usuario) {
      alert("No existe un usuario con ese correo.");
      return;
    }

    if ((usuario.password || "") !== password) {
      alert("Contraseña incorrecta.");
      return;
    }

    // Guardar sesión activa
    guardarSesionActiva(usuario);

    // Recordarme (opcional)
    if (recordarChk && recordarChk.checked) {
      localStorage.setItem("emailRecordado", (email || "").trim());
    } else {
      localStorage.removeItem("emailRecordado");
    }

    // Redirigir al Home
    window.location.href = "Home.html";
  });
}

// Auto-init al cargar el documento
document.addEventListener("DOMContentLoaded", () => {
  initLogin("loginForm");
});
