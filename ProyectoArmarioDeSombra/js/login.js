
function buscarUsuarioPorCorreo(email) {
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const e = (email || "").trim().toLowerCase();
  return usuarios.find(u => (u.email || "").trim().toLowerCase() === e) || null;
}


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


function inicioSesionFormulario(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

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

    guardarSesionActiva(usuario);

    if (recordarChk && recordarChk.checked) {
      localStorage.setItem("emailRecordado", (email || "").trim());
    } else {
      localStorage.removeItem("emailRecordado");
    }
    window.location.href = "Home.html";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  inicioSesionFormulario("loginForm");
});
