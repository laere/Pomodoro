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
        resetButton = document.querySelector('#reset'),
        timer = document.querySelector('#timer'),
        intervalID,     //create interval ID
        seconds = 3600/60;  //create time variables
    
//  Create click events for main pomodoro buttons
//  1.1 When pomodoro button is clicked set a 25 minute timer.
    pomodoro.addEventListener('click', setPomodoro, false);
//  1.2 When long break timer is clicked set 10 minute timer
    longBreak.addEventListener('click', setLongBreak, false);
//  1.3 When short break timer is clicked, set 5 minute timer.
    shortBreak.addEventListener('click', setShortBreak, false);
    
    startButton.addEventListener('click', setPomodoro, setLongBreak, setShortBreak, false);
//  resetButton.addEventListener('click', , false);
//  1.1a Create a timer that counts down from 25 minutes.
    
    function setPomodoro() {
        var pomodoroMins = 24;
                intervalID = setInterval(function() {
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
            intervalID = setInterval(function() {
                timer.innerHTML = longBreakMins + ':' + seconds;
                seconds--;
                if (seconds === parseInt('0')) {
                    longBreakMins--;
                    seconds = 60;
                }
            }, 1000);
         stopButton.addEventListener('click', function(){
            clearInterval(intervalID);
        }, false);
    }
//  1.3a Create a timer that counts down from 5 minutes.
    function setShortBreak() {
        var shortBreakMins = 4;
            intervalID = setInterval(function() {
                timer.innerHTML = shortBreakMins + ':' + seconds;
                seconds--;
                if (seconds === parseInt('0')) {
                    shortBreakMins--;
                    seconds = 60;
                }
            }, 1000);
        stopButton.addEventListener('click', function() {
            clearInterval(intervalID);
        }, false);
    }
};

        
        



