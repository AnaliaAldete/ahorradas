//enlases
const enlaceReportes = document.getElementById("enlace-reporte");
const enlaceBalance = document.getElementById("enlace-balance");

// secciones
const seccionBalance = document.getElementById("seccion-balance");
const seccionFiltros = document.getElementById("seccion-filtros");
const seccionOperaciones = document.getElementById("seccion-operaciones");
const seccionReportes = document.getElementById("seccion-reportes");
const containerBalanceYFiltros = document.getElementById(
	"container-balance-filtros"
);

//funcion ocultar pagina principal
const ocultarPaginaPrincipal = () => {
	containerBalanceYFiltros.style.display = "none";
	seccionOperaciones.style.display = "none";
};

//funcion para mostrar pagina principal
const mostrarPaginaPrincipal = () => {
	containerBalanceYFiltros.style.display = "flex";
	seccionOperaciones.style.display = "flex";
};

//funcion ocultar reportes
const ocultarReporte = () => {
	seccionReportes.style.display = "none";
};

//funcion mostrar reporte
const mostrarReporte = () => {
	seccionReportes.style.display = "flex";
};

//evento mostrar reportes
enlaceReportes.addEventListener("click", () => {
	ocultarPaginaPrincipal();
	mostrarReporte();
});

//evento mostrar pagina principal
enlaceBalance.addEventListener("click", () => {
	mostrarPaginaPrincipal();
	ocultarReporte();
});
