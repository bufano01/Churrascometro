let adultos = document.getElementById("adultos");
let criancas = document.getElementById("criancas");
let duracao = document.getElementById("duracao");
let calcular = document.getElementById("calcular");
let resultado = document.getElementById("resultado");

function calc() {
  if (duracao.value < 6) {
    let carne = 400 * (parseInt(adultos.value) + parseInt(criancas.value) / 2);
    let cerveja =
      1200 * (parseInt(adultos.value) + parseInt(criancas.value) / 2);
    let bebida =
      1000 * (parseInt(adultos.value) + parseInt(criancas.value) / 2);
    resultado.innerText = `${carne}g de carne \n ${cerveja}ml de cerveja \n ${bebida}ml de refrigerante `;
  } else {
    let carne = 650 * (parseInt(adultos.value) + parseInt(criancas.value) / 2);
    let cerveja =
      2000 * (parseInt(adultos.value) + parseInt(criancas.value) / 2);
    let bebida =
      1500 * (parseInt(adultos.value) + parseInt(criancas.value) / 2);
    resultado.innerText = `${carne}g de carne \n ${cerveja}ml de cerveja \n ${bebida}ml de refrigerante `;
  }
}

calcular.addEventListener("click", calc);
