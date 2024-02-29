const body = document.body;

// contenedores
const contenedorPrincipal = document.getElementById("contenedor-principal");
const contenedorImgOperaciones = document.getElementById(
	"contenedor-img-operaciones"
);
const contenedorTablaOperaciones = document.getElementById(
	"contenedor-tabla-operaciones"
);
const contenedorFiltros = document.getElementById("contenedor-filtros");

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
const btnAgregarCategoria = document.getElementById("btn-agregar-categoria");
const btnOcultarFiltros = document.getElementById("btn-ocultar-filtros");

//menues
const menuNav = document.getElementById("menu-nav");

//iconos
const iconoHamburguesa = document.getElementById("icono-hamburguesa");
const iconoX = document.getElementById("icono-x");

//cabereca tabla
const caberecaTablaOperaciones = document.getElementById(
	"cabecera-tabla-operaciones"
);

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

//imputs y select
const inputDescripcion = document.getElementById("input-descripcion");
const inputMonto = document.getElementById("input-monto");
const selectTipo = document.getElementById("select-tipo");
const selectCategoria = document.getElementById("select-categoria");
const inputFecha = document.getElementById("input-fecha");
const inputNombre = document.getElementById("nombre");

// objeto y variable para tabla operaciones
const datos = [];
let operacionesGuardadas;

// objeto y variable para tabla categorias
const categorias = [
	{
		id: uuidv4(),
		nombreCategoria: "Comida",
	},

	{
		id: uuidv4(),
		nombreCategoria: "Servicio",
	},

	{
		id: uuidv4(),
		nombreCategoria: "Salidas",
	},

	{
		id: uuidv4(),
		nombreCategoria: "Educación",
	},

	{
		id: uuidv4(),
		nombreCategoria: "Transporte",
	},

	{
		id: uuidv4(),
		nombreCategoria: "Trabajo",
	},
];
let categoriasGuardadas;

// funcion para ver si algun usuario ingreso algun dato en local storage
const evaluarLocalStorage = (nombre, variable, objeto, funcion) => {
	if (localStorage.getItem(nombre) !== null) {
		variable = JSON.parse(localStorage.getItem(nombre));
		return variable;
	} else {
		localStorage.setItem(nombre, JSON.stringify(objeto));
	}
	funcion;
};

// funcion para generar tabla de operaciones si hay datos en local storage
const generarTabla = (operaciones) => {
	const cuerpoTablaOperaciones = document.getElementById(
		"cuerpo-tabla-operaciones"
	);
	cuerpoTablaOperaciones.innerHTML = "";
	operaciones = evaluarLocalStorage(
		"operaciones",
		operacionesGuardadas,
		datos,
		generarTabla
	);

	if (operaciones.length > 0) {
		for (let operacion of operaciones) {
			cuerpoTablaOperaciones.innerHTML += `
            <div class="flex text-center flex-col md:flex-row">
            <div class="flex md:flex-row md:w-[40%]">
				<div class="flex-1 py-2 border-b border-r border-gray-300 w-[50%] "><span>${operacion.descripcion}</span></div>
				<div class="flex-1 py-2 border-b border-r border-gray-300 w-[50%]"><span>${operacion.categoria}</span></div>
            </div>
				
            <div class="flex md:w-[60%]">
            <div class=" hidden   flex-1 py-2 border-b border-r border-gray-300 md:flex justify-center"><span>${operacion.fecha}</span></div>
				<div class="flex-1 py-2 border-b border-r border-gray-300 w-[50%]"><span>$${operacion.monto}</span></div>
				<div class="flex-1 py-2 border-b border-gray-300 w-[50%]">
                    <a href="Javascript:void(0)"><i class="fa-solid fa-pen-to-square"></i></a>
                    <a href="Javascript:void(0)"><i class="fa-solid fa-trash-can"></i></a>
                </div>
            </div>
			</div>
            `;
		}

		contenedorImgOperaciones.style.display = "none";
		contenedorPrincipal.style.display = "flex";
		const ajustarVisibilidadCabecera = () => {
			if (window.innerWidth > 767) {
				caberecaTablaOperaciones.classList.remove("hidden");
			} else {
				caberecaTablaOperaciones.classList.add("hidden");
			}
		};
		window.addEventListener("DOMContentLoaded", ajustarVisibilidadCabecera);
		window.addEventListener("resize", ajustarVisibilidadCabecera);
	}
};

generarTabla(
	evaluarLocalStorage("operaciones", operacionesGuardadas, datos, generarTabla)
);

// evento para agregar y actualizar operacion
btnAgregarOperacion.addEventListener("click", () => {
	const nuevaOperacion = {
		id: uuidv4(),
		descripcion:
			inputDescripcion.value.charAt(0).toUpperCase() +
			inputDescripcion.value.slice(1),
		categoria:
			selectCategoria.value.charAt(0).toUpperCase() +
			selectCategoria.value.slice(1),
		fecha: inputFecha.value,
		monto: inputMonto.value,
		tipo: selectTipo.value,
	};
	// condicion para que no guarde e imprima una operacion sin monto
	if (inputMonto.value > 0) {
		let operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));
		operacionesGuardadas.push(nuevaOperacion);
		localStorage.setItem("operaciones", JSON.stringify(operacionesGuardadas));
		seccionNuevaOperacion.style.display = "none";
	} else {
		mostrarSeccion(
			seccionCategoria,
			seccionReportes,
			seccionNuevaOperacion,
			contenedorPrincipal
		);
	}
	generarTabla(
		evaluarLocalStorage(
			"operaciones",
			operacionesGuardadas,
			datos,
			generarTabla
		)
	);
});

// funcion para generar tabla de categorias si hay datos en local storage
const generarTablaCategorias = () => {
	const tablaCategorias = document.getElementById("tabla-categorias");
	tablaCategorias.innerHTML = "";
	if (
		evaluarLocalStorage(
			"categoria",
			categoriasGuardadas,
			categorias,
			generarTablaCategorias
		)
	) {
		for (let categoria of evaluarLocalStorage(
			"categoria",
			categoriasGuardadas,
			categorias,
			generarTablaCategorias
		)) {
			tablaCategorias.innerHTML += `
           <div class="flex justify-between">
				<p>${categoria.nombreCategoria}</p>
				<div class="flex gap-x-4 text-[darkturquoise]">
                    <button class="on">On</button>			
				    <button><img src="imagenes/editar.png" alt="logo-editar" class="w-[40px]"/></button>
					<button><img src="imagenes/eliminar.png" alt="logo-eliminar" class="w-[35px]"/></button>							
				</div>			
			</div>
            `;
		}

		// probando cambiar texto en el boton
		// funcion para cambiar texto de btn deshabilitar
		const btnOn = document.querySelectorAll(".on");
		console.log(btnOn);

		for (btn of btnOn) {
			btn.addEventListener("click", () => {
				console.log("hola");
				// const deshabilitarCategoria = () => {
				if (btn.innerHTML === "On") {
					btn.innerText = "Off";
					console.log("si");
				} else {
					btn.innerText = "On";
					console.log("no");
				}
				// };
			});
		}
	}
};

generarTablaCategorias();

// evento para agregar y actualizar categorias
btnAgregarCategoria.addEventListener("click", () => {
	const nuevaCategoria = {
		id: uuidv4(),
		nombreCategoria:
			inputNombre.value.charAt(0).toUpperCase() + inputNombre.value.slice(1),
	};
	// condicion para que no guarde e imprima una categoria vacia
	if (inputNombre.value.length > 0) {
		let categoriasGuardadas = JSON.parse(localStorage.getItem("categoria"));
		categoriasGuardadas.push(nuevaCategoria);
		localStorage.setItem("categoria", JSON.stringify(categoriasGuardadas));
	}
	generarTablaCategorias();
});

//ocultar filtros
btnOcultarFiltros.addEventListener("click", () => {
	contenedorFiltros.classList.toggle("hidden");
	if (contenedorFiltros.classList.contains("hidden")) {
		btnOcultarFiltros.innerHTML = "Mostrar filtros";
	} else {
		btnOcultarFiltros.innerHTML = "Ocultar filtros";
	}
});

//input y select de filtros
const filtroTipo = document.getElementById("filtro-tipo");
const filtroCategoria = document.getElementById("filtro-categoria");

// Función para filtrar las operaciones según el tipo y categoria seleccionado y generar la tabla

// probando generalizar el filtrado
const filtrarYGenerarTabla = (filtroSeleccionado, propiedad) => {
	let operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));
	let operacionesFiltradas;

	if (filtroSeleccionado !== "todos" && filtroSeleccionado !== "todas") {
		operacionesFiltradas = operacionesGuardadas.filter((operacion) => {
			return (
				operacion[propiedad].toLowerCase() === filtroSeleccionado.toLowerCase()
			);
		});
	} else {
		operacionesFiltradas = operacionesGuardadas;
	}
	generarTabla(operacionesFiltradas);
};

filtroTipo.addEventListener("change", () => {
	filtrarYGenerarTabla(filtroTipo.value, "tipo");
});

filtroCategoria.addEventListener("change", () => {
	filtrarYGenerarTabla(filtroCategoria.value, "categoria");
});

//validacion del input monto

const validarMonto = (event) => {
	if (event.charCode >= 48 && event.charCode <= 57) {
		return true;
	}
	return false;
};

//inputMonto.addEventListener("keypress", validarMonto);
