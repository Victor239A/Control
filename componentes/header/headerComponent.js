function header() {
    let header = document.createElement('header');
    header.className = "headercontenedor";

    let text = document.createElement('h1'); 
    text.className = "header-texto";
    text.innerText = "Viktoor";
    
    let div = document.createElement('div');
    div.className = "header-circulo";

    let img = document.createElement('img');
    img.className = "imagen";
    img.src = "github.jpeg"; 
    
    div.appendChild(img); 
    header.appendChild(text);
    header.appendChild(div);

    return header;
}

export { header }