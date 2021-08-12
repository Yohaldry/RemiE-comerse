const items1 = document.getElementById('items1')
const templateCard1 = document.getElementById('template-card1').content
const fragment1 = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchData1()
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
        console.log(data)
        
        templateCard1.querySelector('h5').textContent = producto.title
        templateCard1.querySelector('p').textContent = producto.precio
        templateCard1.querySelector('img').setAttribute("src", producto.thumbnailUrl)

        const clone = templateCard1.cloneNode(true)
        fragment1.appendChild(clone)

    
        
    })

    items1.appendChild(fragment1)
}

//*----------------------------------Template para hombres ---------------------------------------------------------------

