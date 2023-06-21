const Cards = document.querySelectorAll('.btn.card')
//console.log(cards);
const formulario = document.getElementsByName('formulario')[0]
//console.log(formulario);
const inputs = formulario.querySelectorAll('input')
//console.log(inputs);

//tarjetas

let selected = null
const colores = ['bg-info', 'bg-success', 'bg-warning']

const colorOn = (e) => {
    //console.log(e.target.dataset.index);
    const { index } = e.target.dataset
    //console.log(index);
    e.target.classList.add(colores[index])
}

const colorOff = (e) => {
    const { index } = e.target.dataset
    e.target.classList.remove(colores[index])
}

const clickOn = (e) => {
    selected = e.currentTarget.dataset.index
    formulario.catSelect.value = ++selected
    calcTotal()
}

const eventListener = (card) => {
    card.addEventListener('mouseenter', colorOn)
    card.addEventListener('mouseleave', colorOff)
    card.addEventListener('click', clickOn)
    //console.log(selected);
}


const eventHandler = () => {
    for (let card of Cards) {
        const { index } = card.dataset
        eventListener(card)
    }
}

eventHandler()

//Trabajo con el formulario

const totalTag = document.getElementById('total')
const defaultValue = 'Total a pagar: $'
totalTag.value = defaultValue;
//console.log(totalTag);
const precio = 200


//Borrar todos los datos

const clearAll = () => {
    for (let input of inputs) {
        input.value = ''
        totalTag.value = defaultValue
        formulario.catSelect.value = 'none'
        selected = null
    }
}

const borrar = document.getElementById('borrar')
//console.log(borrar);
borrar.addEventListener('click', clearAll)

//Calcular totales

const cant = document.getElementById('cantidad')
const selectMenu = document.getElementById('catSelect')
//console.log(selectMenu);

const calcTotal = () => {
    //console.log(cant)
    let desc = 0
    const i = selected ? selected.toString() : null //Asigna el valor de selected a la variable i pero como string para que lo pueda usar el switch
    if (cant.value === '') {
        totalTag.value = defaultValue
        //totalTag.value = defaultValue + precio * cant.value 
    }
    else {
        if (i === null) { 
            totalTag.value = defaultValue
            totalTag.value = totalTag.value + (precio * cant.value) //Asigna el precio sin descuento
        }
        else {
            switch (i) {
                case "1": {
                    desc = '20'
                    break
                }
                case "2": {
                    desc = '50'
                    break
                }
                case "3": {
                    desc = '85'
                    break
                }
            }
            //console.log(desc);
            totalTag.value = defaultValue
            totalTag.value = totalTag.value + (desc / 100) * precio * cant.value
        }
    }
}


const selectChoice = (e) => {
    if (e.target.value === 'none') {
        selected = null
    }
    else {
        selected = e.target.value
    }
    calcTotal()
}

cant.addEventListener('change', calcTotal)
selectMenu.addEventListener('change', selectChoice)

//Comprobar campos de datos y boton Resumen
let flag = true
const resumenOk = (e) => {
    let flag = true
    for (let input of inputs) {
        if (input.value.trim() === '') {
            flag = false // Si algun campo esta vacio coloco la bander an false
            break; // No es necesario seguir validando
        }

        if (input.name === 'correo' && !input.value.includes('@')) {
            flag = false; // Si no tiene @ coloco la bandera en false
            break; // No es necesario seguir validando
        }
    }

    if (flag) {
        location.href = './exito.html' // Si todos los campos son validos, redirige a la pagina
    } else {
        alert('Debes completar todos los campos') // Si aglun campo falla muestra error
    }
}

const resumen = document.getElementById('resumen')
resumen.addEventListener('click', resumenOk)