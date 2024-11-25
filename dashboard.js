function toggling(){
    const mobileMenu = document.querySelector("#mobilemenu");
    const menu = document.querySelector("#m-menu")
    mobileMenu.addEventListener("click",function(){
        if(menu.classList.contains("d-none")){
            menu.classList.remove("d-none")
        }
        else{
            menu.classList.add("d-none")
        }
        
    })
}