const iniciarJuego = () =>{
    let botonMascotaJugar = document.getElementById("boton_mascota")
    botonMascotaJugar.addEventListener("click",()=>{
        seleccionarMascotaJugador()
    })
}

const seleccionarMascotaJugador = () =>{
    let mascota_jugador = document.getElementById("mascota_jugador")

    if(document.getElementById("hipodoge"). checked){
        //alert("SELECCIONASTE A HIPODOGE")
        mascota_jugador.innerHTML = "HIPODOGE"
    }else if(document.getElementById("capipepo").checked){
        //alert("SELECCIONASTE A CAPIPEPO")
        mascota_jugador.innerHTML = "CAPIPEPO"
    }else if(document.getElementById("ratigueya").checked){
        //alert("SELECCIONASTE A RATIGUYA")
        mascota_jugador.innerHTML = "RATIGUYA"
    }else{
        alert("NO SELECCIONASTE NINGUNO")
    }
}

window.addEventListener("load", iniciarJuego)