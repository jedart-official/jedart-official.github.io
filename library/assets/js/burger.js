let burgerButton = document.querySelector(".header_burger")
let burgerMenu = document.querySelector(".mobile_menu")
burgerButton.addEventListener("click", ()=>{
    burgerMenu.classList.toggle("show")
    burgerButton.classList.toggle("active")
})
