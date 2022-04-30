var boolean = true;
// var resultText = "";
// if (boolean) {
//  resultText = "Aの処理"
// } else {
//  resultText = "Bの処理"
// };
var resultText = boolean ? "Aの処理" : "Bの処理";
console.log(resultText);

var resultNum = 5 > 2 ? true : false;
console.log(resultNum);

// 条件式 ? trueの処理 : falseの処理

// ★★★★　以下課題　★★★★★
// 1.変数の中にtrueまたはfalse
var test01 = false;
var result01 = test01 ? true : false;
console.log("01." + result01);

// 2.変数が5より大きいときtrue、小さいときfalse
var  test02 = 7;
var result02 = test02 > 5 ? true : false;
console.log("02." + result02);

// 3.変数が5より小さいときtrue、大きいときfalse
var  test03 = 3;
var result03 = 5 > test03 ? true : false;
console.log("03." + result03);

// 4.変数が10以上のときtrue、以下のときfalse
var  test04 = 10;
var result04 = test04 >= 10 ? true : false;
console.log("04." + result04);

// 5.変数に値が存在するときtrue、存在しないときfalse
var  test05;
var result05 = test05 != null ? "値が存在します" : "値が存在しません";
console.log("05." + result05);
