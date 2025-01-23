// console.log(10);
// console.log(20);
// setTimeout(()=>{
//     console.l0g(30);
// },5000)
// console.log(40);
// console.log(50);

// setInterval(()=>{
//     document.writeln("surya");
// },5000)





// let p1=new Promise((resolve,reject)=>{});
// console.log(p1);

// let p2=new Promise((resolve,reject)=>{
//     resolve("success");
// });
// console.log(p2);
// p2.then((response)=>{
//     console.log(response);
// })
// p2.catch((error)=>{
//     console.log(error);
// })

// p2.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("final");
    
// })

// let p3=new Promise((resolve,reject)=>{
//     reject("failure");
// });
// // console.log(p3);
// p3.then((response)=>{
//     console.log(response);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{
//     console.log("finalhy block");
    
// })
// function fetchUsers()
// {
//     let x = fetch("");
//     x.then((response)=>{
//         return response.json().then(data=>{
//         //     console.log(data);
//         let x = document.getElementById("Post");
//         data.map((user)=>{
//             postMessage.innnerHTML +=
//             <tr>
//                 <td>${user.id}</td>
//             </tr>
//         })
//         })
//     })
//     .catch(err=>console.log(err))
// }
// fetchUsers();
async function fetchUsers(){
    let response =await fetch("https://jsonplaceholder.typicode.com/posts");
    let data =await response.json();
    console.log(data);
}
fetchUsers();
