var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var xi, yf;
var colorcito = "#FF5733";

while (l < lineas) {
  xi = 10 * l;
  yf = 10 * (l + 1);
  dibujarLinea(colorcito, 0, xi, yf, 299);
  console.log("Linea: " + l);
  l++;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

dibujarLinea(colorcito, 1, 1, 1, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);
