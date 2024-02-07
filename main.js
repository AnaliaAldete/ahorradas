// contenedores
const contenedorPrincipal = document.getElementById("contenedor-principal");

//enlases
const enlaceReportes = document.getElementById("enlace-reporte");
const enlaceBalance = document.getElementById("enlace-balance");
const enlaceCategoria = document.getElementById("enlace-categoria");

// secciones
const seccionBalance = document.getElementById("seccion-balance"); //no usada por el momento
const seccionFiltros = document.getElementById("seccion-filtros"); //no usada por el momento
const seccionOperaciones = document.getElementById("seccion-operaciones"); //no usada por el momento
const containerBalanceYFiltros = document.getElementById(
	"container-balance-filtros"
); //no usada por el momento
const seccionCategoria = document.getElementById("seccion-categoria");
const seccionReportes = document.getElementById("seccion-reportes");

//botones
const btnMenuHamburguesa = document.getElementById("btn-menu-hamburguesa");

//menues
const menuNav = document.getElementById("menu-nav");

//iconos
const iconoHamburguesa = document.getElementById("icono-hamburguesa");
const iconoX = document.getElementById("icono-x");

// Funcionalidad menú hamburguesa
btnMenuHamburguesa.addEventListener("click", () => {
	menuNav.classList.toggle("hidden");
	menuNav.classList.toggle("flex");
	iconoHamburguesa.classList.toggle("hidden");
	iconoX.classList.toggle("hidden");
});

// funcion para aparecer y desaparecer secciones
const mostrarSeccion = (contenedor, contenedor2, seccion) => {
	contenedor.style.display = "none";
	contenedor2.style.display = "none";
	seccion.style.display = "flex";
};

enlaceBalance.addEventListener("click", () =>
	mostrarSeccion(seccionCategoria, seccionReportes, contenedorPrincipal)
);
enlaceCategoria.addEventListener("click", () =>
	mostrarSeccion(contenedorPrincipal, seccionReportes, seccionCategoria)
);
enlaceReportes.addEventListener("click", () =>
	mostrarSeccion(contenedorPrincipal, seccionCategoria, seccionReportes)
);
