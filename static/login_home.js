const menuButtom=document.getElementById("menu")
const menulist=document.getElementById("menu_list")

menuButtom.addEventListener("click",(active)=>{
    active.preventDefault();
    menulist.style.opacity=1
    menuButtom.addEventListener("click",(active)=>{
        active.preventDefault();
        setTimeout(function(){
            window.location.reload();
        },100)
    })
})