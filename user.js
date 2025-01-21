let user={
    name:"aravind",
    age:22,
    place:"sadasivapet"
}

console.log(user);
console.log(user.name)
console.log(typeof(user));


let x=JSON.stringify(user);
console.log(x)
console.log(x.name)
console.log(typeof(x));

let y=JSON.parse(x)
console.log(y);

// wed storages

localStorage.setItem("user1","surya");
localStorage.setItem("user2","hemanth");
// localStorage.clear()

// sessionStorage.setItem("user1","surya");
// let z =sessionStorage.getItem("user1")
// console.log(z);


// sessionStorage.removeItem("user1");

// sessionStorage.setItem("user2","hemanth");
// sessionStorage.clear()