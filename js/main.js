let nombreplayer = prompt("Cual es tu nombre?")

const tipodedecision = ["Buena decision", "Decision regular", "Mala decision"]

const iniciojuego = function () {
    alert("Hola " + nombreplayer + " bienvenido al juego.\nBasado en tus decisiones tomaras rutas diferentes por el juego.\nEspero lo disfrutes!!!")
}

const primerapregunta = function () {
    alert("Aqui va la pregunta " + nombreplayer + " imagina que tienes 6 invitados en casa y decides cocinar que preparas?")
    let primerarespuesta = parseInt(prompt("Elije una opcion: \n 1-Pollo al Curry \n 2-Pides Pizza a Domicilio \n 3-Carne con Vegetales Salteados\n 4-No Haces Nada se Acaba el Juego"))
    while (primerarespuesta !== 4) {
        switch (primerarespuesta) {
            case 1:
                pollo()
                break
            case 2:
                pizza()
                break
            case 3:
                carne()
                break
            default:
                alert("lololo")
        }
        primerarespuesta = parseInt(prompt("Elije una opcion: \n 1-Pollo al Curry \n 2-Pides Pizza a Domicilio \n 3-Carne con Vegetales al Horno\n 4-No cocinas se acaba el juego"))
    }
}

const pollo = function(numeroA){
    alert("Empiezas a prepar el pollo.")
    numeroA = parseInt(prompt("¿Cuantos gramos de curry usas?"))
    if(numeroA <= 8){
        alert(tipodedecision[1] + "\nEl sabor te queda plano")
    }
    else if(numeroA <= 15){
        alert(tipodedecision[0] + "\nQueda en el punto correcto de sazon")
    }
    else{
        alert(tipodedecision[2] + "\nDemasiado curry!!!")
    }
}

const carne = function(numeroA){
    alert("Cortas la carne y los vegetelas, preparas el horno a la temperatura ideal")
    numeroA = parseInt(prompt("¿Cuantos minutos lo dejas en el horno?"))
    if(numeroA <= 12){
        alert(tipodedecision[1] + "\nNo te queda bien cocinado pero no sabe mal")
    }
    else if(numeroA <= 30){
        alert(tipodedecision[0] + "\nQueda en el punto ideal de coccion")
    }
    else{
        alert(tipodedecision[2] + "\nSe quemo la comida!!!")
    }
}

const pizza = function(numeroA){
    alert("Llamas a pedir la pizza.")
    numeroA = parseInt(prompt("¿Cuantas porciones pides?"))
    if(numeroA <= 5){
        alert(tipodedecision[2] + "\nMuy pocas porciones!!!")
    }
    else if(numeroA <= 12){
        alert(tipodedecision[0] + "\nPediste lo justo y todos comieron bien")
    }
    else{
        alert(tipodedecision[1] + "\nSobraron porciones, almenos ya sabes que desayunar mañana")
    }
}

iniciojuego()
primerapregunta()


