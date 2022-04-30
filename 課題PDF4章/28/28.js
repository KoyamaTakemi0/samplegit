var boolean = true;
if (boolean) {
 console.log(boolean);
};

var num = 100
if (num == 100) {
 console.log(num);
 console.log(num == 100);
}

var text = "JavaScript"
if (text == "JavaScript") {
 console.log(text);
}

// ⽂字列として100を代⼊
var num = "100"
// ⽐較する値は数値型の100
if (num == 100) {
 // ==で⽐較しているので⽂字列でも数値型でもtrueになる。
 console.log(num);
}

// ★★★★　以下課題　★★★★
var test01 = true;
if (test01) {
 console.log(test01);
}

var test02 = 100
if (test02 === 100) {
 console.log(test02);
}

var test03 = "JavaScript"
if (test03 === "JavaScript") {
 console.log(test03);
}