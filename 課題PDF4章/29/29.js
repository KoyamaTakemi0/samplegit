var boolean = false;
if(boolean){
 console.log("trueの処理");
 console.log(boolean);
} else {
 console.log("falseの処理");
 console.log(boolean);
};

// var boolean = false;
// if (boolean) {
// console.log("trueの処理");
// console.log(boolean);
// }
// `console.log("テスト");`
// else {
// console.log("falseの処理");
// console.log(boolean);
// } ;

// ★★★★　以下課題　★★★★

// 1.elseを使用するときの注意点
// 　必ずif文とセットで使用。ifとelseの間に処理を書くとエラーになるので注意。

// 2.JavaScriptで実装したときの確認ポイント。
// 　プログラムが動くかの確認だけでなく、コンソールにエラーが表示されていないかも確認する。

// 3.数値型を比較してelseの処理に入る処理
var Number = 123;
if(Number === 456){
 console.log("課題03　trueの処理");
 console.log(Number);
} else {
 console.log("課題03　falseの処理");
 console.log(Number);
};

// 4.文字列型を比較してelseの処理に入る処理
var String = "ABC";
if(String === "DEF"){
 console.log("課題04　trueの処理");
 console.log(String);
} else {
 console.log("課題04　falseの処理");
 console.log(String);
};