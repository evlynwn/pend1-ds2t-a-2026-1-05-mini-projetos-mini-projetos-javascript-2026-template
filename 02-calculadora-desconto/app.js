'use strict'

function removerClasses() {
    const resultado = document.getElementById('resultado')
    resultado.classList.remove('verde', 'amarelo', 'vermelho')
}

function calcularValorEconomizado(preco, desconto) {
    return preco * (desconto / 100)
}

function calcularPrecoFinal(preco, valorEconomizado) {
    return preco - valorEconomizado
}

function selecionarCor(desconto) {
    if (desconto <= 5) {
        return 'verde'
    } else if (desconto <= 10) {
        return 'amarelo'
    } else {
        return 'vermelho'
    }
}

function handleClick() {

    const preco = Number(document.getElementById('preco').value)

    const desconto = Number(document.getElementById('desconto').value)

    const resultado = document.getElementById('resultado')

    const valorEconomizado =
        calcularValorEconomizado(preco, desconto)

    const precoFinal =
        calcularPrecoFinal(preco, valorEconomizado)

    const cor = selecionarCor(desconto)

    removerClasses()

    resultado.textContent =
        `Economizou R$ ${valorEconomizado.toFixed(2)} | Preço final: R$ ${precoFinal.toFixed(2)}`

    resultado.classList.add(cor)
}