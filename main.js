//------------------------------ELEMENTOS----------------------------------------------------------------------------------------------------
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
const containerBalanceYFiltros = document.getElementById(
	"container-balance-filtros"
);
const seccionEditar = document.getElementById("seccion-editar");
const seccionCategoria = document.getElementById("seccion-categoria");
const seccionReportes = document.getElementById("seccion-reportes");
const seccionNuevaOperacion = document.getElementById(
	"seccion-nueva-operacion"
);
// ventanas modales
const ventanaModalEditarOp = document.getElementById(
	"advertencia-editar--operaciones"
);
const ventanaModalEditar = document.getElementById("advertencia-editar");
const ventanaModalEliminarOp = document.getElementById(
	"advertencia-eliminar--operaciones"
);
const ventanaModalEliminar = document.getElementById("advertencia-eliminar");

//botones
const btnMenuHamburguesa = document.getElementById("btn-menu-hamburguesa");
const btnOperacion = document.getElementById("btn-operacion");
const btnCancelarNueva = document.getElementById("btn-cancelar--nueva");
const btnCancelarEditar = document.getElementById("btn-cancelar--editar");
const btnModoOscuro = document.getElementById("btn-modo-oscuro");
const btnAgregarOperacion = document.getElementById("btn-agregar-operacion");
const btnAgregarCategoria = document.getElementById("btn-agregar-categoria");
const btnOcultarFiltros = document.getElementById("btn-ocultar-filtros");
const btnEditar = document.getElementById("btn-aceptar-editar");
const btnAdvertenciaAceptarEditar = document.querySelector(
	".btn-advertencia-editar--aceptar"
);
const btnAdvertenciaCancelarEditar = document.getElementById(
	"btn-advertencia-editar--cancelar"
);
const btnGuardarCambios = document.getElementById("editar-btn-agregar");
const btnAdvertenciaCancelarEditarOP = document.getElementById(
	"btn-advertencia-editar--cancelar-op"
);
const btnAceptarEliminar = document.querySelector(
	".btn-advertencia-eliminar--aceptar"
);
const btnAdvertenciaCancelarEliminar = document.getElementById(
	"btn-advertencia-eliminar--cancelar"
);
const btnAdvertenciaEliminarOp = document.querySelector(
	".btn-advertencia-eliminar--aceptar-op"
);
const btnAdvertenciaCancelarEliminarOp = document.getElementById(
	"btn-advertencia-eliminar--cancelar-op"
);

//menues
const menuNav = document.getElementById("menu-nav");

//imputs y select
const inputDescripcion = document.getElementById("input-descripcion");
const inputMonto = document.getElementById("input-monto");
const selectTipo = document.getElementById("select-tipo");
const selectCategoria = document.getElementById("select-categoria");
const inputFecha = document.getElementById("input-fecha");
const inputNombre = document.getElementById("nombre");
const inputEditarCategoria = document.getElementById("label-editar");

//input y select de filtros
const filtroTipo = document.getElementById("filtro-tipo");
const filtroCategoria = document.getElementById("filtro-categoria");
const filtroOrdenar = document.getElementById("filtro-ordenar");
const inputFiltroFecha = document.getElementById("filtro-fecha");

//iconos
const iconoHamburguesa = document.getElementById("icono-hamburguesa");
const iconoX = document.getElementById("icono-x");

//tablas
const caberecaTablaOperaciones = document.getElementById(
	"cabecera-tabla-operaciones"
);
const cuerpoTablaTotalesCategorias = document.getElementById(
	"cuerpo-tabla-totales-categorias"
);
const cuerpoTablaTotalesMes = document.getElementById(
	"cuerpo-tabla-totales-mes"
);

//div de balance
const balanceGanancia = document.getElementById("balance-ganancia");
const balanceGasto = document.getElementById("balance-gasto");
const balanceTotal = document.getElementById("balance-total");

//div de reportes
const tablasReportes = document.getElementById("tabla-reportes");
const containerImgReportes = document.getElementById("container-img-reportes");

//elemntos de edicion
const seccionEditarOp = document.getElementById("editar-nueva-operacion");
const editarDescripcion = document.getElementById("editar-input-descripcion");
const editarMonto = document.getElementById("editar-input-monto");
const editarTipo = document.getElementById("editar-select-tipo");
const editarSelectCategoria = document.getElementById(
	"editar-select-categoria"
);
const editarFecha = document.getElementById("editar-input-fecha");
const btnAdvertenciaAceptarEditarOp = document.querySelector(
	".btn-advertencia-editar--aceptar-op"
);
//containes de los elementos de reportes
const containerCategoriaMayorGanancia = document.getElementById(
	"container-categoria-mayor-ganancia"
);
const containerMayorGanaciaCategoria = document.getElementById(
	"container-mayor-ganacia-categoria"
);
const containerCategoriaMayorGasto = document.getElementById(
	"container-categoria-mayor-gasto"
);
const containerMayorGastoCategoria = document.getElementById(
	"container-mayor-gasto-categoria"
);
const containerCategoriaMayorBalance = document.getElementById(
	"container-categoria-mayor-balance"
);
const containerMayorBalanceCategoria = document.getElementById(
	"container-mayor-balance-categoria"
);
const containerMesMayorGanacia = document.getElementById(
	"container-mes-mayor-ganacia"
);
const containerMayorGananciaMes = document.getElementById(
	"container-mayor-ganancia-mes"
);
const containerfechaMayorGasto = document.getElementById(
	"container-mes-mayor-gasto"
);
const containerMayorGastoMes = document.getElementById(
	"container-mayor-gasto-mes"
);

//----------------------------------------------------FIN DE ELEMENTOS--------------------------------------------------------------------------------------------------

//--------------------------------------------------FUNCIONES GENERALES------------------------------------------------------------------------------------
// Funcionalidad menú hamburguesa
btnMenuHamburguesa.addEventListener("click", () => {
	menuNav.classList.toggle("hidden");
	iconoHamburguesa.classList.toggle("hidden");
	iconoX.classList.toggle("hidden");
});

// funcion para aparecer y desaparecer secciones
const mostrarSeccion = (seccion, ...contenedores) => {
	contenedores.forEach((contenedor) => {
		contenedor.classList.add("hidden");
	});
	seccion.classList.remove("hidden");
};

enlaceBalance.addEventListener("click", () =>
	mostrarSeccion(
		contenedorPrincipal,
		seccionCategoria,
		seccionReportes,
		seccionNuevaOperacion,
		seccionEditar,
		ventanaModalEditar,
		seccionEditarOp,
		ventanaModalEditarOp,
		ventanaModalEliminar,
		ventanaModalEliminarOp
	)
);
enlaceCategoria.addEventListener("click", () =>
	mostrarSeccion(
		seccionCategoria,
		contenedorPrincipal,
		seccionReportes,
		seccionNuevaOperacion,
		seccionEditar,
		ventanaModalEditar,
		seccionEditarOp,
		ventanaModalEditarOp,
		ventanaModalEliminar,
		ventanaModalEliminarOp
	)
);
enlaceReportes.addEventListener("click", () =>
	mostrarSeccion(
		seccionReportes,
		contenedorPrincipal,
		seccionCategoria,
		seccionNuevaOperacion,
		seccionEditar,
		ventanaModalEditar,
		seccionEditarOp,
		ventanaModalEditarOp,
		ventanaModalEliminar,
		ventanaModalEliminarOp
	)
);
btnOperacion.addEventListener("click", () =>
	mostrarSeccion(
		seccionNuevaOperacion,
		contenedorPrincipal,
		seccionCategoria,
		seccionReportes,
		seccionEditar,
		ventanaModalEditar,
		seccionEditarOp,
		ventanaModalEditarOp,
		ventanaModalEliminar,
		ventanaModalEliminarOp
	)
);
btnEditar.addEventListener("click", () =>
	mostrarSeccion(
		ventanaModalEditar,
		contenedorPrincipal,
		seccionCategoria,
		seccionReportes,
		seccionNuevaOperacion,
		seccionEditar,
		seccionEditarOp,
		ventanaModalEliminar,
		ventanaModalEliminarOp
	)
);

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

//-------------------------------INICIO SECCION OPERACIONES-----------------------------------------------------------------------------------

// objeto y variable para tabla operaciones
const datos = [];
let operacionesGuardadas;

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

let resultadoGanacia = 0;
let resultadoGasto = 0;
let resultadoTotal = 0;

// Función para sumar ganancias o gastos generales
const sumarGananciaOGasto = (tipo, monto) => {
	if (tipo === "ganancia") {
		resultadoGanacia += parseInt(monto);
	} else {
		resultadoGasto += parseInt(monto);
	}
};

// Función para calcular el resultado total entre gasto y ganancia generales
const calcularTotal = () => {
	if (resultadoGanacia > resultadoGasto) {
		resultadoTotal = resultadoGanacia - resultadoGasto;
	} else {
		resultadoTotal = resultadoGasto - resultadoGanacia;
	}
};

// Función para actualizar el DOM de los balances generales
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

// Función para añadir eventos a los btns de editar operaciones
const eventosBtnsEditarOp = (btns) => {
	btns.forEach((btnSeleccionado) => {
		btnSeleccionado.addEventListener("click", () => {
			mostrarSeccion(seccionEditarOp, contenedorPrincipal);
			const operacionAEditar = obtenerId(
				evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
				btnSeleccionado.id.slice(9)
			);
			console.log(operacionAEditar);
			if (operacionAEditar) {
				editarDescripcion.value = operacionAEditar.descripcion;
				editarMonto.value = operacionAEditar.monto;
				editarTipo.value = operacionAEditar.tipo;
				editarSelectCategoria.value = operacionAEditar.categoria.toLowerCase();
				console.log(operacionAEditar.categoria);
				console.log(editarSelectCategoria.value);
				editarFecha.value = operacionAEditar.fecha
					.split("/")
					.reverse()
					.join("-");
				console.log(editarFecha.value, operacionAEditar.fecha);
			}
			btnAdvertenciaAceptarEditarOp.setAttribute(
				"id",
				`confirmar-${btnSeleccionado.id.slice(9)}`
			);
		});
	});
};

// funcion hidden
// const hidden = (mostrar, ocultar) => {
// 	mostrar.classList.remove("hidden");
// 	ocultar.classList.add("hidden");
// };

// aparece ventana advertencia
btnGuardarCambios.addEventListener("click", () => {
	mostrarSeccion(ventanaModalEditarOp, seccionEditarOp);
});

// btn cancelar modal de editar operacion
btnAdvertenciaCancelarEditarOP.addEventListener("click", () =>
	cancelar(ventanaModalEditarOp, contenedorPrincipal)
);

// funcion para añadir eventos a los botones de eliminar
const eventosBtnsEliminarOp = (btns) => {
	btns.forEach((btnSeleccionado) => {
		btnSeleccionado.addEventListener("click", () => {
			confirmarEliminarOperacion(
				evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
				obtenerId(
					evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
					btnSeleccionado.id.slice(11)
				)
			);
			mostrarSeccion(ventanaModalEliminarOp, contenedorPrincipal);
			btnAdvertenciaEliminarOp.setAttribute(
				"id",
				`confirmar-${btnSeleccionado.id.slice(11)}`
			);
		});
	});
};

//btn cancelar modal de eliminar operacion
btnAdvertenciaCancelarEliminarOp.addEventListener("click", () =>
	cancelar(ventanaModalEliminarOp, contenedorPrincipal)
);

// Ajustar visibilidad de la cabecera de la tabla dependiendo del tamaño de la pantalla
const ajustarVisibilidadCabecera = () => {
	if (window.innerWidth > 767) {
		caberecaTablaOperaciones.classList.remove("hidden");
	} else {
		caberecaTablaOperaciones.classList.add("hidden");
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
				<div class="flex text-center flex-col md:flex-row" id="${operacion.id}">
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
							 <button class="btn-editar-op" id="editar-op${operacion.id}"><img src="imagenes/editar.png" alt="logo-editar" class="w-[35px]"/></button>
                            <button class="btn-eliminar-op" id="eliminar-op${operacion.id}"><img src="imagenes/eliminar.png" alt="logo-eliminar" class="w-[30px]"/></button>
						</div>
					</div>
				</div>
			`;
		}
		// llamando a mi nodeList de btns,
		eventosBtnsEditarOp(document.querySelectorAll(".btn-editar-op"));
		eventosBtnsEliminarOp(document.querySelectorAll(".btn-eliminar-op"));
		calcularTotal();

		actualizarBalance();

		mostrarSeccion(contenedorPrincipal, contenedorImgOperaciones);

		ajustarVisibilidadCabecera();
		window.addEventListener("DOMContentLoaded", ajustarVisibilidadCabecera);
		window.addEventListener("resize", ajustarVisibilidadCabecera);
	}
};

generarTabla(evaluarLocalStorage("operaciones", operacionesGuardadas, datos));

// funcion para editar las operaciones
const editarSeccionOperaciones = (array, operacionId) => {
	console.log(operacionId);
	const operacionesEditadas = array.map((operacionAEditar) => {
		console.log(operacionAEditar);
		console.log(operacionAEditar.id);
		if (operacionAEditar.id === operacionId) {
			return {
				...operacionAEditar,
				descripcion: editarDescripcion.value,
				categoria: editarSelectCategoria.value,
				fecha: editarFecha.value,
				monto: editarMonto.value,
				tipo: editarTipo.value,
			};
		} else {
			return {
				...operacionAEditar,
			};
		}
	});
	localStorage.setItem("operaciones", JSON.stringify(operacionesEditadas));
	generarTabla(operacionesEditadas);
};

// evento para imprimir la tabla editada
btnAdvertenciaAceptarEditarOp.addEventListener("click", () => {
	editarSeccionOperaciones(
		evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
		btnAdvertenciaAceptarEditarOp.id.slice(10)
	);
	mostrarSeccion(contenedorPrincipal, ventanaModalEditarOp);
});

//cancelar seccion editar operacion
document
	.getElementById("editar-btn-cancelar--nueva")
	.addEventListener("click", () =>
		cancelar(seccionEditarOp, contenedorPrincipal)
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
	aparecerReportes();
	actualizarResumen();

	actualizarTotalesPorPropiedad(
		cuerpoTablaTotalesCategorias,
		"categoria",
		obtenerGananciasOGastosPorCategoria("ganancia"),
		obtenerGananciasOGastosPorCategoria("gasto"),
		obtenerBalancePorPropiedad(
			"categoria",
			obtenerGananciasOGastosPorCategoria("ganancia"),
			obtenerGananciasOGastosPorCategoria("gasto")
		)
	);

	actualizarTotalesPorPropiedad(
		cuerpoTablaTotalesMes,
		"fecha",
		obtenerGananciasOGastosPorMes("ganancia"),
		obtenerGananciasOGastosPorMes("gasto"),
		obtenerBalancePorPropiedad(
			"fecha",
			obtenerGananciasOGastosPorMes("ganancia"),
			obtenerGananciasOGastosPorMes("gasto")
		)
	); //ver porque no se actualiza
});

// función para que aparezca los input vacios después de generar una nueva operación.
const vaciarInput = () => {
	inputDescripcion.value = "";
	inputMonto.value = "";
	inputFecha.value = fechaActualFormateada;
};

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
//----------------------------FIN SECCION OPERACIONES--------------------------------------------------------------------------------------------

//-------------------------------INICIO SECCION CATEGORIAS----------------------------------------------------------------------------------------
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
			btnAdvertenciaAceptarEditar.setAttribute(
				"id",
				`confirmar-${btnSeleccionado.id.slice(7)}`
			);
			CategoriaVentanaModal(modalCategoria);
		});
	});
};

// funcion para poner la categoria a la ventana de advertencia
const modalCategoria = document.getElementById("advertencia-categoria");
const modalEliminarCategoria = document.getElementById(
	"eliminar-advertencia-categoria"
);

const CategoriaVentanaModal = (span) =>
	(span.innerHTML = inputEditarCategoria.value);

// funcion para añadir eventos a los botones de eliminar
const eventosBtnsEliminar = (btns) => {
	btns.forEach((btnSeleccionado) => {
		btnSeleccionado.addEventListener("click", () => {
			mostrarSeccion(ventanaModalEliminar, seccionCategoria);

			confirmarEliminarCategoria(
				evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
				obtenerId(
					evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
					btnSeleccionado.id.slice(9)
				)
			);
			btnAceptarEliminar.setAttribute(
				"id",
				`confirm-${btnSeleccionado.id.slice(9)}`
			);
			inputEditarCategoria.value = obtenerId(
				evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
				btnSeleccionado.id.slice(9)
			).nombreCategoria;

			CategoriaVentanaModal(modalEliminarCategoria);
		});
	});
};

// //funcion confirmar elimar operacion
const confirmarEliminarOperacion = (array, operacionId) => {
	const operacionesFiltradas = array.filter(
		(operacionAEliminar) => operacionAEliminar.id !== operacionId
	);
	console.log(operacionesFiltradas);
	localStorage.setItem("operaciones", JSON.stringify(operacionesFiltradas));
	generarTabla(operacionesFiltradas);
};

// evento confirmar eliminar operacion
btnAdvertenciaEliminarOp.addEventListener("click", () => {
	confirmarEliminarOperacion(
		evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
		btnAdvertenciaEliminarOp.id.slice(10)
	);
	mostrarSeccion(contenedorPrincipal, ventanaModalEliminarOp);
});

// funcion para cargar el select de categorias
const cargarSelect = (categorias) => {
	filtroCategoria.innerHTML = "";
	filtroCategoria.innerHTML = `<option value="todas">Todas</option>`;

	if (categorias && categorias.length >= 0) {
		for (option of categorias) {
			const { nombreCategoria } = option;
			filtroCategoria.innerHTML += `
       <option value="${nombreCategoria}">${nombreCategoria}</option>
       `;
		}
	}
};

// console.log(cargarSelect());
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
		eventosBtnsEliminar(document.querySelectorAll(".btn-eliminar"));

		cargarSelect(
			evaluarLocalStorage("categoria", categoriasGuardadas, categorias)
		);
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

btnAdvertenciaAceptarEditar.addEventListener("click", () => {
	editarInput(
		evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
		btnAdvertenciaAceptarEditar.id.slice(10)
	);
	mostrarSeccion(seccionCategoria, ventanaModalEditar);
});

// evento para cancelar modal editar
btnAdvertenciaCancelarEditar.addEventListener("click", () =>
	cancelar(ventanaModalEditar, seccionCategoria)
);

//funcion confirmar elimar categoria
const confirmarEliminarCategoria = (array, categoriaId) => {
	const arrayFiltrado = array.filter(
		(categoriaAEliminar) => categoriaAEliminar.id !== categoriaId
	);
	console.log(arrayFiltrado);
	localStorage.setItem("categoria", JSON.stringify(arrayFiltrado)),
		generarTablaCategorias(arrayFiltrado);
};

//evento confirmar elimar categoria
btnAceptarEliminar.addEventListener("click", () => {
	confirmarEliminarCategoria(
		evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
		btnAceptarEliminar.id.slice(8)
	);
	mostrarSeccion(seccionCategoria, ventanaModalEliminar);
});

// evento cancelar modal eliminar
btnAdvertenciaCancelarEliminar.addEventListener("click", () =>
	cancelar(ventanaModalEliminar, seccionCategoria)
);

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
//---------------------------FIN SECCION CATEGORIAS-----------------------------------------------------------------------------

//----------------------------------------- INICIO SECCION FILTROS-----------------------------------------------------------------

//ocultar filtros
btnOcultarFiltros.addEventListener("click", () => {
	contenedorFiltros.classList.toggle("hidden");
	if (contenedorFiltros.classList.contains("hidden")) {
		btnOcultarFiltros.innerHTML = "Mostrar filtros";
	} else {
		btnOcultarFiltros.innerHTML = "Ocultar filtros";
	}
});
// Filtrar las operaciones según TIPO y CATEGORIA  y generar la tabla
const filtrarPorTipoOCategoria = (
	filtroSeleccionado,
	propiedad,
	operaciones
) => {
	let operacionesFiltradas;

	if (filtroSeleccionado !== "todos" && filtroSeleccionado !== "todas") {
		operacionesFiltradas = operaciones.filter((operacion) => {
			return (
				operacion[propiedad].toLowerCase() === filtroSeleccionado.toLowerCase()
			);
		});
	} else {
		operacionesFiltradas = operaciones;
	}

	return operacionesFiltradas;
};
// filtro ordenar por mayor/ menor monto y de a/z , z/a y mas/menos reciente
const ordenarTabla = (operaciones) => {
	if (filtroOrdenar.value === "menor") {
		return operaciones.sort((a, b) => a.monto - b.monto);
	} else if (filtroOrdenar.value === "mayor") {
		return operaciones.sort((a, b) => b.monto - a.monto);
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
		operaciones.sort(
			(a, b) =>
				new Date(b.fecha.split("/").reverse().join("/")) -
				new Date(a.fecha.split("/").reverse().join("/"))
		);
	} else if (filtroOrdenar.value === "menos") {
		operaciones.sort(
			(a, b) =>
				new Date(a.fecha.split("/").reverse().join("/")) -
				new Date(b.fecha.split("/").reverse().join("/"))
		);
	}
	return operaciones;
};

//filtros acumulativos para tipo, categoria y orden...no para fecha porque no funciona
const aplicarFiltrosAcumulativamente = () => {
	let operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));
	let operacionesFiltradas = [...operacionesGuardadas];

	operacionesFiltradas = filtrarPorTipoOCategoria(
		filtroTipo.value,
		"tipo",
		operacionesFiltradas
	);

	operacionesFiltradas = filtrarPorTipoOCategoria(
		filtroCategoria.value,
		"categoria",
		operacionesFiltradas
	);

	operacionesFiltradas = ordenarTabla(operacionesFiltradas);

	generarTabla(operacionesFiltradas);
};

filtroTipo.addEventListener("change", aplicarFiltrosAcumulativamente);
filtroCategoria.addEventListener("change", aplicarFiltrosAcumulativamente);
filtroOrdenar.addEventListener("change", aplicarFiltrosAcumulativamente);

//Establacer por defecto la fecha actual al input del filtro fecha y arregla el desfazaje de un dia
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

// ------------------------------FIN SECCION FILTROS---------------------------------------------------------------------------------------

//--------------INICIO FORMATEAR FECHAS------------------------------------------------------------------------------------------

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

//-------------------------------FIN FORMATEAR FECHAS-------------------------------------------------------------------------------------------

//----------------------------INICIO SECCION REPORTES-----------------------------------------------------------------------------

//aparecer tablas de reportes cuando hay operaciones cargadas

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

//funcion para obtener las ganacias o gastos por categorias
const obtenerGananciasOGastosPorCategoria = (tipo) => {
	const operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));

	const gananciasOGastosPorCategoria = operacionesGuardadas.reduce(
		(total, operacion) => {
			if (operacion.tipo === tipo) {
				total[operacion.categoria] = total[operacion.categoria] || 0;
				total[operacion.categoria] += parseInt(operacion.monto);
			} else {
				total[operacion.categoria] = total[operacion.categoria] || 0;
			}

			return total;
		},
		{}
	);
	return gananciasOGastosPorCategoria;
};

//funcion para obtener las ganacias o gastos por mes
const obtenerGananciasOGastosPorMes = (tipo) => {
	const operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));

	const gananciasOGastosPorMes = operacionesGuardadas.reduce(
		(total, operacion) => {
			if (operacion.tipo === tipo) {
				const fechaDividida = operacion.fecha.split("/");
				const mes = fechaDividida[1];
				const año = fechaDividida[2];

				const periodo = `${mes}/${año}`;
				total[periodo] = total[periodo] || 0;
				total[periodo] += parseInt(operacion.monto);
			} else {
				const fechaDividida = operacion.fecha.split("/");
				const mes = fechaDividida[1];
				const año = fechaDividida[2];

				const periodo = `${mes}/${año}`;
				total[periodo] = total[periodo] || 0;
			}
			return total;
		},
		{}
	);
	return gananciasOGastosPorMes;
};

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

//funcion para que aparezca el resumen en reportes
const actualizarResumen = () => {
	console.log(
		obtenerBalancePorPropiedad(
			"categoria",
			obtenerGananciasOGastosPorCategoria("ganancia"),
			obtenerGananciasOGastosPorCategoria("gasto")
		)
	);
	const textoBalance =
		obtenerGananciasOGastosPorCategoria("ganancia")[
			obtenerMayorPropiedad(
				obtenerGananciasOGastosPorCategoria("ganancia"),
				"categoria"
			)
		] >
		obtenerGananciasOGastosPorCategoria("gasto")[
			obtenerMayorPropiedad(
				obtenerGananciasOGastosPorCategoria("gasto"),
				"categoria"
			)
		]
			? `+$${
					obtenerBalancePorPropiedad(
						"categoria",
						obtenerGananciasOGastosPorCategoria("ganancia"),
						obtenerGananciasOGastosPorCategoria("gasto")
					)[
						obtenerMayorPropiedad(
							obtenerBalancePorPropiedad(
								"categoria",
								obtenerGananciasOGastosPorCategoria("ganancia"),
								obtenerGananciasOGastosPorCategoria("gasto")
							),
							"categoria"
						)
					]
			  }`
			: `-$${
					obtenerBalancePorPropiedad(
						"categoria",
						obtenerGananciasOGastosPorCategoria("ganancia"),
						obtenerGananciasOGastosPorCategoria("gasto")
					)[
						obtenerMayorPropiedad(
							obtenerBalancePorPropiedad(
								"categoria",
								obtenerGananciasOGastosPorCategoria("ganancia"),
								obtenerGananciasOGastosPorCategoria("gasto")
							),
							"categoria"
						)
					]
			  }`;
	const colorBalance =
		obtenerGananciasOGastosPorCategoria("ganancia")[
			obtenerMayorPropiedad(
				obtenerGananciasOGastosPorCategoria("ganancia"),
				"categoria"
			)
		] >
		obtenerGananciasOGastosPorCategoria("gasto")[
			obtenerMayorPropiedad(
				obtenerGananciasOGastosPorCategoria("gasto"),
				"categoria"
			)
		]
			? "text-green-500"
			: "text-red-500";

	containerCategoriaMayorGanancia.innerText = obtenerMayorPropiedad(
		obtenerGananciasOGastosPorCategoria("ganancia"),
		"categoria"
	);

	containerMayorGanaciaCategoria.innerText = `+$${
		obtenerGananciasOGastosPorCategoria("ganancia")[
			obtenerMayorPropiedad(
				obtenerGananciasOGastosPorCategoria("ganancia"),
				"categoria"
			)
		]
	}`;

	containerMayorGanaciaCategoria.classList.add("text-green-500");
	containerCategoriaMayorGasto.innerText = obtenerMayorPropiedad(
		obtenerGananciasOGastosPorCategoria("gasto"),
		"categoria"
	);
	containerMayorGastoCategoria.innerText = `-$${
		obtenerGananciasOGastosPorCategoria("gasto")[
			obtenerMayorPropiedad(
				obtenerGananciasOGastosPorCategoria("gasto"),
				"categoria"
			)
		]
	}`;
	obtenerGananciasOGastosPorCategoria("gasto")[
		obtenerMayorPropiedad(
			obtenerGananciasOGastosPorCategoria("gasto"),
			"categoria"
		)
	];
	containerMayorGastoCategoria.classList.add("text-red-500");
	containerCategoriaMayorBalance.innerText = obtenerMayorPropiedad(
		obtenerBalancePorPropiedad(
			"categoria",
			obtenerGananciasOGastosPorCategoria("ganancia"),
			obtenerGananciasOGastosPorCategoria("gasto")
		),
		"categoria"
	);
	containerMayorBalanceCategoria.innerText = textoBalance;
	containerMayorBalanceCategoria.classList.add(colorBalance);
	containerMesMayorGanacia.innerText = obtenerMayorPropiedad(
		obtenerGananciasOGastosPorMes("ganancia"),
		"fecha"
	);
	containerMayorGananciaMes.innerText = `+$${
		obtenerGananciasOGastosPorMes("ganancia")[
			obtenerMayorPropiedad(obtenerGananciasOGastosPorMes("ganancia"), "fecha")
		]
	}`;
	containerMayorGananciaMes.classList.add("text-green-500");
	containerfechaMayorGasto.innerText = obtenerMayorPropiedad(
		obtenerGananciasOGastosPorMes("gasto"),
		"fecha"
	);
	containerMayorGastoMes.innerText = `-$${
		obtenerGananciasOGastosPorMes("gasto")[
			obtenerMayorPropiedad(obtenerGananciasOGastosPorMes("gasto"), "fecha")
		]
	}`;
	containerMayorGastoMes.classList.add("text-red-500");
};
actualizarResumen();

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
                <div class="w-[25%] text-left border border-gray-300 md:border-none">${propiedad}</div>
                <div class="w-[25%] text-center text-green-500 border border-gray-300 md:border-none">${textoGanancia}</div>
                <div class="w-[25%] text-center text-red-500 border border-gray-300 md:border-none">${textoGasto}</div>
                <div class="w-[25%] text-center border border-gray-300 md:border-none ${colorBalance}">${textoBalance}</div>
            </div>         
        `;
	}
};

actualizarTotalesPorPropiedad(
	cuerpoTablaTotalesCategorias,
	"categoria",
	obtenerGananciasOGastosPorCategoria("ganancia"),
	obtenerGananciasOGastosPorCategoria("gasto"),
	obtenerBalancePorPropiedad(
		"categoria",
		obtenerGananciasOGastosPorCategoria("ganancia"),
		obtenerGananciasOGastosPorCategoria("gasto")
	)
);
actualizarTotalesPorPropiedad(
	cuerpoTablaTotalesMes,
	"fecha",
	obtenerGananciasOGastosPorMes("ganancia"),
	obtenerGananciasOGastosPorMes("gasto"),
	obtenerBalancePorPropiedad(
		"fecha",
		obtenerGananciasOGastosPorMes("ganancia"),
		obtenerGananciasOGastosPorMes("gasto")
	)
);

//acordarse de ver que no actualiza en cargar una nueva operacion
