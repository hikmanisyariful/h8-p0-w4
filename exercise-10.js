function changeMe(arr) {
    // you can only write your code here!
    if (arr.length === 0) {
      console.log('""')
    } else {
      var student = {};
      for (var i = 0; i < arr.length; i++) {
        console.log(i+1 + '. ' + arr[i][0] + ' ' + arr[i][1]);
        student = {};
        student.firstName = arr[i][0];
        student.lastName = arr[i][1];
        student.gender = arr[i][2];
        if (arr[i][3] !== undefined) {
          var now = new Date().getFullYear();
          var age = now - arr[i][3];
          student.age = age;
        } else {
          student.age = 'invalid Birth Year';
        }
        console.log(student);
      }
    }  
}

  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans: // jika funtion itu dia tidak dipanggil sebagai parameter / console.log maka dia tidak butuh return.
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""