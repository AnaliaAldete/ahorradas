//------------------------------ELEMENTOS----------------------------------------------------------------------------------------------------
const body = document.body;

// contenedores
const seccionPrincipal = document.getElementById("seccion-principal");
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
		seccionPrincipal,
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
		seccionPrincipal,
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
		seccionPrincipal,
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
		seccionPrincipal,
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
		seccionPrincipal,
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
	cancelar(seccionNuevaOperacion, seccionPrincipal)
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
			mostrarSeccion(seccionEditarOp, seccionPrincipal);
			const operacionAEditar = obtenerId(
				evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
				btnSeleccionado.id.slice(9)
			);
			if (operacionAEditar) {
				editarDescripcion.value = operacionAEditar.descripcion;
				editarMonto.value = operacionAEditar.monto;
				editarTipo.value = operacionAEditar.tipo;
				editarSelectCategoria.value = operacionAEditar.categoria.toLowerCase();
				editarFecha.value = operacionAEditar.fecha
					.split("/")
					.reverse()
					.join("-");
			}
			btnAdvertenciaAceptarEditarOp.setAttribute(
				"id",
				`confirmar-${btnSeleccionado.id.slice(9)}`
			);
			cargarSelect(editarSelectCategoria);
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
	cancelar(ventanaModalEditarOp, seccionPrincipal)
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
			mostrarSeccion(ventanaModalEliminarOp, seccionPrincipal);
			btnAdvertenciaEliminarOp.setAttribute(
				"id",
				`confirmar-${btnSeleccionado.id.slice(11)}`
			);
		});
	});
};

//funcion confirmar elimar operacion
const confirmarEliminarOperacion = (array, operacionId) => {
	const operacionesFiltradas = array.filter(
		(operacionAEliminar) => operacionAEliminar.id !== operacionId
	);
	localStorage.setItem("operaciones", JSON.stringify(operacionesFiltradas));
	generarTabla(operacionesFiltradas);

	mostrarImg(operacionesFiltradas);
};

// funcion para que vuelva a verse la imagen cuando esten vacias las operaciones
const mostrarImg = (array) => {
	if (array.length <= 0) {
		mostrarSeccion(contenedorImgOperaciones, contenedorTablaOperaciones);
	}
};

// evento confirmar eliminar operacion
btnAdvertenciaEliminarOp.addEventListener("click", () => {
	confirmarEliminarOperacion(
		evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
		btnAdvertenciaEliminarOp.id.slice(10)
	);
	mostrarSeccion(seccionPrincipal, ventanaModalEliminarOp);
});

//btn cancelar modal de eliminar operacion
btnAdvertenciaCancelarEliminarOp.addEventListener("click", () =>
	cancelar(ventanaModalEliminarOp, seccionPrincipal)
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
				<div class="flex text-center flex-col md:flex-row bg-[#FAEBD7]" id="${operacion.id}">
    <div class="flex md:flex-row md:w-[40%]">
        <div class="flex-1 py-2 border-b border-r border-gray-300 w-[50%] flex items-center justify-center"> <!-- Agrega items-center y justify-center aquí -->
            <span>${operacion.descripcion}</span>
        </div>
        <div class="flex-1 py-2 border-b border-r border-gray-300 w-[50%] flex items-center justify-center"> <!-- Agrega items-center y justify-center aquí -->
            <span>${operacion.categoria}</span>
        </div>
    </div>
    <div class="flex md:w-[60%]">
        <div class="hidden flex-1 py-2 border-b border-r border-gray-300 md:flex justify-center items-center"> <!-- Agrega justify-center y items-center aquí -->
            <span>${operacion.fecha}</span>
        </div>
        <div class="flex-1 py-2 border-b border-r border-gray-300 w-[50%] flex items-center justify-center"> <!-- Agrega items-center y justify-center aquí -->
            <span class="${obtenerColor}">${obtenerSigno}${operacion.monto}</span>
        </div>
        <div class="flex-1 py-2 border-b border-gray-300 w-[50%] flex items-center justify-center"> <!-- Agrega items-center y justify-center aquí -->
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

		mostrarSeccion(seccionPrincipal, contenedorImgOperaciones);

		ajustarVisibilidadCabecera();
		window.addEventListener("DOMContentLoaded", ajustarVisibilidadCabecera);
		window.addEventListener("resize", ajustarVisibilidadCabecera);
	}
};

generarTabla(evaluarLocalStorage("operaciones", operacionesGuardadas, datos));

// funcion para editar las operaciones
const editarSeccionOperaciones = (array, operacionId) => {
	const operacionesEditadas = array.map((operacionAEditar) => {
		if (operacionAEditar.id === operacionId) {
			return {
				...operacionAEditar,
				descripcion: editarDescripcion.value,
				categoria: editarSelectCategoria.value,
				fecha: editarFecha.value.split("-").reverse().join("/"),
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
	mostrarSeccion(seccionPrincipal, ventanaModalEditarOp);
});

//cancelar seccion editar operacion
document
	.getElementById("editar-btn-cancelar--nueva")
	.addEventListener("click", () => cancelar(seccionEditarOp, seccionPrincipal));

// evento para agregar y actualizar operacion
btnAgregarOperacion.addEventListener("click", () => {
	contenedorTablaOperaciones.classList.remove("hidden");
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
			seccionPrincipal,
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
	);
});

// función para que aparezca los input vacios después de generar una nueva operación.
const vaciarInput = () => {
	inputDescripcion.value = "";
	inputMonto.value = "";
	inputFecha.value = fechaActualFormateada;
};

// validación input monto para que no este vacia y no escriban de 10 números
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
			const categoriaId = btnSeleccionado.id.slice(9);
			CategoriaVentanaModal(modalEliminarCategoria, categoriaId);
			btnAceptarEliminar.setAttribute("id", `confirm-${categoriaId}`);
		});
	});
};

// funcion para cargar los select de categorias
const cargarSelect = (select) => {
	const array = evaluarLocalStorage(
		"categoria",
		categoriasGuardadas,
		categorias
	);
	const selects = document.querySelectorAll(".select-categoria");

	if (array && array.length >= 0) {
		for (select of selects) {
			if (select.classList.contains("filtro")) {
				select.innerHTML = "";
				select.innerHTML = `<option value="todas">Todas</option>`;
			} else {
				select.innerHTML = "";
			}

			for (option of array) {
				const { nombreCategoria } = option;
				const nombreMinuscula = nombreCategoria.toLowerCase();
				select.innerHTML += `
             <option value="${nombreMinuscula}">${nombreCategoria}</option>
             `;
			}
		}
	}
};

cargarSelect(filtroCategoria);

// función para generar tabla de categorias si hay datos en local storage
const generarTablaCategorias = (categorias) => {
	const tablaCategorias = document.getElementById("tabla-categorias");
	tablaCategorias.innerHTML = "";

	if (categorias && categorias.length > 0) {
		for (let categoria of categorias) {
			const { id, nombreCategoria } = categoria;
			tablaCategorias.innerHTML += `
            <div class="flex justify-between" id="${id}">
            <p class="p-categorias">${nombreCategoria}</p>
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

		cargarSelect(filtroCategoria);

		// probando cambiar texto en el boton
		// funcion para cambiar texto de btn deshabilitar
		// const btnOn = document.querySelectorAll(".on");

		// for (btn of btnOn) {
		// 	btn.addEventListener("click", () => {
		// 		// const deshabilitarCategoria = () => {
		// 		if (btn.innerHTML === "On") {
		// 			btn.innerText = "Off";
		// 		} else {
		// 			btn.innerText = "On";
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

// función para editar el nombre de la categoria
const editarInput = (array, categoriaId) => {
	const categoriasEditadas = array.map((categoriaAEditar) => {
		if (categoriaAEditar.id === categoriaId) {
			return {
				...categoriaAEditar,
				nombreCategoria: inputEditarCategoria.value,
			};
		} else {
			return categoriaAEditar;
		}
	});
	localStorage.setItem("categoria", JSON.stringify(categoriasEditadas));
	generarTablaCategorias(categoriasEditadas);
};
// Función para actualizar las operaciones con la categoría editada
const actualizarOperacionesConCategoriaEditada = (
	operaciones,
	categoriaEditada
) => {
	return operaciones.map((operacion) => {
		if (operacion.categoria === categoriaEditada.nombreCategoria) {
			operacion.categoria = inputEditarCategoria.value;
		}
		return operacion;
	});
};

// evento para aceptar la edición de la categoría
btnAdvertenciaAceptarEditar.addEventListener("click", () => {
	const categoriaEditada = obtenerId(
		evaluarLocalStorage("categoria", categoriasGuardadas, categorias),
		btnAdvertenciaAceptarEditar.id.slice(10)
	);
	const operacionesActualizadas = actualizarOperacionesConCategoriaEditada(
		evaluarLocalStorage("operaciones", operacionesGuardadas, datos),
		categoriaEditada
	);
	localStorage.setItem("operaciones", JSON.stringify(operacionesActualizadas));
	generarTabla(operacionesActualizadas);
	const categoriasActualizadas = evaluarLocalStorage(
		"categoria",
		categoriasGuardadas,
		categorias
	).map((categoria) => {
		if (categoria.id === categoriaEditada.id) {
			return {
				...categoria,
				nombreCategoria: inputEditarCategoria.value,
			};
		}
		return categoria;
	});

	localStorage.setItem("categoria", JSON.stringify(categoriasActualizadas));
	generarTablaCategorias(categoriasActualizadas);
	cancelar(ventanaModalEditar, seccionPrincipal);
});

// evento para cancelar modal editar
btnAdvertenciaCancelarEditar.addEventListener("click", () =>
	cancelar(ventanaModalEditar, seccionCategoria)
);

// función para eliminar una categoría y las operaciones asociadas a esa categoria
const eliminarCategoriaYOperaciones = (categoriaId) => {
	let operacionesGuardadas = JSON.parse(localStorage.getItem("operaciones"));
	categoriasGuardadas = evaluarLocalStorage(
		"categoria",
		categoriasGuardadas,
		categorias
	);

	const categoriaAEliminar = categoriasGuardadas.find(
		(categoria) => categoria.id === categoriaId
	).nombreCategoria;

	const operacionesFiltradas = operacionesGuardadas.filter(
		(operacion) => operacion.categoria !== categoriaAEliminar
	);
	localStorage.setItem("operaciones", JSON.stringify(operacionesFiltradas));

	const categoriasFiltradas = categoriasGuardadas.filter(
		(categoria) => categoria.id !== categoriaId
	);
	localStorage.setItem("categoria", JSON.stringify(categoriasFiltradas));

	generarTablaCategorias(categoriasFiltradas);
	generarTabla(operacionesFiltradas);
};

// evento para confirmar y eliminar una categoría
btnAceptarEliminar.addEventListener("click", () => {
	const categoriaId = btnAceptarEliminar.id.slice(8);
	eliminarCategoriaYOperaciones(categoriaId);
	cancelar(ventanaModalEliminar, seccionPrincipal);
});

// evento cancelar modal eliminar
btnAdvertenciaCancelarEliminar.addEventListener("click", () =>
	cancelar(ventanaModalEliminar, seccionCategoria)
);

// funcion para condicion de agrgar categoria repetida
const noRepetir = () => {
	const pCategorias = document.querySelectorAll(".p-categorias");
	for (p of pCategorias) {
		if (
			p.innerHTML ===
			inputNombre.value.charAt(0).toUpperCase() + inputNombre.value.slice(1)
		)
			inputNombre.value = "";
	}
};

// funcion para vaciar el input despues de agregar nombre
const vaciarInputNombre = () => (inputNombre.value = "");

// evento para agregar y actualizar categorias
btnAgregarCategoria.addEventListener("click", () => {
	noRepetir();

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

	vaciarInputNombre();
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
const filtrarPorFecha = (fecha, operaciones) => {
	let operacionesFiltradas;
	operacionesFiltradas = operaciones.filter((operacion) => {
		const operacionDate = new Date(
			operacion.fecha.split("/").reverse().join("-")
		);
		return operacionDate >= fecha;
	});
	return operacionesFiltradas;
};

// filtro ordenar por mayor/ menor monto y de a/z , z/a y mas/menos reciente
const ordenarTabla = (operaciones) => {
	if (filtroOrdenar.value === "menor") {
		return operaciones.sort((a, b) => a.monto - b.monto);
	} else if (filtroOrdenar.value === "mayor") {
		return operaciones.sort((a, b) => b.monto - a.monto);
	} else if (filtroOrdenar.value === "Z/A") {
		return operaciones.sort((a, b) => {
			if (a.descripcion < b.descripcion) return 1;
			if (a.descripcion > b.descripcion) return -1;
			return 0;
		});
	} else if (filtroOrdenar.value === "A/Z") {
		return operaciones.sort((a, b) => {
			if (a.descripcion > b.descripcion) return 1;
			if (a.descripcion < b.descripcion) return -1;
			return 0;
		});
	} else if (filtroOrdenar.value === "mas") {
		return operaciones.sort(
			(a, b) =>
				new Date(b.fecha.split("/").reverse().join("/")) -
				new Date(a.fecha.split("/").reverse().join("/"))
		);
	} else if (filtroOrdenar.value === "menos") {
		return operaciones.sort(
			(a, b) =>
				new Date(a.fecha.split("/").reverse().join("/")) -
				new Date(b.fecha.split("/").reverse().join("/"))
		);
	}
	return operaciones;
};

//filtros acumulativos
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

	let fechaFiltro = "";
	if (inputFiltroFecha.value) {
		fechaFiltro = new Date(inputFiltroFecha.value);
	}

	operacionesFiltradas = filtrarPorFecha(fechaFiltro, operacionesFiltradas);

	operacionesFiltradas = ordenarTabla(operacionesFiltradas);
	generarTabla(operacionesFiltradas);
};

filtroTipo.addEventListener("change", aplicarFiltrosAcumulativamente);
filtroCategoria.addEventListener("change", aplicarFiltrosAcumulativamente);
filtroOrdenar.addEventListener("change", aplicarFiltrosAcumulativamente);
inputFiltroFecha.addEventListener("change", aplicarFiltrosAcumulativamente);

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
