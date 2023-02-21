import React from 'react'
import img02 from "../imagenes/img02.png"

export const Itemlistcontainer = (props) => {
  class Producto {
  constructor (id, nombre, precio,img ) {
    this.id= id;
    this.nombre= nombre;
    this.precio= precio;
    this.img= img;
    this.cantidad= 1;  
  }
  }

const vino = new Producto (1,"Rutini", 100 , {img02});

const productos =[vino];
let carrito =[];

const contenedorProductos = document.getElementById("contenedorProductos");



const mostrarProductos= () =>{
  productos.forEach(  producto =>{
    const card = document.createElement("div");
    card.classList.add ("col-xl-3","col-md-6","col-xs-12");
    card.innerHTML =' <div class= "card"> <img src=" ${producto.img}"class= card-img-top imgProductos" alt="${producto.nombre}"> <div class= "card-body"> <h5>${producto.nombre} <h5> <p> ${producto.precio} <p> <button class="button colorBoton"> Agregar </button> </div> </div>'
contenedorProductos.appendChild(card);

mostrarProductos ();
  })
}

  return (
    <div id="contenedorProductos" class= " row text-warning bg-dark "> {props.greeting} 
       </div>


  )
}

