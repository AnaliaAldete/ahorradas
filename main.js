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
);
const seccionEditar = document.getElementById("seccion-editar");

//no usada por el momento
const seccionCategoria = document.getElementById("seccion-categoria");
const seccionReportes = document.getElementById("seccion-reportes");
const seccionNuevaOperacion = document.getElementById(
	"seccion-nueva-operacion"
);

//botones
const btnMenuHamburguesa = document.getElementById("btn-menu-hamburguesa");
const btnOperacion = document.getElementById("btn-operacion");
const btnCancelarNueva = document.getElementById("btn-cancelar--nueva");
const btnCancelarEditar = document.getElementById("btn-cancelar--editar");
const btnModoOscuro = document.getElementById("btn-modo-oscuro");
const btnAgregarOperacion = document.getElementById("btn-agregar-operacion");
const btnAgregarCategoria = document.getElementById("btn-agregar-categoria");
const btnOcultarFiltros = document.getElementById("btn-ocultar-filtros");
const btnAceptarEditar = document.querySelector(".aceptar-editar");

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
const mostrarSeccion = (seccion, ...contenedores) => {
	contenedores.forEach((contenedor) => {
		// contenedor.style.display = "none";
		contenedor.classList.add("hidden");
	});
	// seccion.style.display = "flex";
	seccion.classList.remove("hidden");
};

// prettier-ignore
enlaceBalance.addEventListener("click", () => mostrarSeccion(contenedorPrincipal, seccionCategoria, seccionReportes, seccionNuevaOperacion, seccionEditar ));
// prettier-ignore
enlaceCategoria.addEventListener("click", () => mostrarSeccion(seccionCategoria, contenedorPrincipal, seccionReportes, seccionNuevaOperacion, seccionEditar ));
// prettier-ignore
enlaceReportes.addEventListener("click", () => mostrarSeccion(seccionReportes,contenedorPrincipal,seccionCategoria,seccionNuevaOperacion, seccionEditar));
// prettier-ignore
btnOperacion.addEventListener("click", () => mostrarSeccion(seccionNuevaOperacion, contenedorPrincipal, seccionCategoria, seccionReportes, seccionEditar ));

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
	contenedor.classList.add("hidden");
	seccion.classList.remove("hidden");
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
const inputEditarCategoria = document.getElementById("label-editar");

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
console.log(categorias);
let categoriasGuardadas;

// funcion para ver si algun usuario ingreso algun dato en local storage
const evaluarLocalStorage = (nombre, variable, objeto) => {
	if (localStorage.getItem(nombre) !== null) {
		variable = JSON.parse(localStorage.getItem(nombre));
		return variable;
	} else {
		localStorage.setItem(nombre, JSON.stringify(objeto));
	}
};

// funcionalidades de LA SECCION BALANCE

const balanceGanancia = document.getElementById("balance-ganancia");
const balanceGasto = document.getElementById("balance-gasto");
const balanceTotal = document.getElementById("balance-total");
let resultadoGanacia = 0;
let resultadoGasto = 0;
let resultadoTotal = 0;

// Función para sumar ganancias o gastos
const sumarGananciaOGasto = (tipo, monto) => {
	if (tipo === "ganancia") {
		resultadoGanacia += parseInt(monto);
	} else {
		resultadoGasto += parseInt(monto);
	}
};

// Función para calcular el resultado total entre gasto y ganancia
const calcularTotal = () => {
	if (resultadoGanacia > resultadoGasto) {
		resultadoTotal = resultadoGanacia - resultadoGasto;
	} else {
		resultadoTotal = resultadoGasto - resultadoGanacia;
	}
};

// Función para actualizar el DOM de los balances
const actualizarBalance = () => {
	balanceGanancia.innerText = `+$${resultadoGanacia}`;
	balanceGasto.innerText = `-$${resultadoGasto}`;

	calcularTotal();
	if (resultadoGanacia > resultadoGasto) {
		balanceTotal.innerText = `+$${resultadoTotal}`;
		balanceTotal.classList.add("text-green-500");
		balanceTotal.classList.remove("text-red-500");
	} else {
		balanceTotal.innerText = `-$${resultadoTotal}`;
		balanceTotal.classList.remove("text-green-500");
		balanceTotal.classList.add("text-red-500");
	}
};

// Función para generar tabla de operaciones si hay datos en local storage
const generarTabla = (operaciones) => {
	const cuerpoTablaOperaciones = document.getElementById(
		"cuerpo-tabla-operaciones"
	);
	cuerpoTablaOperaciones.innerHTML = "";

	if (operaciones && operaciones.length > 0) {
		resultadoGanacia = 0;
		resultadoGasto = 0;

		for (let operacion of operaciones) {
			const obtenerSigno = operacion.tipo === "ganancia" ? "+$" : "-$";
			const obtenerColor =
				operacion.tipo === "ganancia" ? "text-green-500" : "text-red-500";

			sumarGananciaOGasto(operacion.tipo, operacion.monto);

			cuerpoTablaOperaciones.innerHTML += `
				<div class="flex text-center flex-col md:flex-row">
					<div class="flex md:flex-row md:w-[40%]">
						<div class="flex-1 py-2 border-b border-r border-gray-300 w-[50%]">
							<span>${operacion.descripcion}</span>
						</div>
						<div class="flex-1 py-2 border-b border-r border-gray-300 w-[50%]">
							<span>${operacion.categoria}</span>
						</div>
					</div>
					<div class="flex md:w-[60%]">
						<div class="hidden flex-1 py-2 border-b border-r border-gray-300 md:flex justify-center">
							<span>${operacion.fecha}</span>
						</div>
						<div class="flex-1 py-2 border-b border-r border-gray-300 w-[50%]">
							<span class="${obtenerColor}">${obtenerSigno}${operacion.monto}</span>
						</div>
						<div class="flex-1 py-2 border-b border-gray-300 w-[50%]">
							<a href="Javascript:void(0)"><i class="fa-solid fa-pen-to-square"></i></a>
							<a href="Javascript:void(0)"><i class="fa-solid fa-trash-can"></i></a>
						</div>
					</div>
				</div>
			`;
		}

		calcularTotal();

		actualizarBalance();

		mostrarSeccion(contenedorPrincipal, contenedorImgOperaciones);

		// Ajustar visibilidad de la cabecera dependiendo del tamaño de la pantalla
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

generarTabla(evaluarLocalStorage("operaciones", operacionesGuardadas, datos));

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
		fecha: fechaFormateada.split("-").reverse().join("/"),
		monto: inputMonto.value,
		tipo: selectTipo.value,
	};
	// condicion para que no guarde e imprima una operacion sin monto
	if (inputMonto.value > 0) {
		let operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));
		operacionesGuardadas.push(nuevaOperacion);
		localStorage.setItem("operaciones", JSON.stringify(operacionesGuardadas));
		seccionNuevaOperacion.classList.add("hidden");
	} else {
		mostrarSeccion(
			contenedorPrincipal,
			seccionCategoria,
			seccionReportes,
			seccionNuevaOperacion
		);
	}

	generarTabla(evaluarLocalStorage("operaciones", operacionesGuardadas, datos));
	vaciarInput();
});

// función para que aparezca los input vacios después de generar una nueva operación.
const vaciarInput = () => {
	inputDescripcion.value = "";
	inputMonto.value = "";
	inputFecha.value = fechaActualFormateada;
};

// función para añadir eventos a los botones de editar
const eventosBtnsEditar = (btns) => {
	btns.forEach((btnSeleccionado) => {
		btnSeleccionado.addEventListener("click", () => {
			mostrarSeccion(seccionEditar, seccionCategoria);
			console.log(inputEditarCategoria.value);
			inputEditarCategoria.value = obtenerId(
				evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
				btnSeleccionado.id.slice(7)
			).nombreCategoria;
			btnAceptarEditar.setAttribute(
				"id",
				`confirmar-${btnSeleccionado.id.slice(7)}`
			);
		});
	});
};

// función para generar tabla de categorias si hay datos en local storage
const generarTablaCategorias = (categorias) => {
	const tablaCategorias = document.getElementById("tabla-categorias");
	tablaCategorias.innerHTML = "";

	if (categorias && categorias.length > 0) {
		for (let categoria of categorias) {
			const { id, nombreCategoria } = categoria;
			tablaCategorias.innerHTML += `
                <div class="flex justify-between" id="${id}">
				<p>${nombreCategoria}</p>
				<div class="flex gap-x-4 text-[darkturquoise]">
                <button class="btn-on" id="on-${id}">On</button>			
                <button class="btn-editar" id="editar-${id}"><img src="imagenes/editar.png" alt="logo-editar" class="w-[40px]"/></button>
                <button class="btn-eliminar" id="eliminar-${id}"><img src="imagenes/eliminar.png" alt="logo-eliminar" class="w-[35px]"/></button>							
				</div>			
                </div>
                `;
		}
		// llamando a mi nodeList de btns,
		eventosBtnsEditar(document.querySelectorAll(".btn-editar"));

		// probando cambiar texto en el boton
		// funcion para cambiar texto de btn deshabilitar
		// const btnOn = document.querySelectorAll(".on");
		// console.log(btnOn);

		// for (btn of btnOn) {
		// 	btn.addEventListener("click", () => {
		// 		console.log("hola");
		// 		// const deshabilitarCategoria = () => {
		// 		if (btn.innerHTML === "On") {
		// 			btn.innerText = "Off";
		// 			console.log("si");
		// 		} else {
		// 			btn.innerText = "On";
		// 			console.log("no");
		// 		}
		// 		// };
		// 	});
		// }
	}
};

generarTablaCategorias(
	evaluarLocalStorage("categoria", categoriasGuardadas, categorias)
);

// función para identificar categoria en función del id.
const obtenerId = (array, categoriaId) =>
	array.find((elemento) => categoriaId === elemento.id);

// función para editar el nombre
const editarInput = (array, categoriaId) => {
	console.log(categoriaId);
	const categoriasEditadas = array.map((categoriaAEditar) => {
		if (categoriaAEditar.id === categoriaId) {
			console.log("valor modificado");
			return {
				...categoriaAEditar,
				nombreCategoria: inputEditarCategoria.value,
			};
		} else {
			console.log("valor igual");
			return categoriaAEditar;
		}
	});
	localStorage.setItem("categoria", JSON.stringify(categoriasEditadas));
	generarTablaCategorias(categoriasEditadas);
};

btnAceptarEditar.addEventListener("click", () => {
	editarInput(
		evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
		btnAceptarEditar.id.slice(10)
	);
	mostrarSeccion(seccionCategoria, seccionEditar);
});

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
	generarTablaCategorias(
		evaluarLocalStorage("categoria", categoriasGuardadas, categorias)
	);
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

// validación input monto para que no este vacia y no escriban de más
const mensajeError = document.getElementById("mensaje-error");
const mensajeError2 = document.getElementById("mensaje-input-vacio");

inputMonto.addEventListener("input", () => {
	if (/^\d{1,10}$/.test(inputMonto.value)) {
		inputMonto.classList.remove("border-red-500");
		mensajeError.classList.add("hidden");
		mensajeError2.classList.add("hidden");
	} else if (inputMonto.value.length === 0) {
		mensajeError2.classList.remove("hidden");
		inputMonto.classList.add("border-red-500");
	} else if (inputMonto.value < 0) {
		inputMonto.value = 0;
	} else {
		inputMonto.classList.add("border-red-500");
		mensajeError.classList.remove("hidden");
	}
});

//formatear fechas

let fechaFormateada;

//estabalece fecha actual formateada por defecto al input
let fechaActual = new Date();
let fechaActualFormateada = new Date(
	fechaActual.getTime() - fechaActual.getTimezoneOffset() * 60000
)
	.toISOString()
	.split("T")[0];
inputFecha.value = fechaActualFormateada;
if (inputFecha.value === fechaActualFormateada) {
	fechaFormateada = fechaActualFormateada;
}
//formatea fechas seleccionadas en el input
inputFecha.addEventListener("change", () => {
	let fechaSeleccionada = new Date(inputFecha.value);
	fechaFormateada = fechaSeleccionada.toISOString().split("T")[0];
});

// filtro ordenar por mayor/ menor monto y de a/z , z/a y mas/menos reciente

const filtroOrdenar = document.getElementById("filtro-ordenar");

const generarYOrdenarTabla = (operaciones) => {
	if (filtroOrdenar.value === "menor") {
		generarTabla(operaciones.sort((a, b) => a.monto - b.monto));
	} else if (filtroOrdenar.value === "mayor") {
		generarTabla(operaciones.sort((a, b) => b.monto - a.monto));
	} else if (filtroOrdenar.value === "Z/A") {
		generarTabla(
			operaciones.sort((a, b) => {
				if (a.descripcion < b.descripcion) return 1;
				if (a.descripcion > b.descripcion) return -1;
				return 0;
			})
		);
	} else if (filtroOrdenar.value === "A/Z") {
		generarTabla(
			operaciones.sort((a, b) => {
				if (a.descripcion > b.descripcion) return 1;
				if (a.descripcion < b.descripcion) return -1;
				return 0;
			})
		);
	} else if (filtroOrdenar.value === "mas") {
		generarTabla(
			operaciones.sort(
				(a, b) =>
					new Date(b.fecha.split("/").reverse().join("/")) -
					new Date(a.fecha.split("/").reverse().join("/"))
			)
		);
	} else if (filtroOrdenar.value === "menos") {
		generarTabla(
			operaciones.sort(
				(a, b) =>
					new Date(a.fecha.split("/").reverse().join("/")) -
					new Date(b.fecha.split("/").reverse().join("/"))
			)
		);
	} else {
		generarTabla(operaciones);
	}
};

filtroOrdenar.addEventListener("change", () =>
	generarYOrdenarTabla(JSON.parse(localStorage.getItem("operaciones")))
);

//funcionalidad filtros fechas

const inputFiltroFecha = document.getElementById("filtro-fecha");

//establacer por defecto la fecha actual al input del filtro fecha y arregla el desfazaje de un dia
let fechaDesde = new Date();
let fechaDesdeFormateada = new Date(
	fechaDesde.getTime() - fechaDesde.getTimezoneOffset() * 60000
)
	.toISOString()
	.split("T")[0];

inputFiltroFecha.value = fechaDesdeFormateada;

//filtro de fechas de desde
const filtrarPorFecha = () => {
	const fechaDesde = new Date(inputFiltroFecha.value);
	let operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));
	let operacionesFiltradasPorFecha = operacionesGuardadas.filter(
		(operacion) => {
			const fechaOperacion = new Date(
				operacion.fecha.split("/").reverse().join("/")
			);
			return fechaOperacion >= fechaDesde;
		}
	);
	generarTabla(operacionesFiltradasPorFecha);
};

inputFiltroFecha.addEventListener("change", filtrarPorFecha);

//aparecer tablas de reportes cuando hay operaciones cargadas

const tablasReportes = document.getElementById("tabla-reportes");
const containerImgReportes = document.getElementById("container-img-reportes");

const aparecerReportes = () => {
	const operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));

	if (operacionesGuardadas && operacionesGuardadas.length > 0) {
		tablasReportes.classList.remove("hidden");
		containerImgReportes.classList.add("hidden");
	} else {
		tablasReportes.classList.add("hidden");
		containerImgReportes.classList.remove("hidden");
	}
};

aparecerReportes();

//funcion para obtener las ganacias o gastos por categorias o por fecha
const obtenerGananciasOGastosPorPropiedad = (tipo, propiedad) => {
	const operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));

	const gananciasOGastosPorpropiedad = operacionesGuardadas.reduce(
		(total, operacion) => {
			if (operacion.tipo === tipo) {
				total[operacion[propiedad]] = total[operacion[propiedad]] || 0;
				total[operacion[propiedad]] += parseInt(operacion.monto);
			}

			return total;
		},
		{}
	);
	return gananciasOGastosPorpropiedad;
};

const gananciasPorCategoria = obtenerGananciasOGastosPorPropiedad(
	"ganancia",
	"categoria"
);
const gastosPorCategoria = obtenerGananciasOGastosPorPropiedad(
	"gasto",
	"categoria"
);
console.log(gananciasPorCategoria, gastosPorCategoria);

const gananciasPorFecha = obtenerGananciasOGastosPorPropiedad(
	"ganancia",
	"fecha"
);
const gastosPorFecha = obtenerGananciasOGastosPorPropiedad("gasto", "fecha");
console.log(gananciasPorFecha, gastosPorFecha);

//funcion para obtener la categoria o el mes de mayor ganancia o mayor gasto o mayor balance

const obtenerMayorPropiedad = (tipo, propiedad) => {
	let mayor;
	for (let propiedad in tipo) {
		if (!mayor) {
			mayor = propiedad;
		} else if (tipo[propiedad] > tipo[mayor]) {
			mayor = propiedad;
		}
	}

	return mayor;
};

const categoriaMayorGanancia = obtenerMayorPropiedad(
	gananciasPorCategoria,
	"categoria"
);
const categoriaMayorGasto = obtenerMayorPropiedad(
	gastosPorCategoria,
	"categoria"
);

const mesMayorGanancia = obtenerMayorPropiedad(gananciasPorFecha, "fecha");
const mesMayorGasto = obtenerMayorPropiedad(gastosPorFecha, "fecha");

//funcion para obtener el balance de la categoria o del fecha
const obtenerBalancePorPropiedad = (propiedad, ganancias, gastos) => {
	const balance = {};

	for (let propiedad in ganancias) {
		const ganancia = ganancias[propiedad];
		const gasto = gastos[propiedad] || 0;
		balance[propiedad] = Math.abs(ganancia - gasto);
	}

	for (let propiedad in gastos) {
		if (!ganancias[propiedad]) {
			balance[propiedad] = gastos[propiedad];
		}
	}

	return balance;
};

const balancePorCategoria = obtenerBalancePorPropiedad(
	"categoria",
	gananciasPorCategoria,
	gastosPorCategoria
);
const balancePorFecha = obtenerBalancePorPropiedad(
	"fecha",
	gananciasPorFecha,
	gastosPorFecha
);
console.log(balancePorCategoria);
console.log(balancePorFecha);
const categoriaMayorBalance = obtenerMayorPropiedad(
	balancePorCategoria,
	"categoria"
);
console.log(categoriaMayorBalance);

//prettier-ignore
const containerCategoriaMayorGanancia = document.getElementById("container-categoria-mayor-ganancia");
// prettier-ignore
const containerMayorGanaciaCategoria = document.getElementById("container-mayor-ganacia-categoria");
//prettier-ignore
const containerCategoriaMayorGasto = document.getElementById("container-categoria-mayor-gasto");
// prettier-ignore
const containerMayorGastoCategoria = document.getElementById("container-mayor-gasto-categoria");

//prettier-ignore
const containerCategoriaMayorBalance = document.getElementById("container-categoria-mayor-balance");
// prettier-ignore
const containerMayorBalanceCategoria = document.getElementById("container-mayor-balance-categoria");
// prettier-ignore
const containerMesMayorGanacia = document.getElementById("container-mes-mayor-ganacia");
// prettier-ignore
const containerMayorGananciaMes = document.getElementById("container-mayor-ganancia-mes");
// prettier-ignore
const containerMesMayorGasto = document.getElementById("container-mes-mayor-gasto");
// prettier-ignore
const containerMayorGastoMes = document.getElementById("container-mayor-gasto-mes");

//funcion para que aparezca el resumen en reportes
const actualizarResumen = () => {
	const textoBalance =
		gananciasPorCategoria[categoriaMayorGanancia] >
		gastosPorCategoria[categoriaMayorGasto]
			? `+$${balancePorCategoria[categoriaMayorBalance]}`
			: `-$${balancePorCategoria[categoriaMayorBalance]}`;
	const colorBalance =
		gananciasPorCategoria[categoriaMayorGanancia] >
		gastosPorCategoria[categoriaMayorGasto]
			? "text-green-500"
			: "text-red-500";

	containerCategoriaMayorGanancia.innerText = categoriaMayorGanancia;
	containerMayorGanaciaCategoria.innerText = `+$${gananciasPorCategoria[categoriaMayorGanancia]}`;
	containerMayorGanaciaCategoria.classList.add("text-green-500");
	containerCategoriaMayorGasto.innerText = categoriaMayorGasto;
	containerMayorGastoCategoria.innerText = `-$${gastosPorCategoria[categoriaMayorGasto]}`;
	gastosPorCategoria[categoriaMayorGasto];
	containerMayorGastoCategoria.classList.add("text-red-500");
	containerCategoriaMayorBalance.innerText = categoriaMayorBalance;
	containerMayorBalanceCategoria.innerText = textoBalance;
	containerMayorBalanceCategoria.classList.add(colorBalance);
	containerMesMayorGanacia.innerText = mesMayorGanancia;
	containerMayorGananciaMes.innerText = `+$${gananciasPorFecha[mesMayorGanancia]}`;
	containerMayorGananciaMes.classList.add("text-green-500");
	containerMesMayorGasto.innerText = mesMayorGasto;
	containerMayorGastoMes.innerText = `-$${gastosPorFecha[mesMayorGasto]}`;
	containerMayorGastoMes.classList.add("text-red-500");
};
actualizarResumen();

const cuerpoTablaTotalesCategorias = document.getElementById(
	"cuerpo-tabla-totales-categorias"
);
const cuerpoTablaTotalesMes = document.getElementById(
	"cuerpo-tabla-totales-mes"
);
const actualizarTotalesPorPropiedad = (
	tabla,
	propiedad,
	ganancias,
	gastos,
	balance
) => {
	tabla.innerHTML = "";
	const todasPropiedades = new Set([
		...Object.keys(ganancias),
		...Object.keys(gastos),
	]);

	for (let propiedad of todasPropiedades) {
		const ganancia = ganancias[propiedad] || 0;
		const gasto = gastos[propiedad] || 0;
		const balancePropiedad = balance[propiedad] || 0;

		const textoGanancia = ganancia !== 0 ? `+$${ganancia}` : "$0";
		const textoGasto = gasto !== 0 ? `-$${gasto}` : "$0";

		const textoBalance =
			balancePropiedad !== 0
				? ganancia > gasto
					? `+$${balancePropiedad}`
					: `-$${balancePropiedad}`
				: "$0";
		const colorBalance =
			balancePropiedad !== 0
				? ganancia > gasto
					? "text-green-500"
					: "text-red-500"
				: "text-green-500";
		tabla.innerHTML += `
            <div class="flex">           
                <div class="w-[25%] text-left">${propiedad}</div>
                <div class="w-[25%] text-center text-green-500">${textoGanancia}</div>
                <div class="w-[25%] text-center text-red-500">${textoGasto}</div>
                <div class="w-[25%] text-center ${colorBalance}">${textoBalance}</div>
            </div>         
        `;
	}
};

actualizarTotalesPorPropiedad(
	cuerpoTablaTotalesCategorias,
	"categoria",
	gananciasPorCategoria,
	gastosPorCategoria,
	balancePorCategoria
);
actualizarTotalesPorPropiedad(
	cuerpoTablaTotalesMes,
	"fecha",
	gananciasPorFecha,
	gastosPorFecha,
	balancePorFecha
);
