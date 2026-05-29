'use strict'

function removerClasses() {

    const resultado =
        document.getElementById('resultado')

    resultado.classList.remove(
        'aprovado',
        'recuperacao',
        'reprovado'
    )
}

function calcularMedia() {

    const nota1 =
        Number(document.getElementById('nota1').value)

    const nota2 =
        Number(document.getElementById('nota2').value)

    const nota3 =
        Number(document.getElementById('nota3').value)

    const media =
        (nota1 + nota2 + nota3) / 3

    const resultado =
        document.getElementById('resultado')

    removerClasses()
    if (media >= 7) {
        resultado.textContent =
            `Média: ${media.toFixed(1)} - Aprovado`

        resultado.classList.add('aprovado')

    } else if (media >= 5) {
        resultado.textContent =
            `Média: ${media.toFixed(1)} - Recuperação`

        resultado.classList.add('recuperacao')
    } else {
        resultado.textContent =
            `Média: ${media.toFixed(1)} - Reprovado`

        resultado.classList.add('reprovado')
    }
}