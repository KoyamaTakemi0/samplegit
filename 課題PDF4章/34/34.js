var fruits = ["リンゴ", "バナナ", "イチゴ"];
console.log(fruits);
console.log(fruits[0]);

var teacher = {
  name: "太郎",
  age: 25,
  subject: "国語",
 }
 console.log(teacher);
 console.log(teacher.name);


// ★★★★　以下課題　★★★★★
// 1.3つ以上の値を用意、1番目と3番目を表示
var num = [10, 20, 30, 40];
console.log(num[1]);
console.log(num[3]);

// 2.説明
// key
// プロパティにおけるプロパティ名の部分。
// 
// value
// プロパティにおける値の部分。
// 
//プロパティー
// あらかじめ設定した値に名前をつけたもの。 
// 
// var teacher = {
//   name: "太郎",　　 --->　nameがkey、太郎がvalue
//   age: 25,
//   subject: "国語",
//  }

// 3.3つプロパティを含むオブジェクトを用意し表示
var object00 = {
  name : "田中",
  number : 0,
  age : 22
}
console.log(object00);
console.log(object00.number);

// 4.オブジェクトを3つ用意、配列の0番目と3番目を表示。keyを指定して表示。
var object01 = [
  {
    name : "佐藤",
    number : 1,
    color : "red"
  },
  {
    name : "山田",
    number : 2,
    color : "blue"
  },
  {
    name : "阿部",
    number : 3,
    color : "green"
  },
  {
    name : "渡辺",
    number : 4,
    color : "yellow"
  }
];
console.log(object01);
console.log(object01[0]);
console.log(object01[0].name);
console.log(object01[3]);
console.log(object01[3].name);



