let progressbar = document.querySelector(".progress-bar");
let startbtn = document.querySelector("#startBtn");
let resetbtn = document.querySelector("#resetBtn");

let count = 0;
let interval = null;

// Start Button
startbtn.addEventListener("click", function () {
    // prevent double start
    if (interval) {
        return
    }

    interval = setInterval(function () {
      
        count += 1;
        progressbar.style.width = `${count}%`;
        
    }, 30);
});

// Reset Button
resetbtn.addEventListener("click", function () {
    // stop running interval
    // clearInterval(interval);
    // interval = null;

    // reset values
    count = 0;
    progressbar.style.width = "0%";
    clearInterval(interval);
    interval = null;

});
