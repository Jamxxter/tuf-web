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
var coll = document.getElementsByClassName("collapsible");
var i;
for(i = 0; i < coll.length; i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block"){
            content.style.display = "none";
        }else{
            content.style.display = "block";
        }
    });
}

hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    
}))

