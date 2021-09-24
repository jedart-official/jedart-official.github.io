window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 3500);
  }
  
// IDENTIFICATOR 
const course_scroll = document.querySelectorAll('a[href^="#"]')
var menu_burger = document.getElementById("header_burger_button");
var up_scroll = document.getElementById("up_scroll")

// EVENTS

menu_burger.addEventListener("click", getMenu);
up_scroll.addEventListener("click", up_to)

// FUNCTIONS



function up_to() {
   window.scrollTo(pageYOffset, 0)
}

function getMenu() {
    var burger_menu = document.getElementById("header_burger_menu").classList.toggle("active");
    var burger_menu = document.getElementById("header_burger_button").classList.toggle("button_active");
}

for ( let course_scroll_button of course_scroll) {
    course_scroll_button.addEventListener("click", function(e) {
        e.preventDefault();
        const id = course_scroll_button.getAttribute("href");
        var hide_menu = document.getElementById("header_burger_menu").classList.remove("active")
        var hide_icon = document.getElementById("header_burger_button").classList.remove("button_active");
        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}







