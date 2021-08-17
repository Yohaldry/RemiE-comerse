function usuario(){

    const nombre = document.getElementById('nombre1').value;

    localStorage.setItem('nombreIngreso', nombre);

}


const ingreso = localStorage.getItem('nombreIngreso');

document.querySelector('.paPrincipal').innerHTML = ingreso;

console.log(paPrincipal)