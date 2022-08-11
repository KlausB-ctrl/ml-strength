const HEADER_TEMPLATE = document.createElement('template');

if(document.title === 'ML Strength - Health and Fitness') {
    HEADER_TEMPLATE.innerHTML = 
    `<header>
        <button id="nav-button">MENU <i class="fa-solid fa-bars"></i></button>
    </header>
    <nav id="nav-menu">
        <a href="./index.html">HOME</a>
        <a href="./html/book.html">BOOK</a>
        <a href="./html/about.html">ABOUT</a>
        <a href="./html/classes.html">CLASSES</a>
        <a href="./html/shop.html">SHOP</a>
    </nav>`;
} 

else {
    HEADER_TEMPLATE.innerHTML = 
    `<header>
        <button id="nav-button">MENU <i class="fa-solid fa-bars"></i></button>
    </header>
    <nav id="nav-menu">
        <a href="../index.html">HOME</a>
        <a href="./book.html">BOOK</a>
        <a href="./about.html">ABOUT</a>
        <a href="./classes.html">CLASSES</a>
        <a href="./shop.html">SHOP</a>
    </nav>`; 
}

document.body.appendChild(HEADER_TEMPLATE.content);

let navButtonEl = document.getElementById("nav-button");
let navMenuEl = document.getElementById("nav-menu");

navMenuEl.style.display = "none";
navButtonEl.addEventListener("click", function() { 
    if(navMenuEl.style.display === "none") {
        navMenuEl.style.display = "flex";
        navButtonEl.innerHTML=`MENU <i class="fa-solid fa-xmark"></i>`
    }
    
    else {
        navMenuEl.style.display = "none";
        navButtonEl.innerHTML=`MENU <i class="fa-solid fa-bars"></i>`
    }
});