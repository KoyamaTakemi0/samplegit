const ham = $('#js-hamburger');//js-hamburgerの要素を取得→変数hamに格納
const nav = $('#js-nav');
const PageTop = $('#PageTop');

ham.on('click', function () { //ハンバーガーメニューをクリックしたら
  // console.log("ok!");
  ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
  nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外
});

// PageTop
$(function(){
  PageTop.hide(); //初期状態：非表示
  $(window).scroll(function(){
    if($(this).scrollTop() > 200){ //200pxスクロールしたら
      PageTop.fadeIn(); //表示
    }else{
      PageTop.fadeOut(); //非表示
    }
  })

  PageTop.click(function(){
    $('body,html').animate({scrollTop:0}, 500); //上から0pxの位置に500ミリ秒かけて戻る
    return false;
  });
});

// slick
$(function () {
  $(".slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "30px",
    dots: true,
    // fade: true,
    slidesToShow: 3,
    speed: 400,
  });
});