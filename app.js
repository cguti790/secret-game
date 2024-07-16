let numSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

numSecreto = genNumSecreto();


function genNumSecreto(){
    let numGenerado = Math.floor(Math.random()*numeroMaximo)+1 
    console.log(`NS: ${numGenerado}`)
    console.log(listaNumerosSorteados)

    //Si ya sorteamos todos los numeros:
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se jugaron todos los numeros!')

    } else {

        if (listaNumerosSorteados.includes(numGenerado)){
            /*Recursividad. Para salir de ella hay que asignarnuna condicion de salida*/
            return genNumSecreto();

        } else {
            listaNumerosSorteados.push(numGenerado);
            return numGenerado;
        }
    }

}

function asignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(`NU:${numUsuario}`);
        
    if (numSecreto === numUsuario){
        asignarTextoElemento('p',`Ganaste en ${intentos} ${(intentos === 1)? 'intento':'intentos'}!`);
        document.querySelector('#reiniciar').removeAttribute('disabled');
        
    } else {
        numUsuario > numSecreto ? asignarTextoElemento('p','Muy alto!'):asignarTextoElemento('p','Muy bajo!');
        intentos++;

        if (intentos == 4){
            asignarTextoElemento('h1','Fin del Juego!');
            asignarTextoElemento('p','Intenta de Nuevo');
            document.querySelector('#reiniciar').removeAttribute('disabled');
        }

        console.log(`intentos: ${intentos}`)
        limpiarCaja();
    }
    return
}


function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Bienvenido al Juego!');
    asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`);
    numSecreto = genNumSecreto();
    console.log(numSecreto);
}


function reiniciarJuego() {
    limpiarCaja();
    //Condiciones Iniciales
    condicionesIniciales();
    //deshabilitar el boton
    document.querySelector('#reiniciar').setAttribute('disabled','true')
    //inicializar intentos
    intentos = 1
}

asignarTextoElemento('h1','Bienvenido al Juego!');
asignarTextoElemento('p',`Ingresa un número del 1 al ${numeroMaximo}`);







