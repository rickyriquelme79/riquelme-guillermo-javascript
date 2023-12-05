let respuestaCorrecta="candado"
    let intentos=0
    let maxIntentos=3

    while(intentos<maxIntentos){
    let respuestaIngresada=prompt("que es chiquito como un raton y cuida la casa como un leon. te ayudamos ingresa solo la palabra, el ------").toLowerCase();
          

        if(respuestaIngresada===respuestaCorrecta){
          alert("felicidades has ganado ingresa el codigo 54324354 y obten el 50% de descuento")
          break;
        }
        
        else{
          intentos++;
          alert("has fallado en tu intento "+intentos) }

    }
   if(intentos===maxIntentos){
    alert("lo siento , vuelva mañana a probrar  denuevo")
   }

    