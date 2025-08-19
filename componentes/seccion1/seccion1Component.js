import { item } from '../modulos/item/itemModulo.js';
import { productos } from "../../database/productos.js"; 

export function seccion1() {
    let seccion = document.createElement('section'); 
    seccion.className = "seccion1";

    productos.forEach(element => {
        seccion.appendChild(item(element.description, element.image));
    });

    return seccion;
}
