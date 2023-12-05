


let marca=prompt("ingresa la marca del celular samsung o motorola").toLocaleLowerCase();

if (marca === "samsung" || marca==="motorola"){   
}
else{ alert("por el momento no tomamos esa marca o has escrito mal, vuelve a intentarlo" ) 
logout()
}

let estado=prompt("ingresa la estado bueno o malo").toLocaleLowerCase();

if      (estado === "bueno" && marca==="samsung"){
    alert(" muy bien te daremos 20000 por tu celu!")

}
else if (estado==="malo" && marca==="samsung"){
    alert("te daremos 5000 por tu celu!")}

else if ( estado==="bueno" && marca==="motorola"){
    alert("te daremos 25000 por tu celu!")
    }   
else if ( estado==="malo" && marca==="motorola"){
    alert("te daremos 6000 por tu celu!")
        }       

else {alert("la opcion no es valida")

}
