function urutkanAbjad(str) {
    // you can only write your code here!
    //console.log(str);
    //console.log(str[0]);
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        arr.push(str[i]);
    }

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
            }
        }
    }
    //var newArr = arr.join('');

    var newArr = '';
    for (var i = 0; i < arr.length; i++) {
        newArr = (`${newArr}${arr[i]}`);
    }

    return newArr;

  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'