function checkAB(num) {
  // you can only write your code here!
    /*
    var a = 0;
    var b = 0;
    for (var i = 0; i < num.length; i++) {
        if (num[i] === 'a') {
            a++;
        } else if (num[i] === 'b') {
            b++;
        }
    }
    //console.log(a);
    //console.log(b); 

  if (a > 0 && b > 0) {
      nilai = true;
  } else {
      nilai = false;
  }
  return nilai;
  */

  // THIS IS THE RIGHT WAY.

  for (var i = 0; i < num.length; i++) {
      if (num[i] === 'b') {
          for (var j = i; j < num.length; j++) {
              if (num[j] === 'a') {
                  var hasilDepan = j - i - 1;
              } 
          }
          for (var k = i; k >= 0; k--) {
              if (num[k] === 'a') {
                  var hasilBelakang = i - k - 1;
              }
          }
      } else {
          nilai = false;
      }
  }

  //console.log(hasilDepan);
  //console.log(hasilBelakang);

  if (hasilDepan === 3 || hasilBelakang === 3) {
    nilai = true;
  }  else {
      nilai = false;
  }

  return nilai;
}
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false