function showAlert() {
  alert("functionTestが実⾏されました。")
 };
 showAlert();

 var getText01 = function(){
  return "1.getTextが実⾏されたのでこのテキストを返します。"
 };
 console.log(getText01());

 var getText02 = function(){
  var text = "2.getTextが実⾏されたのでこのテキストを返します。";
  console.log(text);
  return 0;
 };
 getText02();

 

// ★★★★　以下課題　★★★★★
// 1.関数宣言し、実行時アラート表示
function showTest01(){
  alert("課題1の関数が実⾏されました。")
}
showTest01();

// 2.関数式内で計算し結果を返す、それを外部から実行しコンソールで表示
var getTest02 = function(){
  var i = 3 * 4;
  console.log(i);
  return 0;
}
getTest02();

// 3.スコープについて
// 　スコープとは変数の名前や関数などの参照できる範囲を決めるもの。
// 　スコープの中で定義された変数はスコープの内側のみで参照でき、スコープの外側からは参照できない。
