// let x = document.createElement("h1");
// x.innerText = "Dynamic creation of html element from JS";
// x.setAttribute("id , demo");
// console.log(x);
// document.body.appendChild(x);

// let image = document.createElement("img");
// image.src = "";
// console.log(image);
// document.body.appendChild(image);

let mainEle = document.createElement("div");
mainEle.setAttribute("class" , "mainBlock");
console.log(mainEle);

let topEle = document.createElement("div");
topEle.setAttribute("class" , "topBlock");

let image = document.createElement("img");
image.src="https://cdn.pixabay.com/photo/2025/01/01/15/55/baby-9304011_1280.jpg";
image.width="300"
image.hight="300"

let bottomEle = document.createElement("div");
bottomEle.setAttribute("class" , "bottomBlock");
let h1 = document.createElement("h1");
h1.innerText="Heading";

let btn = document.createElement("bottom");
btn.innerText="View more";

topEle.apppendChild(image);
bottomEle.appendChild(h1);
bottomEle.apppendChild(btn);
mainEle.apppendChild(topEle);
mainEle.apppendChild(bottomEle);
// bottomEle.appendChild(h1);
// bottomEle.apppendChild(btn);
document.body.appendChild(mainEle);