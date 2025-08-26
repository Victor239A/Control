export function nav() {
  
    let icons = ["🏠", "📦", "❓", "🛒"];
  

    let nav = document.createElement("div");
    nav.classList.add("nav");
  
    
    icons.forEach(icon => {
      let item = document.createElement("div");
      item.classList.add("nav-item");
      item.textContent = icon;
      nav.appendChild(item);
    });
  
    return nav;
  }
  