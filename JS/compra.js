//variable global
let selected = null
const precio = 200
let category = null
let desc = null
let cant = null
total = null

//elegir tarjetas
let click = false
const cardsContainer = document.querySelectorAll('.btn.card')
//console.log(cardsContainer)

//cambiar color a la tarjeta elegida

const colors = ['bg-info', 'bg-success', 'bg-warning']
const transparent = ['bg-transparent']

const changeColor = (container, index, back = false) => {
    const i = Number(index)
    if (!back) {
        container.classList.add(colors[i])
    }
    else { container.classList.remove(colors[i]) }
}

const cardOver = (e) => {
    const { index } = e.target.dataset
    changeColor(e.target, index)
}

const cardOut = (e) => {
    const { index } = e.target.dataset
    changeColor(e.target, index, true)
}

const cardClick = (e) => {
    selected = e.currentTarget.dataset.index
    matchCategory(selected)
    eventAssignmentAll()
}

const eventsAssignment = (container) => {
    container.addEventListener('mouseenter', cardOver)
    container.addEventListener('click', cardClick)
    container.addEventListener('mouseleave', cardOut)
}

const eventsCleaner = (container) => {
    container.removeEventListener('mouseenter', cardOver)
    container.removeEventListener('click', cardClick)
    container.removeEventListener('mouseleave', cardOut)
}

const eventAssignmentAll = () => {
    for (let container of cardsContainer) {
        eventsCleaner(container)
        const { index } = container.dataset
        if (index !== selected) {
            eventsAssignment(container)
            changeColor(container, index, true)
        }
    }
}

const matchCategory = (selection) => {
    switch (selection) {
        case "0": {
            formu.category.value = '1'
            break
        }
        case "1": {
            formu.category.value = '2'
            break
        }
        case "2": {
            formu.category.value = '3'
            break
        }
        default: {
            throw new console.error('Algo paso en Match Category', error);
        }
    }
}

eventAssignmentAll()

// manipulacion formulario

//variables
const formu = document.forms.formulario
//console.log(formu);
const inputs = formu.getElementsByTagName('input')
//console.log(inputs);
const selectContainer = document.getElementsByTagName('select')[0]
//console.log(selectContainer);
const totalTag = document.getElementById('total')
//console.log(totalTag);
const borrarBtn = document.getElementById('borrar')
const resumenBtn = document.getElementById('resumen')

//cambiar categorias

const categorias = {
    1: { percent: 80, value: '0' },
    2: { percent: 50, value: '1' },
    3: { percent: 15, value: '2' }
}

const resetCategory = () => {
    selected = null
    totalTag.value = ''
    cant = null
    totalTag.innerText = totalText
    eventAssignmentAll()
}

const setCategory = (e) => {
    const option = e.target.value
    if (option === 'none') {
        resetCategory()
        return
    }
    category = option
    //console.log({category});
    const index = categorias[category].value
    //console.log(index);
    const container = cardsContainer[index]
    selected = index
    desc = categorias[category].percent
    //console.log({desc});
    changeColor(container, index)
    eventAssignmentAll()
    totalPrice()
    //console.log(categorias[category].percent);
}

formu.category.addEventListener('change', setCategory)


//cantidades
const setCantidad = (e) => {
    const { value } = e.target
    if (value < 0 || isNaN(value)) {
        e.target.value = 0
        total = null
        return
    }
    cant = value
    //console.log(cant);
    totalPrice()
}

//formu.cantidad.addEventListener('change',setCantidad)
formu.cantidad.addEventListener('keyup', setCantidad)

//totales
const totalText = 'Total a pagar: $'
totalTag.innerText = totalText


const totalPrice = () => {
    if (!cant || !category) { return }

    const totalValue = precio * cant
    //console.log({totalValue});
    //console.log(category)
    const discount = (totalValue / 100) * categorias[category].percent
    //console.log({discount});
    total = totalValue - discount
    totalTag.innerText = totalText + total
    //console.log(total);

}
totalPrice()

// Borrar

const borrar = (e) => {
    for (let input of inputs) {
        input.value = ''
    }
    totalTag.innerText = totalText
    selectContainer.value = 'none'
    resetCategory()
}

borrarBtn.addEventListener('click', borrar)

//resumen

const submit = (e) => {
    e.preventDefault()
    const { firstName, lastName, email, cantidad, category, } = formu
    const verified = {
        firstName: firstName.value !== '',
        lastName: lastName.value !== '',
        email: email.value.includes('@'),
        cantidad: cantidad.value > '0',
        category: category.value !== 'none'
    }
    const values = Object.values(verified)
    //console.log(values);
    const submitAccepted = values.every(value => value)
    //console.log(submitAccepted);
    submitAccepted
        ? location.href = './exito.html'
        : alert('Debes completar todos los campos')
}

resumenBtn.addEventListener('click', submit)