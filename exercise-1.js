function angkaPrima(angka) {
    // you can only write your code here!
    var hasil = [];
    for (var i = 2; i < angka; i++) {
        if (angka % i === 0) {
        hasil.push(i);
        }
    }
    //console.log(hasil);

    if (hasil.length === 0) {
        nilai = true;
    } else {
        nilai = false;
    }
    return nilai;
  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false
