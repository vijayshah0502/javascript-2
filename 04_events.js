//
let h1 = document.querySelector("h1")
window.addEventListener("keydown", function(dets) {

    // console.log(dets);
    
   if(dets.key === " ") {
    h1.innerText = "SPACE"
    console.log("space")
   }
   else {
    h1.innerText = dets.key
    console.log(dets.key)

}
  
})