const items = document.getElementById('items')
const templatecard = document.getElementById('templateCard').content;
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('/carrito/carrito.json') 
        const data = await res.json()
        // console.log(data)
        pintarcard (data)
    } catch (error) {
        console.info(error)
    }
}

const pintarcard = data => {
    console.log(data)
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio 


        const clone = template-card.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild('fragment')
}