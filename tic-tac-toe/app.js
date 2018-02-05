// console.log('hello world');

const el0 = document.querySelector('.el-0'),
      el1 = document.querySelector('.el-1'),
      el2 = document.querySelector('.el-2'),
      el3 = document.querySelector('.el-3'),
      el4 = document.querySelector('.el-4'),
      el5 = document.querySelector('.el-5'),
      el6 = document.querySelector('.el-6'),
      el7 = document.querySelector('.el-7'),
      el8 = document.querySelector('.el-8'),
      x   = document.querySelector('.x'),
      o   = document.querySelector('.o'),
      reset = document.querySelector('.reset'),
      board = document.querySelector('.board'),
      h2    = document.querySelector('h2'),
      btn   = document.querySelectorAll('.btn');

const block = document.getElementsByClassName('block');
const h1 = document.querySelector('h1');

let win = [
  [0,1,2],
  [0,4,8],
  [3,4,5],
  [6,7,8],
  [6,4,2],
  [0,3,6],
  [1,4,7],
  [2,5,8],
];

let won1 = [];
let won2 = [];
let array = [0,1,2,3,4,5,6,7,8];
let choice;


x.onclick = () => {
  choice = 'x'; 
  board.style.display = 'grid';
  reset.style.display = 'inline';

};
o.onclick = () => {
  choice = 'o';
  board.style.display = 'grid';
  reset.style.display = 'inline';
};

function click(el) {

  el.onclick = () => {

    h2.style.color = '#222';
    btn[0].style.color = '#222';
    btn[1].style.color = '#222';

    if (array.length === 0) {
      console.log('ops');
    } else {
      if (h1.innerHTML === 'Tic Tac Toe Game') {
        el.innerHTML = choice.toUpperCase();
        let num = parseInt(el.className[9]);
        let position = array.indexOf(num);
        if ( ~position ) {
          array.splice(position, 1);
          won1.push(num);
      }
      } else {
        return;
      }
      
      
      setTimeout(function () {
        let random = array.splice(Math.floor(Math.random() * array.length), 1);
        won2.push(random[0]);
        if (choice === 'x') {
          if (h1.innerHTML === 'You won the game!') {
            return;
          }
          block[random].innerHTML = 'O';
        } else if (choice === 'o') {
          if (h1.innerHTML === 'You won the game!') {
            return;
          }
          block[random].innerHTML = 'X';
        }
      }, 800);


      let bar;
      let isSame;
      const compare = function (arr1, arr2) {
        Array.prototype.diff = function(arr2) {
          var ret = [];
          this.sort();
          arr2.sort();
          for(var i = 0; i < this.length; i += 1) {
              if(arr2.indexOf( this[i] ) > -1){
                  ret.push( this[i] );
              }
          }
          return ret;
        };

        let bar = arr2.diff(arr1);

        isSame = (bar.length == arr1.length) && bar.every(function(element, index) {
          return element === arr1[index];
        });
      };

      for (let i = 0; i < win.length; i++) {
        compare(win[i], won1);
        // console.log(isSame);
        if (isSame) {
          h1.innerHTML = 'You won the game!';
        }
      }


      // For the other Player
      let bar2;
      let isSame2;

      const compare2 = function (arr1, arr2) {
        Array.prototype.diff = function(arr2) {
          var ret = [];
          this.sort();
          arr2.sort();
          for(var i = 0; i < this.length; i += 1) {
              if(arr2.indexOf( this[i] ) > -1){
                  ret.push( this[i] );
              }
          }
          return ret;
        };

        bar2 = arr2.diff(arr1);

        isSame2 = (bar2.length == arr1.length) && bar2.every(function(element, index) {
          return element === arr1[index];
        });
      };

      const move = function() {
        for (let i = 0; i < win.length; i++) {
          compare2(win[i], won2);
          if (isSame2) {
            h1.innerHTML = 'The computer won the game!';
            reset.innerHTML = 'Play Again';
            clearTimeout(move);
            return;
          } 

          if(h1.innerHTML === 'You won the game!') {
            reset.innerHTML = 'Play Again';
            clearTimeout(move);
            return;
          }

          if (array.length === 0) {
            h1.innerHTML = "It's a draw!";
            reset.innerHTML = 'Play Again';
            clearTimeout(move);
            return;
          }          
        }
        setTimeout(move, 2000);
      };
      move();
    }
  };
}

click(el0);
click(el1);
click(el2);
click(el3);
click(el4);
click(el5);
click(el6);
click(el7);
click(el8);