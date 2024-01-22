const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".right-nav-menu");


function drpDown(){
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(e){
    if (!e.target.matches('.dropbtn')){
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove("show")
        }
    }
}

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
}))

