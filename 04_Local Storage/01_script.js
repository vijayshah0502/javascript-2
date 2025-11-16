//localStorage - apke brower ke anadar data store karna jo ki brower band hone prt bhi delete nahi hoga

//localStorage 
//store kaise kare - setItem("name", "vijay")
//data fetch kaise kare - getItem(name)
//remove kaise kare - remove(name)
//update kaise kare - setItem("name", "vijaya")

// localStorage.setItem("name", "vijay")
// let val = localStorage.getItem("name")
// // localStorage.removeItem("name")
//  localStorage.setItem("name", "vijaya")


//sessionStorage - ye localStroage jaise he hota he, but temporary brower ma data store karta he , agar tab band kar diaya tp fir data detelte ho jata he..
// sessionStorage.


//cookies - kami data store karyala use hot he..


// localStorage.setItem("firends", ["sumit", "baba","mohit"])           
//local stroage me hum array, objects store nhi kr skate he...
//but hum JSON use kar skate he..

localStorage.setItem("friends", JSON.stringify(["sumit", "baba","mohit"]))


let freinds = localStorage.getItem("friends")
let fr = JSON.parse(freinds)
console.log(fr)