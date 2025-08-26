import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion1/seccion1Component.js";
import { nav } from "./navComponentes/navComponentes.js";


function seccion() {
    
   let seccion = document.createElement('section');
//header
   seccion.appendChild(header());

   //seccion 
   seccion.appendChild(seccion1());


   seccion.appendChild(nav());
  
   return seccion;
   

}

document.body.appendChild(seccion());
