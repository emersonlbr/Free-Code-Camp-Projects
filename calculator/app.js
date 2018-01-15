console.log('Hello Friend');

const zero        = document.querySelector('.zero'),
      one         = document.querySelector('.one'),
      two         = document.querySelector('.two'),
      six         = document.querySelector('.six'),
      dot         = document.querySelector('.dot'),
      four        = document.querySelector('.four'),
      five        = document.querySelector('.five'),
      nine        = document.querySelector('.nine'),
      plus        = document.querySelector('.plus'),
      three       = document.querySelector('.three'),
      seven       = document.querySelector('.seven'),
      eight       = document.querySelector('.eight'),
      input       = document.querySelector('.input'),
      clear       = document.querySelector('.clear'),
      minus       = document.querySelector('.minus'),
      equal       = document.querySelector('.equal'),
      divide      = document.querySelector('.divide'),
      multiply    = document.querySelector('.multiply'),
      negative    = document.querySelector('.negative');
      // percentage  = document.querySelector('.percentage');

{

  one.onclick = () => {
    input.value += 1;
  };

  two.onclick = () => {
    input.value += 2;
  };

  three.onclick = () => {
    input.value += 3;
  };

  four.onclick = () => {
    input.value += 4;
  };

  five.onclick = () => {
    input.value += 5;
  };

  six.onclick = () => {
    input.value += 6;
  };

  seven.onclick = () => {
    input.value += 7;
  };

  eight.onclick = () => {
    input.value += 8;
  };

  nine.onclick = () => {
    input.value += 9;
  };

  zero.onclick = () => {
    input.value += 0;
  };

}

let resultA;
let resultB;
let total;

{
  multiply.onclick = () => {
    resultA = input.value;
    input.value = `${resultA} * `;
  };

  divide.onclick = () => {
    resultA = input.value;
    input.value = `${resultA} / `;
  };

  minus.onclick = () => {
    resultA = input.value;
    input.value = `${resultA} - `;
  };

  plus.onclick = () => {
    resultA = input.value;
    input.value = `${resultA} + `;
  };

  negative.onclick = () => {
    if (input.value === '-') {
      input.value = `+`;
    } else {
      input.value = `-`;
    }
  };

  dot.onclick = () => {
    let re = /,/;
    resultA = input.value;
    input.value += '.';
};

  equal.onclick = () => {
    total = input.value;
    console.log(total);
    input.value = eval(total);
  };

  clear.onclick= () => {
    input.value = '';
    resultA = 0;
    total = 0;
  };
}




