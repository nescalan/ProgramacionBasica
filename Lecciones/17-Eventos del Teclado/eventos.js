var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento) {
  switch (evento.keyCode) {
    case teclas.UP:
      console.log("Hoy es Up.");
      break;
    case teclas.DOWN:
      console.log("Hoy es Down.");
      break;
    case teclas.LEFT:
      console.log("Hoy es Left. <----");
      break;
    case teclas.RIGHT:
      console.log("Hoy es Right.--->");
      break;
    default:
      console.log("Opcion no permitida");
  }
}
