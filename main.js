const body = document.body;

// contenedores
const contenedorPrincipal = document.getElementById("contenedor-principal");
const contenedorImgOperaciones = document.getElementById(
	"contenedor-img-operaciones"
);
const contenedorTablaOperaciones = document.getElementById(
	"contenedor-tabla-operaciones"
);

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
const seccionNuevaOperacion = document.getElementById(
	"seccion-nueva-operacion"
);
const seccionEditar = document.getElementById("seccion-editar");

//botones
const btnMenuHamburguesa = document.getElementById("btn-menu-hamburguesa");
const btnOperacion = document.getElementById("btn-operacion");
const btnCancelarNueva = document.getElementById("btn-cancelar--nueva");
const btnCancelarEditar = document.getElementById("btn-cancelar--editar");
const btnModoOscuro = document.getElementById("btn-modo-oscuro");
const btnAgregarOperacion = document.getElementById("btn-agregar-operacion");

//menues
const menuNav = document.getElementById("menu-nav");

//iconos
const iconoHamburguesa = document.getElementById("icono-hamburguesa");
const iconoX = document.getElementById("icono-x");

// Funcionalidad menú hamburguesa
btnMenuHamburguesa.addEventListener("click", () => {
	menuNav.classList.toggle("hidden");
	iconoHamburguesa.classList.toggle("hidden");
	iconoX.classList.toggle("hidden");
});

// funcion para aparecer y desaparecer secciones
const mostrarSeccion = (contenedor, contenedor2, contenedor3, seccion) => {
	contenedor.style.display = "none";
	contenedor2.style.display = "none";
	contenedor3.style.display = "none";
	seccion.style.display = "flex";
};

// prettier-ignore
enlaceBalance.addEventListener("click", () => mostrarSeccion(seccionCategoria, seccionReportes, seccionNuevaOperacion, contenedorPrincipal));
// prettier-ignore
enlaceCategoria.addEventListener("click", () => mostrarSeccion( contenedorPrincipal, seccionReportes, seccionNuevaOperacion, seccionCategoria));
// prettier-ignore
enlaceReportes.addEventListener("click", () => mostrarSeccion(contenedorPrincipal,seccionCategoria,seccionNuevaOperacion,seccionReportes));
// prettier-ignore
btnOperacion.addEventListener("click", () => mostrarSeccion( contenedorPrincipal, seccionCategoria, seccionReportes, seccionNuevaOperacion));

// funcion para aparecer y desaparecer nueva operacion
const mostrasTablaOperaciones = () => {
	seccionNuevaOperacion.style.display = "none";
	contenedorPrincipal.style.display = "flex";
	contenedorImgOperaciones.style.display = "none";
	contenedorTablaOperaciones.classList.remove("hidden");
};

btnAgregarOperacion.addEventListener("click", mostrasTablaOperaciones);

//funcionalidad del modo oscuro
btnModoOscuro.addEventListener("click", () => {
	body.classList.toggle("dark");
});

// funcion para botones cancelar
const cancelar = (contenedor, seccion) => {
	contenedor.style.display = "none";
	seccion.style.display = "flex";
};

btnCancelarNueva.addEventListener("click", () =>
	cancelar(seccionNuevaOperacion, contenedorPrincipal)
);
btnCancelarEditar.addEventListener("click", () =>
	cancelar(seccionEditar, seccionCategoria)
);
