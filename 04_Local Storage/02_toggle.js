let body = document.querySelector("body")
let btn = document.querySelector("button")

btn.addEventListener("click", function() {
    if(body.classList.contains("dark")) {
        body.classList.remove("dark")
        body.classList.add("light")
    }
    else {
        document.classList.remove("light")
        document.classList.add("dark")
    }
})