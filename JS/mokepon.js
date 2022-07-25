//DECLARAR LA FUUNCION INICIAR JUEGO 
const iniciarJuego = () =>{
    let botonMascotaJugar = document.getElementById("boton_mascota")
    botonMascotaJugar.addEventListener("click",()=>{
        seleccionarMascotaJugador()
    })
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
    let ataqueEnemigo = numeroAleatorio(1,3)
    let mascota_enemigo = document.querySelector("#mascota_enemigo")
    // 1 hipodoge
    // 2 capipepo
    // ratigueya
    if(ataqueEnemigo == 1){
        mascota_enemigo.textContent = "hipodoge"
    }else if(ataqueEnemigo == 2){
        mascota_enemigo.textContent = "capipepo"
    }else if(ataqueEnemigo == 3){
        mascota_enemigo.textContent = "ratigueya"
    }
}

const numeroAleatorio = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min)
}


//SE CARGARA LA FUNCION EN CUANTO TERMINE DE CARGAR TODA LA PAGINA
window.addEventListener("load", iniciarJuego)





