const player = {
    personagem: document.querySelector("#jogador"),
    velocidadeDeMovimento: 30,
}

const pressionado = {
    d: false,
    a: false,
    space: false
}

function andando (evento) {
    let tecla = evento.key;
    if(tecla == "a") {
        if(pressionado.a == false) {
            pressionado.a = true;
            let velhaDistancia = Number(getComputedStyle(player.personagem).left.split("px")[0])
            let novaDistancia = velhaDistancia - player.velocidadeDeMovimento
            player.personagem.style.left = novaDistancia + "px"
            console.log("a")

            pressionado.a = setInterval (() => {
            let velhaDistancia = Number(getComputedStyle(player.personagem).left.split("px")[0])
            let novaDistancia = velhaDistancia - player.velocidadeDeMovimento
            player.personagem.style.left = novaDistancia + "px"
            }, 100);
        }
    }
    if(tecla == "d") {
        if(pressionado.d == false) {
            pressionado.d = true;
            let velhaDistancia = Number(getComputedStyle(player.personagem).left.split("px")[0])
            let novaDistancia = velhaDistancia + player.velocidadeDeMovimento
            player.personagem.style.left = novaDistancia + "px"
            console.log("a")

            pressionado.d = setInterval (() => {
            let velhaDistancia = Number(getComputedStyle(player.personagem).left.split("px")[0])
            let novaDistancia = velhaDistancia + player.velocidadeDeMovimento
            player.personagem.style.left = novaDistancia + "px"
            }, 100);
        }
    }
    if(tecla == " ") {
        if(pressionado.space == false) {
            pressionado.space = true;
            let velhaDistancia = Number(getComputedStyle(player.personagem).top.split("px")[0])
            let pulo = 150
            let novaDistancia = velhaDistancia - pulo
            player.personagem.style.top = novaDistancia + "px"

            pressionado.space = setInterval (() =>{
            let velhaDistancia = Number(getComputedStyle(player.personagem).top.split("px")[0])
            let pulo = 150
            let novaDistancia = velhaDistancia - pulo
            player.personagem.style.top = novaDistancia + "px"
            }, 100);
            console.log ("oi")
        }
    }
}

function parando () {
        clearInterval(pressionado.a)
        pressionado.a = false;

        clearInterval(pressionado.d)
        pressionado.d = false;

        clearInterval(pressionado.space)
        pressionado.space = false;
}

window.addEventListener('keydown', andando)
window.addEventListener('keyup', parando)