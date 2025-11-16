let mydiv =  document.querySelector("#mydiv")

mydiv.addEventListener("mouseover", function() {
    mydiv.style.backgroundColor = "yellow"
})

mydiv.addEventListener("mouseout", function() {
    mydiv.style.backgroundColor = "red"
})