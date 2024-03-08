const botonExpandir = document.querySelector(".boton-expandir");

botonExpandir.addEventListener("mousemove", () => {
  // Añadir clase "activo" al botón
  botonExpandir.classList.add("activo");
});

botonExpandir.addEventListener("mouseout", () => {
  // Eliminar la clase "activo" al salir del botón
  botonExpandir.classList.remove("activo");
});