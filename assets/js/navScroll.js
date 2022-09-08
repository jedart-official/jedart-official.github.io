navScroll = document.querySelectorAll(".right-sidebar__shape")

navScroll.forEach(e=> {
    e.addEventListener('click', ()=> {
        console.log(e.getAttribute('data-scroll'));
        let scrollTo = e.getAttribute('data-scroll')
        console.log(scrollTo);
        scrollEl = document.getElementById(`${scrollTo}`)
        scrollEl.scrollIntoView({behavior: "smooth"})
    })
});