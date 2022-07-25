//DECLARAMOS UNA VARIALBLES GLOBAL
let ataqueJuagdor 
let ataqueEnemigo  


let vidasJuagdor = 3 
let vidasEnemigo = 3


//DECLARAR LA FUUNCION INICIAR JUEGO 
const iniciarJuego = () =>{
    let botonMascotaJugar = document.getElementById("boton_mascota")
    botonMascotaJugar.addEventListener("click",seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton_fuego")
    botonFuego.addEventListener("click" , ataqueFuego)
    
    let botonAgua = document.getElementById("boton_agua")
    botonAgua.addEventListener("click" , ataqueAgua)

    let botonTierra = document.getElementById("boton_tierra")
    botonTierra.addEventListener("click" , ataqueTierra)

    let reiniciar = document.getElementById("reiniciar")
    reiniciar.addEventListener("click", reiniciarJuego)
}

const seleccionarMascotaJugador = () =>{
     //CAPTURANDO LOS ID
    let mascota_jugador = document.getElementById("mascota_jugador")
    let inputRadio1 = document.querySelector("#hipodoge")
    let inputRadio2 = document.querySelector("#capipepo")
    let inputRadio3 = document.querySelector("#ratigueya")


    //VERIFICAMOS CUAL ESTA CHEQUEADO DE LAS OPCIONES
    if( inputRadio1.checked){
        mascota_jugador.innerHTML = "HIPODOGE"
    }else if(inputRadio2.checked){
        mascota_jugador.innerHTML = "CAPIPEPO"
    }else if(inputRadio3.checked){
        mascota_jugador.innerHTML = "RATIGUEYA"
    }else{
        alert("SELECCIONAR UNA OPCION")
    }

    //LA FUNCION ALEATORIA QUE LLAMA AL ENEMIGO
    seleccionarMascotaEnemigo()
}

const seleccionarMascotaEnemigo = () =>{
    let mascotaAleatoria = numeroAleatorio(1,3)
    let mascota_enemigo = document.querySelector("#mascota_enemigo")
    // 1 hipodoge
    // 2 capipepo
    // ratigueya
    if(mascotaAleatoria == 1){
        mascota_enemigo.textContent = "hipodoge"
    }else if(mascotaAleatoria == 2){
        mascota_enemigo.textContent = "capipepo"
    }else if(mascotaAleatoria == 3){
        mascota_enemigo.textContent = "ratigueya"
    }
}

const numeroAleatorio = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const ataqueFuego = () =>{
     ataqueJuagdor = "FUEGO"
     //alert(`ATACASTE CON ${ataqueJuagdor}`)
     ataqueAleatorioEnemigo()
}

const ataqueAgua = () =>{
    ataqueJuagdor = "AGUA"
    //alert(`ATACASTE CON ${ataqueJuagdor}`)
    ataqueAleatorioEnemigo()
}

const ataqueTierra = () =>{
    ataqueJuagdor = "TIERRA"
    //alert(`ATACASTE CON ${ataqueJuagdor}`)
    ataqueAleatorioEnemigo()
}

const ataqueAleatorioEnemigo = () =>{
    let ataqueAleatorio = numeroAleatorio(1,3)
    
    if(ataqueAleatorio == 1){
        ataqueEnemigo = "FUEGO"
        //alert(`TU ENEMIGO ATACO CON  ${ataqueEnemigo}`)
    }else if(ataqueAleatorio == 2){
        ataqueEnemigo = "AGUA"
        //alert(`TU ENEMIGO ATACO CON  ${ataqueEnemigo}`)

    }else if(ataqueAleatorio == 3){
        ataqueEnemigo = "TIERRA"
        //alert(`TU ENEMIGO ATACO CON  ${ataqueEnemigo}`)
    }


    combate()
}

const combate = () =>{

    let span_vidas_jugador = document.getElementById("vidas_jugador")
    let span_vidas_enemigo = document.getElementById("vidas_enemigo")


    if(ataqueEnemigo == ataqueJuagdor){
        crearMensaje("EMPATE")   
    }else if(ataqueJuagdor == "FUEGO" && ataqueEnemigo == "TIERRA"){
        crearMensaje("GANASTE")
        vidasEnemigo-- 
        span_vidas_enemigo.textContent = vidasEnemigo
    }else if(ataqueJuagdor == "AGUA" && ataqueEnemigo == "FUEGO"){
        crearMensaje("GANASTE")
        vidasEnemigo-- 
        span_vidas_enemigo.textContent = vidasEnemigo
    }else if(ataqueJuagdor == "TIERRA" && ataqueEnemigo == "AGUA"){
        crearMensaje("GANASTE")
        vidasEnemigo-- 
        span_vidas_enemigo.textContent = vidasEnemigo
    }else{
        crearMensaje("PERDISTE")
        vidasJuagdor--
        span_vidas_jugador.textContent = vidasJuagdor
    }

    revisarVidas()
}

const revisarVidas = () =>{
    if(vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! ganaste :)")
    }else if(vidasJuagdor == 0)[
        crearMensajeFinal("Lo siento, perdiste :(")
    ]  
}


const crearMensaje = (resultado) =>{
    let secionMensajes = document.getElementById("mensajes")
    let elementParrafo = document.createElement("p")
    elementParrafo.textContent = `TU ATACASTE CON: ${ataqueJuagdor} 
    Y TU ENEMIGO CON: ${ataqueEnemigo}, EL RESULTADO : ${resultado}`

    secionMensajes.appendChild(elementParrafo)
}


const crearMensajeFinal = (resultadoFinal) =>{
    let secionMensajes = document.getElementById("mensajes")
    let elementParrafo = document.createElement("p")
    elementParrafo.textContent = resultadoFinal
    secionMensajes.appendChild(elementParrafo)

    let botonFuego = document.getElementById("boton_fuego")
    botonFuego.disabled = true
    
    let botonAgua = document.getElementById("boton_agua")
    botonAgua.disabled = true

    let botonTierra = document.getElementById("boton_tierra")
    botonTierra.disabled = true
}


const reiniciarJuego = () =>{
    location.reload()
}
//SE CARGARA LA FUNCION EN CUANTO TERMINE DE CARGAR TODA LA PAGINA
window.addEventListener("load", iniciarJuego)





