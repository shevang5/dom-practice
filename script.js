var btn = document.querySelector("button");
var growth = document.querySelector(".growth")
var h2 = document.querySelector("h2")

var i = 0;

btn.addEventListener("click",function(){

    let s =  setInterval(function(){
        i++
        console.log(i+"%");
        growth.style.width = i+"%"
        h2.innerHTML = i + "%"

    },100)

    setTimeout(() => {
        clearInterval(s)
    }, 10000);

})

