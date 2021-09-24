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
    var top, time
    top = document.body.scrollTop || window.pageYOffset;
    time =setInterval(function(){if(top>0)window.scroll(0,top-=5);else clearInterval(time)},1);
}

function getMenu() {
    var burger_menu = document.getElementById("header_burger_menu").classList.toggle("active");
    var burger_menu = document.getElementById("header_burger_button").classList.toggle("button_active");
}

for ( let course_scroll_button of course_scroll) {
    course_scroll_button.addEventListener("click", function(e) {
        e.preventDefault();
        const id = course_scroll_button.getAttribute("href");
        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}







