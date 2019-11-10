function fpb(angka1, angka2) {
    // you can only write your code here!
    var temp1 = [];
    for (var i = 1; i < angka1; i++) {
        if (angka1 % i === 0) {
            temp1.push(i);
        }
    }

    var temp2 = [];
    for (var j = 1; j <  angka2; j++) {
        if (angka2 % j === 0) {
            temp2.push(j)
        }
    }
    //console.log(temp1);
    //console.log(temp2);
    /*
    var fpb = [];
    fpb.push(fpbAngka1);
    fpb.push(fpbAngka2);
    console.log(fpb);
    */

    var fpb = [];
    for (var i = 0; i < temp1.length; i++) {
        for (var j = 0; j < temp2.length; j++) {
            if (temp1[i] === temp2[j]) {
                fpb.push(temp1[i]);
            }
        }
    }
    //console.log(fpb);
    var terbesar = fpb[fpb.length - 1];
    return terbesar;



  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1