function ubahHuruf(kata) {
    // you can only write your code here!
    var alphabeth = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var word = [];
    var change = [];
    for (var i = 0; i < kata.length; i++) {
        word.push(kata[i]);
    }

    for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < alphabeth.length; j++) {
            if (word[i] === alphabeth[j]) {
                if (word[i] === 'z') {
                    change.push(alphabeth[0]);
                } else {
                    change.push(alphabeth[j+1])
                }
            }
        }
    }
    //console.log(change);

    var string = '';
    for (var i = 0; i < change.length; i++) {
        string += change[i];
    }
    return string;
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu