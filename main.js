const numeroMisterioso = Math.floor(Math.random() * 10 + 1)
const textoNumero = document.querySelector(".numero-misterioso")
const dica = document.querySelector(".dicas")
const palpite = document.querySelector("#palpite")
const botaoPalpite = document.querySelector(".botao-palpite")

console.log(numeroMisterioso);
botaoPalpite.addEventListener("click", darPalpite)

function darPalpite() {
    if (parseInt(palpite.value) == numeroMisterioso) {
        textoNumero.innerHTML = numeroMisterioso
        dica.innerHTML = "Parabéns, você acertou o número misterioso!"
    } else {
        daDica()
    }
    palpite.value = ""
}

function daDica() {
    if (parseInt(palpite.value) < numeroMisterioso) {
        dica.innerHTML = "Tente um número mais alto"
    } else {
        dica.innerHTML = "Tente um número mais baixo"
    }
}
