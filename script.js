//  Problem: Pomodor timer does not have functionality
//  Solution: Add functionality to the pomodor timer.

//      When a timer is active, and another is clicked. Stop current timer and activate clicked timer.
//      (EG)if pomodoro timer running, and click short break, stop pomodoro and replace with short break.
//      
//      Reset current interval time on reset button.
//      If break buttons are clicked more than once, reset the time.
    
window.onload = function() {
 
    var pomodoro = document.querySelector('#set-time'),
        longBreak = document.querySelector('#long-brk'),
        shortBreak = document.querySelector('#short-brk'),
        stopButton = document.querySelector('#stop'),
        startButton = document.querySelector('#start'),
//      resetButton = document.querySelector('#reset'),
        container = document.querySelector('#container'),
        timer = document.querySelector('#timer'),
        seconds = 60;  //set seconds
   
   
//  Click event for break timers.    
    container.addEventListener('click', function(e) {
        var el = e.target;
            if (el === pomodoro) {
                setPomodoro();
            } else if (el === longBreak) {
                setLongBreak();
            } else if (el === shortBreak) {
                setShortBreak();
            }
            e.stopPropagation();
    }, false);  
    
    startButton.addEventListener('click', setPomodoro, setLongBreak, setShortBreak, false);

//  1.1a Create a timer that counts down from 25 minutes.
    function setPomodoro() {
        var pomodoroMins = 24;
         var intervalID = setInterval(function() { //set unique interval ID for each SI func.
                timer.innerHTML = pomodoroMins + ':' + seconds;
                seconds--;
                if (seconds === parseInt('0')) {
                    pomodoroMins--;
                    seconds = 60;
                }
            }, 1000);
//      2.2 When stop button is clicked, timer stops
        stopButton.addEventListener('click', function(){
            clearInterval(intervalID);
        }, false);
    }
//  1.2a Create a timer that counts down from 10 minutes
    function setLongBreak() {
        var longBreakMins = 9;
        var intervalID2 = setInterval(function() {
                timer.innerHTML = longBreakMins + ':' + seconds;
                seconds--;
                if (seconds === parseInt('0')) {
                    longBreakMins--;
                    seconds = 60;
                }
            }, 1000);
         stopButton.addEventListener('click', function(){
            clearInterval(intervalID2);
        }, false);
    }
//  1.3a Create a timer that counts down from 5 minutes.
    function setShortBreak() {
        var shortBreakMins = 4;
        var intervalID3 = setInterval(function() {
                timer.innerHTML = shortBreakMins + ':' + seconds;
                seconds--;
                if (seconds === parseInt('0')) {
                    shortBreakMins--;
                    seconds = 60;
                }
            }, 1000);
        stopButton.addEventListener('click', function() {
            clearInterval(intervalID3);
        }, false);
    }
};
 



