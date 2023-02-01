function distanceInput() {
  var quantidadeAnoLuz = document.getElementById("distancia-planetas").value;
  var anosLuzEmMetros = 9.461 * 10 ** 15;
  var valorEmMetros = quantidadeAnoLuz * anosLuzEmMetros;
  valorEmMetros = valorEmMetros.toFixed(2);
  var result = document.getElementById("result");
  var nome = document.getElementById("nome").value;

  result.textContent =
    "Ola, " +
    nome +
    " a distancia em metros por percorrer é: " +
    valorEmMetros +
    "Mts.";
}
submit_info.addEventListener("click", distanceInput, false);

function SomenteNumero(e) {
  var tecla = window.event ? event.keyCode : e.which;
  if (tecla > 47 && tecla < 58) return true;
  else {
    if (tecla == 8 || tecla == 0) return true;
    else return false;
  }
}
