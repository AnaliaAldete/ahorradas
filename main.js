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
	if (body.classList.toggle("dark")) {
		btnModoOscuro.innerHTML = `<i class="fa-regular fa-sun text-gray-800 text-lg"></i>`;
	} else {
		btnModoOscuro.innerHTML = `<i class="fas fa-moon text-gray-800 text-lg"></i>`;
	}
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

//desde aqui probando local storage

//imputs y select
const inputDescripcion = document.getElementById("input-descripcion");
const inputMonto = document.getElementById("input-monto");
const selectTipo = document.getElementById("select-tipo"); //no usada por el momento
const selectCategoria = document.getElementById("select-categoria");
const inputFecha = document.getElementById("input-fecha");

const datos = [
	{
		id: uuidv4(),
		descripcion: inputDescripcion.value,
		monto: inputMonto.value,
		categoria: selectCategoria.value,
		fecha: inputFecha.value,
	},
];

//pushear a datos los objetos obtenidos de los imputs

let operacionesGuardadas;
const evaluarLocalStorage = () => {
	if (localStorage.getItem("operaciones") !== null) {
		operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));
		datos.push(operacionesGuardadas);
		return operacionesGuardadas;
	} else {
		localStorage.setItem("operaciones", JSON.stringify(datos));
	}
	generarTabla();
};

const generarTabla = () => {
	const cuerpoTablaOperaciones = document.getElementById(
		"cuerpo-tabla-operaciones"
	);
	cuerpoTablaOperaciones.innerHTML = "";
	if (evaluarLocalStorage()) {
		for (let operacion of evaluarLocalStorage()) {
			cuerpoTablaOperaciones.innerHTML += `
            <div class="flex text-center">
				<div class="flex-1 py-2 border-b border-r border-gray-300"><span>${operacion.descripcion}</span></div>
				<div class="flex-1 py-2 border-b border-r border-gray-300"><span>${operacion.monto}</span></div>
				<div class="flex-1 py-2 border-b border-r border-gray-300"><span>${operacion.categoria}</span></div>
				<div class="flex-1 py-2 border-b border-r border-gray-300"><span>${operacion.fecha}</span></div>
				<div class="flex-1 py-2 border-b border-gray-300">
                    <a href="Javascript:void(0)"><i class="fa-solid fa-pen-to-square"></i></a>
                    <a href="Javascript:void(0)"><i class="fa-solid fa-trash-can"></i></a>
                </div>
			</div>; 
            `;
		}
	}
};

generarTabla();
// let datosIngresados = JSON.parse(localStorage.getItem("operaciones"));
// datos.push(datosIngresados);
// localStorage.setItem("operaciones", JSON.stringify(datos));
// generarTabla();
