const ham = $('#js-hamburger');//js-hamburgerの要素を取得→変数hamに格納
const nav = $('#js-nav');
ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  // console.log("ok!");
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外
});