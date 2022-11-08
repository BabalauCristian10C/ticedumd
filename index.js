const modules = document.querySelectorAll(".moduleShown")
modules.forEach((el)=>{
    el.addEventListener("click", e=>{
        el.closest(".module").querySelector(".moduleHidden").classList.toggle("moduleInactive")
    })
})

document.querySelector("#menuLogo").addEventListener("click", e=>{
    document.querySelector(".menu").classList.toggle("moduleInactive")
})
document.querySelectorAll(".moduleName").forEach(el =>{
    el.addEventListener("click", e=>{
        el.closest(".menuLine").querySelector(".moduleInsides").classList.toggle("moduleInactive")
    })
})