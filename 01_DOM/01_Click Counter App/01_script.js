let btn = document.querySelector("#btn")
let reset = document.querySelector("#reset")
let count = document.querySelector("#count")


number = 0;

btn.addEventListener("click", function() {
     
     number+=1
    count.textContent = number
})


reset.addEventListener("click", function() {
    number = 0
    count.textContent = number  

})