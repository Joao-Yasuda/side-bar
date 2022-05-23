const button = document.querySelector("#nav-button");

function toggleMenu(){
    const nav = document.querySelector("nav");
    nav.classList.toggle("active")
}

button.addEventListener("click", toggleMenu);
