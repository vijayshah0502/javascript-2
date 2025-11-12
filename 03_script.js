let p = document.querySelector('p')
// p.addEventListener("click", function() {
//     p.style.color = "red"
// })

// function dbclick() {
//     p.style.color = "yellow"
// }

// p.addEventListener("dblclick", dbclick)
// p.removeEventListener("dblclick", dbclick)



//
// let input = document.querySelector('input')
// input.addEventListener('input', function(dets) {
//     if(dets.data !== null) {
//           console.log(dets.data)
//     }
  
// } )


let sel = document.querySelector("select")
let device = document.querySelector('#device')

sel.addEventListener('change', function(dets) {
    //    console.log(dets.target.value)
    device.textContent = `${dets.target.value} devise is selected`
})