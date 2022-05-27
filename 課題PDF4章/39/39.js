// const teacher = {
// //    // プロパティー 
//    name: "太郎", 
// //    // プロパティー 
//    subject: "国語", 
// //    // メソッド 
//    profile: function() {
//       console.log("担当教科は国語です"); 
//     } 
//   };
//   console.log(teacher.subject);

// function sumNum01(x) {
//   const result01 = x + 1
//   console.log(result01);
//  };
//  sumNum01(1);
 
//  function sumNum02(x, y) {
//   const result02 = x + y
//   console.log(result02);
//  };
//  sumNum02(5, 10);

//  function showText(x) {
//   console.log(x);
//  };
//  showText(`引数`);
 
// // コールバック関数
//  function tomato(price, func) {
//   const name = "トマト";
//   func(name, price);
//  }
//  const price = function price(name, price) {
//   console.log(name + " の値段は" + price + "円です。");
//  }
//  tomato(100, price);
 

// ★★★★　以下課題　★★★★★
// 1.プロパティとメソッドの違い
// オブジェクトのkeyとvalueのvalueが関数になっているのがメソッド。
// プロパティはオブジェクトの「状態」を示し、メソッドはオブジェクトの動作を示す。
const greenApple = {
  name:"あおりんご",
  color:"黄緑",
  size:"小さい",
  taste:function(){
    console.log("甘酸っぱいです。");
  },
  smell:function(){
    console.log("さわやかな香りがします。");
  },
  comment:function(){
    console.log("10年に1度の良作です!");
  }
};


// 2.下記関数を実行し、結果をコンソールに表示
function fruit(name, price) {
  const result = name + "の値段は" + price + "円です。"
  return result
 };
console.log("課題2　" + fruit("オレンジ", 50)); 

// 3.下記関数を経由して2つの関数を実行
function addTax(price, name, func) {
  // priceは値段
  // funcは実⾏する関数名
  // 税込み価格を計算して四捨五⼊して整数にしている(スコープ内でしか参照できません。)
  const taxPrice = Math.round(price * 1.10);
  func(name, taxPrice);
 };

 const Price = function Price(name, price){
  console.log(name + "の税込み値段は" + price + "円です。");
};
 // トマトの税込み価格をコンソールに表⽰させる処理
addTax(100, "トマト", Price);

 // ⽟ねぎの税込み価格をコンソールに表⽰させる処理
 addTax(200, "玉ねぎ", Price);

