import React from "react";
import img01 from "../imagenes/img01.png"
import { Cartwidget } from "./Cartwidget";

export const Navbar = () => {
    return (
      <>
<nav class="navbar navbar-expand-lg bg-warning ">
  <div class="container-fluid d-flex">
    <a class="navbar-brand p-2 flex-fill" href="#">Alaska-Drinks <img src={img01} /> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item">
          <a class="nav-link" href="#">Cervezas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Vinos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Whisky</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gin</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Vodka</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Otras</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Promos</a>
        </li>
        
      </ul>
      
      
    </div>
    <Cartwidget/>
  </div>
  
</nav>

</>


    );
  }