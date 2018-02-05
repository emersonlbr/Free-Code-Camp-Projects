// console.log('hello world!');

let arr1 = [1,4,7];
let arr2 = [1,3,2,4,8,7];

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


// console.log(bar);