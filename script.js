const menubar = document.querySelector(".menu")
const menuDetails = document.querySelector(".menuDetails")
const articles = document.querySelector(".articles")
let crossmenu = menubar.children[0];
let squaremenu = menubar.children[1];


squaremenu.addEventListener("click",()=>{
    menubar.style.transform =" rotate(-180deg)"
    menubar.style.backgroundColor = "red"
    // articles.style.top ="-20%"
    // articles.style.left ="20%"
    articles.style.transform =" translateY(-30%)"
    // articles.style.height ="120vh"
   
    setTimeout(()=>{
        menuDetails.style.transform = "translateX(0%)"
    },500)

})

crossmenu.addEventListener("click",()=>{
    menubar.style.transform =" rotate(0deg)"
    menubar.style.backgroundColor = "white"
    menuDetails.style.transform = "translateX(-100%)"
    setTimeout(()=>{
        articles.style.transform ="translateY(0)"
    },300)
})