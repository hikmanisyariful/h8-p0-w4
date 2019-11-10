function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var kpk = [];
    for (var i = 1; i <= angka; i++) {
      if (angka % i === 0) {
        kpk.push(i);
      }  
    } 
    //console.log(kpk);
    

    var jumlah = (kpk.length/2); // 3
    var jumlah2 = kpk.length - 1;
    
    //console.log(jumlah);
    var faktor = [];
    for (var i = 0; i < jumlah; i++) {
        faktor.push((`${kpk[i]}${kpk[jumlah2]}`))
        jumlah2--
    }

    //console.log(faktor);
    for (var i = 0; i < faktor.length-1; i++) {
        for (var j = 0; j < faktor.length-1; j++) {
            if (faktor[j].length > faktor[j+1].length) {
                var temp = faktor[j];
                faktor[j] = faktor[j+1];
                faktor[j+1] = temp;
            }
        }
    }
    //console.log(faktor);
    
    var newArr = [];
    var digit = faktor[0].length;
    for (var i = 0; i < faktor.length; i++) {
        if (faktor[i].length === digit) {
            newArr.push(faktor[i]);
        }
    }

    //console.log(newArr);
    var output = newArr[0].length;
    return output;
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2