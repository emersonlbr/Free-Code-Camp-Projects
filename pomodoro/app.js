console.log('Hello friend!');

const minus = document.querySelector('.minus-l'),
      time  = document.querySelector('.time'),
      clock = document.querySelector('.clock');

const timeS = 25;

minus.onclick = () => {
  time.innerHTML = timeS - 1;
};

// I never thought I could see so many changes happen in the world as I see now. 
// The internet changed my life.

function startTimer(duration, display) {
  let timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10)
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      time.innerHTML = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
  }, 1000);
}

clock.onclick = () => {
  let fiveMinutes = 60 * 25,
      display = document.querySelector('#time');
  startTimer(fiveMinutes, display);
};

