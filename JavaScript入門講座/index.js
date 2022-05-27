//変数
let test = 'Hello World!';
// test = 'Hello World2!!';
// console.log(test);

//定数
const big_test = 'He..Hell...Hello World!!';
// big_test = 'Hello world2!!!'
// console.log(big_test);

//配列
let inoki = ['いーち','にー','さーん','ダーーー！！'];
// console.log(inoki[3]);

//ループ文
// let index = 0;
// while(index < inoki.length){
//   //繰り返したい命令
//   console.log(inoki[index]);
//   index++;
// }

//if / else
// if(inoki.length > 5){
//   console.log('ボンバイエ！');
// }else{
//   console.log('ボンバ...！');
// }

//関数
const sample = (arg) => {
  //ここに実行したい命令を書く
  if(inoki.length > arg){
    console.log('ボンバイエ！');
  }else{
    console.log('ボンバ...！');
  }
};

// sample(3);
// sample(4);
// sample(5);
// sample(6);

//オブジェクト
const unko = {
  color: 'pink',
  size: 'large',
  purfume: 'mint',
  goToilet: () =>{
    console.log('Hello world!');
  }
};

// window.alert('Hello!');
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {window.alert('Hello world!');
});