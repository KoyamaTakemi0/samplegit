var numA = 20;
var numB = 40;
if (numA == 20 && numB == 40) {
 console.log("ANDの条件と⼀致した処理");
 console.log(numA == 20 && numB == 40);
} else {
 console.log("ANDの条件と⼀致しなかった処理");
 console.log(numA == 20 && numB == 40);
};

var numA = 20;
var numB = 40;
if (numA == 20 || numB == 40) {
 console.log("ANDの条件と⼀致した処理");
 console.log(numA == 20 || numB == 40);
} else {
 console.log("ANDの条件と⼀致しなかった処理");
 console.log(numA == 20 || numB == 40);
};

var boolean = false;
if (!boolean) {
 console.log("NOTの条件と⼀致した処理");
 console.log(boolean);
} else {
 console.log("NOTの条件と⼀致しなかった処理");
 console.log(boolean);
};

// ★★★★　以下課題　★★★★★
// 1.AND
var numA = 100;
var numB = 300;
if (numA === 100 && numB === 300) {
 console.log("1.ANDの条件と⼀致した処理");
 console.log(numA === 100 && numB === 300);
} else {
 console.log("1.ANDの条件と⼀致しなかった処理");
 console.log(numA === 100 && numB === 300);
};

// 2.OR
var numA = 30;
var numB = 40;
if (numA === 30 || numB === 10) {
 console.log("2.ORの条件と⼀致した処理");
 console.log(numA === 30 || numB === 10);
} else {
 console.log("2.ORの条件と⼀致しなかった処理");
 console.log(numA === 30 || numB === 10);
};

// 3.NOT
var numA = 11;
if (numA != 22) {
 console.log("3.NOTの条件と⼀致した処理");
 console.log(numA);
} else {
 console.log("3.NOTの条件と⼀致しなかった処理");
 console.log(numA);
};