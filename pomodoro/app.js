console.log('Hello friend!');

const minusL      = document.querySelector('.minus-l'),
      time        = document.querySelector('.time'),
      clock       = document.querySelector('.clock'),
      breakMin    = document.querySelector('.break-min'),
      plusLength  = document.querySelector('.plus-l'),
      minusRight  = document.querySelector('.minus-r'),
      plusRight   = document.querySelector('.plus-r'),
      session     = document.querySelector('.session'),
      type        = document.querySelector('.type'),
      timeB       = document.querySelector('.time-b'),
      breakTime   = document.querySelector('.break-time'),
      sound       = document.querySelector("audio"),
      play        = document.querySelector('.play'),
      audioBreak  = document.querySelector('.audio-break'),
      stop        = document.querySelector('.stop'),
      start       = document.querySelector('.start');
    

let breakLength    = 5,
    sessionLength  = 25;
    rounds         = 0;

// BREAK TIME
{
  minusL.onclick = () => {
    breakLength--;
    if (breakLength >= 0) {
      breakMin.innerHTML = breakLength;
      timeB.innerHTML = `${breakLength}:00`;
    } else {
      breakLength = 0;
    }
    console.log(breakLength);
  };

  plusLength.onclick = () => {
    breakLength++;
    breakMin.innerHTML = breakLength;
    timeB.innerHTML = `${breakLength}:00`;
    console.log(breakLength);
  };

}

// SESSION TIME
{  
  minusRight.onclick = () => {
    sessionLength--;
    if (sessionLength >= 1) {
      session.innerHTML = sessionLength;
      time.innerHTML = `${sessionLength}:00`;
    } else {
      sessionLength = 1;
    }
    console.log(sessionLength);
  };

  plusRight.onclick = () => {
    sessionLength++;
    session.innerHTML = sessionLength;
    console.log(sessionLength);
    time.innerHTML = `${sessionLength}:00`;
  };
}

// START THE TIMER
{
  clock.onclick = () => {
    if (rounds < breakLength) {
      countdown(sessionLength);
    }
  };

  breakTime.onclick = () => {
    if (rounds >= breakLength) {
      countdownBreak(breakLength);
      rounds = 0;
    }
  };
}


// COUNTDOWN
function countdown(minutes) {
  let seconds = 60;
  let mins = minutes;
  function tick() {
      let current_minutes = mins-1;
      seconds--;
      time.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if( seconds > 0 ) {
          setTimeout(tick, 1000);
      } else {
          if(mins > 1){
              countdown(mins-1);         
          }
        }
      console.log(mins);

      if (seconds === 0 && mins === 1) {
        time.innerHTML = `${sessionLength}:00`;
        rounds++;
        console.log(rounds);
        PlaySound(sound);
      }
  }
  tick();
}

function countdownBreak(minutes) {
  let seconds = 60;
  let mins = minutes;
  function tick() {
      let current_minutes = mins-1;
      seconds--;
      timeB.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
      if( seconds > 0 ) {
          setTimeout(tick, 1000);
      } else {
          if(mins > 1){
              countdown(mins-1);         
          }
      }
      if (seconds === 0 && mins === 1) {
        timeB.innerHTML = `${breakLength}:00`;
        PlaySound(audioBreak);
        rounds = 0;
      }
  }

  tick();

}

function PlaySound(play) {
  play.play();
}


// let min = 25000 * 60;
// var countDownDate = new Date().getTime() + min;

// // Update the count down every 1 second
// var x = function() {
 
//   console.log(countDownDate);

//     // Get todays date and time
//     var now = new Date().getTime();
    
//     // Find the distance between now an the count down date
//     var distance = countDownDate -  now;
    
//     // Time calculations for days, hours, minutes and seconds
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//     // Output the result in an element with id="demo"
//     console.log(minutes + "m " + seconds + "s ");
    
//     // If the count down is over, write some text 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// };


// stop.onclick = () => {
//   setInterval(x, 1000);
// };

// start.onclick = () => {
//   clearInterval(x);
// };