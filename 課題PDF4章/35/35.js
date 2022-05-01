for (var i = 1; i < 10; i++) {
  console.log("ループ" + i + "回⽬");
 };

 var items = ["リンゴ", "バナナ", "イチゴ"];
for (index in items) {
 console.log(items[index]);
};

var teachers = [ { name: "太郎", age: 25, subject: "国語", }, { name: "浩司", age:
30, subject: "数学", }, { name: "花⼦", age: 26, subject: "社会", } ];
for (teacher of teachers) {
   console.log(teacher); 
  }; 

// ★★★★　以下課題　★★★★★
// 1.forループ
for(var i = 10; i > 0; i--){
  console.log("カウントダウン" + i);
};

// 2.for in ループ
var items01 = [10, 20, 30, 40];

for(t in items01){
  console.log(items01[t]);
};

// 3.for of ループ
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

for(u of object01){
  console.log(u);
};