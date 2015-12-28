//Problem: Pomodor timer does not have functionality
//Solution: Add functionality to the pomodor timer.



(function() {
    var buttons = document.querySelectorAll('#buttons input');
    //button elements
    var pomodoro = document.querySelector('#set-time');
    var longBreak = document.querySelector('#long-brk');
    var shortBreak = document.querySelector('#short-brk');
    
    var stopButton = document.querySelector('#stop');
    
    //timer elements
    var timer = document.querySelector('#timer');
    
    //create time variables
    var seconds = 60
    

    //Create click events for main pomodoro buttons
    //1.1 When pomodoro button is clicked set a 25 minute timer.
    pomodoro.addEventListener('click', setPomodoro, false);
    // 1.2 When long break timer is clicked set 10 minute timer
    longBreak.addEventListener('click', setLongBreak, false);
    // 1.3 When short break timer is clicked, set 5 minute timer.
    shortBreak.addEventListener('click', setShortBreak, false);
    
    //2. Add click event to start, stop, reset buttons.
    stopButton.addEventListener('click', stopTime, false);
    //1.1a Create a timer that counts down from 25 minutes.
    function setPomodoro() {
        var pomodoroMins = 24;
        setInterval(function(){
            timer.innerHTML = pomodoroMins + ':' + seconds;
            seconds--;
            if (seconds == parseInt('00')) {
                pomodoroMins--;
                seconds = 60;
            }
            
        }, 600);
        
    }
    //1.2a Create a timer that counts down from 10 minutes
    function setLongBreak() {
        var longBreakMins = 9;
        setInterval(function(){
            timer.innerHTML = longBreakMins + ':' + seconds;
            seconds--;
            if (seconds == parseInt('00')) {
                longBreakMins--;
                seconds = 60;
            }
        }, 600);
    }
    //1.3a Create a timer that counts down from 5 minutes.
    function setShortBreak() {
        var shortBreakMins = 4;
        setInterval(function() {
            timer.innerHTML = shortBreakMins + ':' + seconds;
            seconds--;
            if (seconds == parseInt('00')) {
                shortBreakMins--;
                seconds = 60;
            }
        }, 600);
    }
    
    //When a timer is active, and another is clicked. Stop current timer and activate clicked timer.
    //(EG)if pomodoro timer running, and click short break, stop pomodoro and replace with short break.
    
    //2.1 When start button is clicked, timer resumes countdown
    
    //2.2 When stop button is clicked, timer stops
    function stopTime(pomodoroTimer) {
        clearInterval()
    }
    //2.3 When reset button is clicked
    function reset() {
        
    }

})();

        
        



