'use strict'

function removerClasses() {
    const resultado =
        document.getElementById('resultado')

    resultado.classList.remove(
        'apto',
        'nao-apto'
    )
}

function avaliar() {
    const tempo =
        Number(document.getElementById('tempo').value)
    const resultado =
        document.getElementById('resultado')

    removerClasses()

    if (tempo < 14) {
        resultado.textContent = 'Apto'
        resultado.classList.add('apto')

    } else {
        resultado.textContent = 'Não Apto'
        resultado.classList.add('nao-apto')
    }
}