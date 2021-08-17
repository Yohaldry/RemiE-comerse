const cards1 = document.getElementById('cards1')
const templateCard1 = document.getElementById('template-card1').content
const templateFooter1 = document.getElementById('template-footer1').content
const templateCarrito1 = document.getElementById('template-carrito1').content
const footer1 = document.getElementById('footer1').content
const items1 = document.getElementById('items1').content

const fragment1 = document.createDocumentFragment()
let carrito1 = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData1()
})

cards1.addEventListener('click', e => {
    addCarrito1(e) 
})

const fetchData1 = async () => {
    try {
        const res = await fetch('hombres.json')
        const data = await res.json()
        //console.log(data)
        pintarcard1(data)
    } catch (error) {
        console.log(error)
        
    }
}

const pintarcard1 = data => {
    data.forEach(producto => {
        
        templateCard1.querySelector('h5').textContent = producto.title
        templateCard1.querySelector('p').textContent = producto.precio
        templateCard1.querySelector('img').setAttribute("src", producto.thumbnailUrl)
        templateCard.querySelector('.btn-dark').dataset.id = producto.id

        templateCard1.querySelector('.btn-dark').dataset.id = producto.id

        const clone = templateCard1.cloneNode(true)
        fragment1.appendChild(clone)

    
        
    })

    cards1.appendChild(fragment1)
}

const addCarrito1 = e => {

 
    if(e.target.classList.contains('btn-dark')){
        setCarrito1(e.target.parentElement)
    
    }
    e.stopPropagation()
}

const setCarrito1 = objeto => {

const producto1 = {

    id: objeto.querySelector('.btn-dark').dataset.id,
    title: objeto.querySelector('h5').textContent,
    precio: objeto.querySelector('p').textContent,
    cantidad1: 1
}

if(carrito1.hasOwnProperty(producto1.id)) {
producto1.cantidad1 = carrito1[producto1.id].cantidad1 + 1

}

carrito1[producto1.id] = {...producto1}

pintarCarrito()

}

const pintarCarrito = () => {

    Object.values(carrito1).forEach(producto1 => {

        templateCarrito1.querySelector('th').textContent = producto1.id
        templateCarrito1.querySelectorAll('td')[1].textContent = producto1.title
        templateCarrito1.querySelectorAll('td')[0].textContent = producto1.cantidad1
        templateCarrito1.querySelector('.btn-info').dataset.id = producto1.id
        templateCarrito1.querySelector('.btn-danger').dataset.id = producto1.id
        templateCarrito1.querySelector('span').textContent = producto1.cantidad1 * producto1.precio
        const clone = templateCarrito1.cloneNode(true)
        fragment1.appendChild(clone)
     
    })
    cards1.appendChild(fragment1)
  
}

//*----------------------------------Template para hombres ---------------------------------------------------------------

