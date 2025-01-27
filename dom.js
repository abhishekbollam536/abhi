// let element = document.getElementById("demo");
// element.innerText = "DOM";
// console.log(element);

let bigColor = document.querySelectorAll(".bgColor");
[...bgColor].map((element)=>{
    element.addEventListener("mouseover",()=>{
        element.style.backgroundColor=element.innertext;

    });
    element.addEventListener("mouseleave",()=>{
        element.style.backgroundColor = "transparant";
    })
})