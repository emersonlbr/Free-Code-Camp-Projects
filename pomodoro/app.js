console.log('Hello friend!');

const minus = document.querySelector('.minus-l'),
      time  = document.querySelector('.time');

const timeS = 25;

minus.onclick = () => {
  time.innerHTML = timeS - 1;
};

document.getElementById('.hello')
