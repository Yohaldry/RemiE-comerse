//*-----------------------------Template para Mujeres--------------------------------------------


const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

const fetchData = async () => {
    try {
        const res = await fetch('apdata.json')
        const data = await res.json()
        //console.log(data)
        pintarcard(data)
    } catch (error) {
        console.log(error)
        
    }
}

const pintarcard = data => {
    data.forEach(producto => {
        console.log(data)
        
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.thumbnailUrl)

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)

    
        
    })

    items.appendChild(fragment)
}

//*----------------------------------Template para hombres ---------------------------------------------------------------
