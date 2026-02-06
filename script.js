let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const intentos = document.querySelector('.intentos');
const ultimoResultado = document.querySelector('.ultimoResultado');
const bajoOAlto = document.querySelector('.bajoOAlto');

const envioAdivina = document.querySelector('.envioAdivina');
const campoAdivina = document.querySelector('.campoAdivina');

let contadorIntentos = 1;
let botonReinicio;

function chequearAdivinanza() {
    let intentoUsuario = Number(campoAdivina.value);
    if (contadorIntentos === 1) {
        intentos.textContent = 'Intentos anteriores: ';
    }
    intentos.textContent += intentoUsuario + ' ';

    if (intentoUsuario === numeroAleatorio) {
        ultimoResultado.textContent = '¡Felicidades! ¡Lo adivinaste!';
        ultimoResultado.classList.add('ganado');
        bajoOAlto.textContent = '';
        finalizarJuego();
    } else if (contadorIntentos === 10) {
        ultimoResultado.textContent = '!!!FIN DEL JUEGO!!!';
        ultimoResultado.classList.add('perdido');
        finalizarJuego();
    } else {
        ultimoResultado.textContent = '¡Incorrecto!';
        ultimoResultado.style.backgroundColor = 'red';
        if(intentoUsuario < numeroAleatorio) {
            bajoOAlto.textContent = '¡El número es muy bajo!';
        } else if(intentoUsuario > numeroAleatorio) {
            bajoOAlto.textContent = '¡El número es muy alto!';
        }
    }

    contadorIntentos++;
    campoAdivina.value = '';
    campoAdivina.focus();
}

envioAdivina.addEventListener('click', chequearAdivinanza);

function finalizarJuego() {
    campoAdivina.disabled = true;
    envioAdivina.disabled = true;
    botonReinicio = document.createElement('button');
    botonReinicio.textContent = 'Iniciar nuevo juego';
    document.body.append(botonReinicio);
    botonReinicio.addEventListener('click', reiniciarJuego);
}

function reiniciarJuego() {
    contadorIntentos = 1;
    const resetParas = document.querySelectorAll('.resultadoParas p');
    for (let i = 0 ; i < resetParas.length ; i++) {
        resetParas[i].textContent = '';
    }

    botonReinicio.parentNode.removeChild(botonReinicio);
    campoAdivina.disabled = false;
    envioAdivina.disabled = false;
    campoAdivina.value = '';
    campoAdivina.focus();
    ultimoResultado.style.backgroundColor = 'white';
    ultimoResultado.classList.remove('ganado', 'perdido');
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}