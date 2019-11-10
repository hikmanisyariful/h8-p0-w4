function shoppingTime(memberId, money) {
    // you can only write your code here!
    
    var produk = [['Sepatu Stacattu', 1500000], ['Baju zoro', 500000], ['Baju H&N', 250000], ['Sweater Uniklooh', 175000], ['Casing Handphone', 50000]];
    
    if (memberId === '' || memberId === undefined) {
        return 'Mohon maaf, toko X hanya berlaku untuk member saja';
    } else  {
        
        var shop = {};
        for (var i = 0; i < produk.length; i++) {
            if (money >= produk[i][1]) {
                barang = [];
                for (var j = i ; j < produk.length; j++) {
                    barang.push(produk[j][0]);
                    money = money - produk[j][1];
                }
                shop.listPurchase = barang;
                shop.changeMoney = money;
                return shop;
            } 
        } 
        for (var i = produk.length-1; i >= 0; i--) {
            if (money < produk[i][1]) {
                return 'Mohon maaf uang tidak cukup'  
            }
        }
    } 

    
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja