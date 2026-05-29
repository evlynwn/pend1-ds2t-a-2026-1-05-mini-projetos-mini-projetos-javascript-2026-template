'use strict'

const botao = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

botao.onclick = function () {

    const nome = document.getElementById("nome").value
    const altura = Number(document.getElementById("altura").value)
    const peso = Number(document.getElementById("peso").value)

    const imc = peso / (altura * altura)

    let classificacao = ""

    if (imc < 18.5) {
        classificacao = "Abaixo do peso"
        resultado.style.backgroundColor = "#1e3a5f"

    } else if (imc < 25) {
        classificacao = "Peso normal"
        resultado.style.backgroundColor = "#14532d"

    } else if (imc < 30) {
        classificacao = "Sobrepeso"
        resultado.style.backgroundColor = "#713f12"

    } else if (imc < 35) {
        classificacao = "Obesidade grau I"
        resultado.style.backgroundColor = "#7f1d1d"

    } else if (imc < 40) {
        classificacao = "Obesidade grau II"
        resultado.style.backgroundColor = "#6b0f0f"

    } else {
        classificacao = "Obesidade grau III"
        resultado.style.backgroundColor = "#450a0a"
    }

    resultado.innerHTML = `
        Nome: ${nome} <br>
        IMC: ${imc.toFixed(2)} <br>
        Classificação: ${classificacao}
    `
}