import { item } from '../modulos/item/itemModulo.js';

export function seccion1(){

    let seccion = document.createElement('seccion');
    seccion.className = "seccion1";

    seccion.appendChild(item());
    seccion.appendChild(item());
    seccion.appendChild(item());
    seccion.appendChild(item());

    return seccion;
    

}

//Poner un titulo al cuadro, una imagen y un texto descriptivo (pueden ser los mismos en los 4)