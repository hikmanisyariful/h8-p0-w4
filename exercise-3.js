function cariMedian(arr) {
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
  var center = 0
  console.log(arr);
  if (arr.length % 2 === 0) {
      center = (arr.length/2) - 1;
      median = (arr[center] + arr[center+1]) / 2;
  } else {
      center = Math.ceil((arr.length/2) - 1);
      median = arr[center];
  }

  return median;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5