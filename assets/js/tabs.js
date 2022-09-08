tabsTrigger = document.querySelectorAll('.portfolio__nav__link')

tabsTrigger.forEach(e => {
    e.addEventListener('click', (event)=>{
        tabsTrigger.forEach(e => {
            e.classList.remove("link_active")
        })
        event.preventDefault()
        tabsCount = e.getAttribute('data-tab')
        e.classList.add("link_active")
        tabsItems = document.querySelectorAll(".portfolio__container")
        console.log(tabsItems);
        tabsItems.forEach(e=>{
            e.classList.remove("active")
        })
        tabsItem = document.querySelector(`[data-tab-content="${tabsCount}"]`)
        tabsItem.classList.add("active")

        
    })
});