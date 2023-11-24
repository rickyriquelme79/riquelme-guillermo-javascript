

let nombre
nombre=prompt("ingresar nombre")

let edad
edad=prompt("ingresa tu edad" )

let registrado= "guillermo"


if (nombre == registrado && edad >="18"){
    document.write("Bienvenido"+" "+nombre)
}
    

    else if (nombre==registrado && edad <="18" ){
        document.write("lo siento eres menor largate de aqui ")}
    else if (nombre != "guillermo" && edad>18){
        document.write("no estas registrado en el sitio ")}    
    else if (nombre != "guillermo" &&  edad < "18" ){
        document.write("eres menor y no esta registrado vuela de esta web ")}    

    