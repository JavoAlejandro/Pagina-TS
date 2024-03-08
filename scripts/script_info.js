// Obtener elementos del DOM
var abrirModal1 = document.getElementById('servicio1');
var abrirModal2 = document.getElementById('servicio2');
var abrirModal3 = document.getElementById('servicio3');
var abrirModal4 = document.getElementById('servicio4');

var Modal1 = document.getElementById('modal_servicio1');
var Modal2 = document.getElementById('modal_servicio2');
var Modal3 = document.getElementById('modal_servicio3');
var Modal4 = document.getElementById('modal_servicio4');

var cerrarModal1 = document.getElementById('cerrarModal1');
var cerrarModal2 = document.getElementById('cerrarModal2');
var cerrarModal3 = document.getElementById('cerrarModal3');
var cerrarModal4 = document.getElementById('cerrarModal4');

var fondoOscuro = document.getElementById('fondoOscuro');

// Función para abrir el modal
abrirModal1.addEventListener('click', function() {
    Modal1.style.display = 'block';
  fondoOscuro.style.display = 'block';
});

abrirModal2.addEventListener('click', function() {
    Modal2.style.display = 'block';
  fondoOscuro.style.display = 'block';
});

abrirModal3.addEventListener('click', function() {
    Modal3.style.display = 'block';
  fondoOscuro.style.display = 'block';
});

abrirModal4.addEventListener('click', function() {
  Modal4.style.display = 'block';
fondoOscuro.style.display = 'block';
});

// Función para cerrar el modal
cerrarModal1.addEventListener('click', function() {
    Modal1.style.display = 'none';
  fondoOscuro.style.display = 'none';
});

cerrarModal2.addEventListener('click', function() {
    Modal2.style.display = 'none';
  fondoOscuro.style.display = 'none';
});

cerrarModal3.addEventListener('click', function() {
    Modal3.style.display = 'none';
  fondoOscuro.style.display = 'none';
});

cerrarModal4.addEventListener('click', function() {
  Modal4.style.display = 'none';
fondoOscuro.style.display = 'none';
});