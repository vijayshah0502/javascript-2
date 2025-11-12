

let lis = document.querySelectorAll("li")

// lis.forEach(function(val) {
//     console.log(val.textContent)
// })

//or
// console.log(lis.length)

// for(let i=0; i <lis.length; i++) {
//     console.log(lis[i].textContent)
// }

// let p = document.querySelector("p")
// p.innerHTML = "<b>updated</b> by javascript"

//
// let ul = document.querySelector('ul')
// let li = document.createElement('li')
// li.textContent = "kela ha bho add li"
// ul.appendChild(li)

//
// let img = document.createElement('img')
// img.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqJjz0RUL0kEGMlpB_ZqkULUqG03pcdXpcw&s")



// let div = document.querySelector("div")

// div.append(img)
// img.classList.add('placeholder')


//
// let ul = document.querySelector('ul')
// let li = document.querySelector('li')
// ul.removeChild(li)

//
let li = document.querySelectorAll("ul li:nth-child(2n)")

li.forEach(function(element) {
    element.classList.add("highlight") 
})