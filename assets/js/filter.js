let dropwown = document.querySelector(".sort-form__button")
let dropwownList = document.querySelector(".sort-form__list")
let filterList = document.querySelector(".filters__list")
dropwown.addEventListener("click", (e)=> {
    if(dropwownList.classList.contains('showList')){
        dropwownList.classList.remove("showList");
        dropwownList.style.height = `0px`;
    } else{
        dropwownList.style.height = `${filterList.scrollHeight}px`;
        dropwownList.classList.add("showList");
    }
})

let filterChildren = Array.from(filterList.children)
filterChildren.forEach(e => {
    e.addEventListener('click',()=>{
        let sortText = document.querySelector(".sort-text").innerText = e.innerText;
        dropwownList.classList.remove("showList");
        dropwownList.style.height = `0px`;
    })
});
