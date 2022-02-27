


let burgerButton = document.querySelector(".header_burger")
let burgerMenu = document.querySelector(".mobile_menu")
burgerButton.addEventListener("click", ()=>{
    burgerMenu.classList.toggle("show")
    burgerButton.classList.toggle("active")
})

let headerMenuList =  document.querySelectorAll(".header__li-drop")
let headerUl = document.querySelector(".dropdown__menu")

headerMenuList.forEach(e => {
    e.addEventListener("mouseenter", showSub, false);
   e.addEventListener("mouseleave", hideSub, false);
})


function showSub(e) {
    if(this.children.length>1) {
       this.children[1].style.height = "auto";
       this.children[1].style.overflow = "visible";
       this.children[1].style.opacity = "0.9";
    } else {
       return false;
    }
 }

 function hideSub(e) {
    if(this.children.length>1) {
      this.children[1].style.height = "0px";
       this.children[1].style.overflow = "hidden";
       this.children[1].style.opacity = "0";
    } else {
       return false;
    }
}



