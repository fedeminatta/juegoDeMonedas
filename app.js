let urlDeLaMoneda = 'https://www.html6.es/img/moneda.png';
let money = 5;
let coincidencia = 0;

const input = document.querySelector('#campo');
const btn = document.querySelector('.boton');
const contenido = document.querySelector('.contenido');

vaciar();
dibujarMonedas();

btn.addEventListener('click', () => {
	coincidencia = 0;
	if (input.value >= 2 && input.value <= 9) {
		crearCuadros();
	} else {
		vaciar();
	}
});

function crearCuadros() {
	contenido.innerHTML = '';
	for (i = 0; i < input.value; i++) {
		let random = Math.ceil(Math.random() * input.value);
		let estilo = comprobar(random);
		contenido.insertAdjacentHTML('afterbegin', `<div class='cuadro ${estilo}'>${random}</div>`);
	}
	if (coincidencia == 1) {
		var mensaje = `Se ha producido ${coincidencia} coincidencia y has ganado ${coincidencia} moneda.`;
		money += coincidencia;
	} else if (coincidencia > 0) {
		var mensaje = `Se ha producido ${coincidencia} coincidencias y has ganado ${coincidencia} monedas.`;
		money += coincidencia;
	} else {
		var mensaje = `No se ha producido ninguna coincidencia y has pedido ${input.value} monedas`;
		money -= input.value;
	}
	document.querySelector('.informacion').innerHTML = mensaje;
	dibujarMonedas();
	vaciar();
}

function comprobar(random) {
	if (random == input.value) {
		coincidencia++;
		return 'verde';
	} else {
		return 'rojo';
	}
}

function dibujarMonedas() {
	m = document.querySelector('.monedas');
	m.innerHTML = `<div> Monedas = <span>${money}</span>`;
	for (i = 0; i < money; i++) {
		m.insertAdjacentHTML('beforeend', `<img  src='${urlDeLaMoneda}'></img>`);
	}
}

function vaciar() {
	document.querySelector('#campo').value = '';
	document.querySelector('#campo').focus();
}
