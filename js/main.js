let iniciarg = document.getElementById("iniciar")
let mostrarpregunta = document.getElementById("mostrarpregunta")
let resp1 = document.getElementById("resp1")
let numpregunta = 0

const preguntas = [
    {
        id: 1,
        preguntatxt: "Cuanto es 1 + 1",
        respuesta1: "2",
        respuesta2: "3",
        respuesta3: "4",
    },
    {
        id: 2,
        preguntatxt: "Cuanto es 2 + 2",
        respuesta1: "2",
        respuesta2: "3",
        respuesta3: "4",
    },
    {
        id: 3,
        preguntatxt: "Cuanto es 3 + 2",
        respuesta1: "2",
        respuesta2: "3",
        respuesta3: "5",
    }
]


function iniciargame(arraydepreguntas) {
    if (numpregunta == 1){
        arraydepreguntas.forEach(pregunta => {
            if (pregunta.id == 1){
            card = document.createElement("div")
            card.innerHTML = `<h3>Pregunta No.${pregunta.id}</h3>
                            <h3>${pregunta.preguntatxt}</h3>
                            <button id=resp1>${pregunta.respuesta1}</button>
                            <button id=resp2>${pregunta.respuesta2}</button>
                            <button id=resp3>${pregunta.respuesta3}</button>`
            mostrarpregunta.appendChild(card)
            }
        })
    }
    else if (numpregunta == 2){
        arraydepreguntas.forEach(pregunta => {
            if (pregunta.id == 2){
            card = document.createElement("div")
            card.innerHTML = `<h3>Pregunta No.${pregunta.id}</h3>
                            <h3>${pregunta.preguntatxt}</h3>
                            <button id=resp1>${pregunta.respuesta1}</button>
                            <button id=resp2>${pregunta.respuesta2}</button>
                            <button id=resp3>${pregunta.respuesta3}</button>`
            mostrarpregunta.appendChild(card)
            }
        })
    }
}

iniciarg.onclick = () => {
    numpregunta ++
    iniciargame(preguntas)
}