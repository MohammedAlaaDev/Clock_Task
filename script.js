let secs = document.querySelectorAll(".secs");
let mins = document.querySelectorAll(".mins");
let hrs12 = document.getElementById("hrs12");
let hrs24 = document.getElementById("hrs24");

let state = document.getElementById("state");

function updateTime() {
    let date = new Date();
    let currentSeconds = date.getSeconds();
    let currentMinutes = date.getMinutes();
    let currentHours = date.getHours();


    secs.forEach((sec) => {
        sec.innerHTML = currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
    })


    mins.forEach((min) => {
        min.innerHTML = currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
    })


    hrs24.innerHTML = currentHours < 10 ? `0${currentHours}` : currentHours;
    if (currentHours <= 12) {
        hrs12.innerHTML = currentHours < 10 ? `0${currentHours}` : currentHours;
        state.innerHTML = "AM";
    } else {
        hrs12.innerHTML = currentHours - 12;
        state.innerHTML = "PM";
    }
}

updateTime();

setInterval(() => {
    updateTime();
}, 1000)