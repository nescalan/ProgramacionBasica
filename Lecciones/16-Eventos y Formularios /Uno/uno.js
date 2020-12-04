var txtInput = document.getElementById("texto_lineas");
var btnOkey = document.getElementById("botoncito");
btnOkey.addEventListener("click", alertAlarm);

function alertAlarm() {
  keyboardDetection();
}

function keyboardDetection() {
  alert("This button is working, yeahhh");
}
