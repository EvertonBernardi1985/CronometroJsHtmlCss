const minutesCR = document.querySelector("#minutes")
const secondsCR = document.querySelector("#seconds")
const milisecondsCR = document.querySelector("#miliseconds")
const startBtn = document.querySelector("#startBtn")
const pausarBtn = document.querySelector("#pauseBtn")
const resumeBtn = document.querySelector("#resumeBtn")
const resetBtn = document.querySelector("#resetBtn")

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer)
pausarBtn.addEventListener("click", pauseTimer)
function startTimer(){
    interval = setInterval(() => {
        if(!isPaused){
            miliseconds+= 10;

            if(miliseconds == 1000){
                seconds ++;
                miliseconds = 0;

            }
            if(seconds == 60){
                minutes ++;
                seconds = 0;
            }
            minutesCR.textContent =formatTimer(minutes)
            secondsCR.textContent = formatTimer(seconds)
            milisecondsCR.textContent = formatTimer(miliseconds)

            }
        }, 10)
        startBtn.Style.display = "none";
        pausarBtn.style.display = "block";

    }
    function pauseTimer(){
        isPaused = true;
        pausarBtn.style.display = "none";
        resumeBtn.style.display = "block";

    }
    function resumeTimer(){
        isPaused = false;
        pausarBtn.style.display = "block";
        resumeBtn.style.display = "none";



    }
    function formatTimer(time){
        return time < 10 ? `0${time}`: time;

    }
    function formatmiliseconds(time){
        return time < 100?`${time}`.padStart(3, "0") : time;

    }



