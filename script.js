//  Problem: Pomodor timer does not have functionality
//  Solution: Add functionality to the pomodor timer.
//      IF a break timer is running WHILE another is clicked, stop running timer, start clicked timer.
//      Reset current interval time on reset button.
//      If break buttons are clicked more than once, reset the time.
window.onload = function() {
 
    var pomodoro = document.querySelector('#set-time'),
        longBreak = document.querySelector('#long-brk'),
        shortBreak = document.querySelector('#short-brk'),
        stopButton = document.querySelector('#stop'),
        startButton = document.querySelector('#start'),
        resetButton = document.querySelector('#reset'),
        container = document.querySelector('#container'),
        timer = document.querySelector('#timer');
        
   //  Click event for break timers.    
    container.addEventListener('click', function(e) {
//      store event target
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
//  1.1a Create a timer that counts down from 25 minutes.
    function setPomodoro() {
        var mins = 24;
        var secs = 60;
        var intervalID = setInterval(function() { //set unique interval ID for each SI func.
                timer.innerHTML = mins + ':' + secs;
                secs--;
                if (secs === 0) {
                    mins--;
                    secs = 60;
                } 
            }, 1000);
//      2.2 When stop button is clicked, timer stops
        stopButton.addEventListener('click', function(){
            clearInterval(intervalID);
        }, false);
    }
//  1.2a Create a timer that counts down from 10 minutes
    function setLongBreak() {
        var mins2 = 9;
        var secs2 = 60;
        var intervalID2 = setInterval(function() {
                timer.innerHTML = mins2 + ':' + secs2;
                secs2--;
                if (secs2 === 0) {
                    mins2--;
                    secs2 = 60;
                }
            }, 1000);
         stopButton.addEventListener('click', function(){
            clearInterval(intervalID2);
        }, false);
    }
//  1.3a Create a timer that counts down from 5 minutes.
    function setShortBreak() {
        var mins3 = 4;
        var secs3 = 60;
        var intervalID3 = setInterval(function() {
                timer.innerHTML = mins3 + ':' + secs3;
                secs3--;
                if (secs3 === 0) {
                    mins3--;
                    secs3 = 60;
                }
            }, 1000);
        stopButton.addEventListener('click', function() {
            clearInterval(intervalID3);
        }, false);
    }
};
 
 



