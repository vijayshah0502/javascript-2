let ul = document.querySelector('ul')

// ul.addEventListener('click', function(dets) {
        
      
//        if(dets.target.tagName === "LI") {
//            dets.target.style.textDecoration = "line-through"
//     }
       
       
        
// })


ul.addEventListener("click", function(dets) {
//      dets.target.classList.toggle('lt')

     if(dets.target.tagName === "LI") {
                dets.target.classList.toggle('lt')
     }
 

})