//shodna 
// let abcd = document.getElementsByClassName("abcd")
// let b = document.querySelector('.abcd') 
// let c = document.querySelectorAll(".abcd")


//
// let h1 = document.querySelector(".abcd")
// console.dir(h1)
// h1.textContent = "hi vijay"
// h1.hidden = true;
// h1.innerHTML = "<p>hi hi vijay</p>"


//attributes- getattribute, setattribute, removeattribute
//tag ke alawa jo bhi hota he use attribute kehta he ex-class , id, href

// let a = document.querySelector("a")
// a.href = "https://www.google.com"
// let img = document.querySelector('img')
// img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqJjz0RUL0kEGMlpB_ZqkULUqG03pcdXpcw&s')

// console.log(a.getAttribute("href"));
// a.removeAttribute("href")

//create element 
//append - body ke last ma
//prepend- body ki stating ma
// let h2 = document.createElement("h2")
// console.log(h2);
// h2.textContent = "ghar par jao aur khana khaao"
// document.body.prepend(h2)

// let h3 = document.querySelector('h3')
// h3.remove()

// let p = document.createElement("p")
// p.textContent = "vijay 4"
// document.querySelector("div").append(p)

//CSS in js 
// let h3 = document.querySelector("h3")
// h3.style.color = "red"

let h4 = document.querySelector("h4")
// h4.classList.add('hulu')
h4.classList.remove("hulu")
