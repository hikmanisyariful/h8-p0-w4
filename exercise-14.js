function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    var data = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var jumlah = 0
        var object = {}
        for (var j = rute.length-1; j >= 0; j--) {
            if (arrPenumpang[i][2] === rute[j]) {
                for (var k = j; k >= 0; k-- ) {
                    jumlah += 1;
                    if (arrPenumpang[i][1] === rute[k]) {
                        total = 2000 * (jumlah-1);
                        object.penumpang = arrPenumpang[i][0];
                        object.naikDari = arrPenumpang[i][1];
                        object.tujuan = arrPenumpang[i][2];
                        object.bayar = total;
                        data.push(object);
                    break;
                    }
                }
                
            } 
        } 
    }
    return data;
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]