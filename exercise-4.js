function cariModus(arr) {
  // you can only write your code here!
  for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
          if (arr[j] > arr[j+1]) {
              var temp = arr[j];
              arr[j] = arr[j+1];
              arr[j+1] = temp;
          }

      }
  }

  //console.log(arr);
  var angka = [];
  var newArr = [];
  for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i+1]) {
            angka.push(arr[i]);
            newArr.push(angka);
            angka = [];
            if (arr[i+1] === arr[arr.length - 1]) {
                angka.push(arr[i+1]);
                newArr.push(angka);
            break;
            }
        } else {
            angka.push(arr[i]);
            
        }
  }
  
  //console.log(newArr);

    for (var i = 0; i < newArr.length-1; i++) {
        for (var j = 0; j < newArr.length-1; j++) {
            if (newArr[j].length > newArr[j+1].length) {
                var temp = newArr[j];
                newArr[j] = newArr[j+1];
                newArr[j+1] = temp;
            }
        }
    }
     
    if (newArr.length === 0 || newArr[newArr.length-1].length === 1) {
        var modus = -1;
    } else {
        var modus = newArr[newArr.length-1][0];
    }
    //console.log(newArr);
  
  return modus;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1