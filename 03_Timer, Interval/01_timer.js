// let kam = setTimeout(function() {
//     console.log("hi")
// }, 3000);


// clearTimeout(kam)


// let task = setInterval(function() {
//     console.log("hi bro")
// }, 2000);


// clearTimeout(task)


let count = 0;

let countdown =setInterval(function() {
        
        console.log(count)
        count+=1;
        if(count >= 10) {
            clearInterval(countdown)
        }
 }, 1000)