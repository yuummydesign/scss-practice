// alert('hello');
// ----ハンバーガーメニュー----

//ハンバーガーボタン#hamを $triggerと定義する
//ナビメニュー#hd-navを $navと定義する
let $trigger = $('#ham');
let $nav = $('#gnav');
//ヘッダーのブレイクポイントを point_headerに定義する
const point_header = window.matchMedia('screen and (min-width: 769px)');


// ハンバーガーメニューがクリックされた時の挙動
$trigger.on('click',function(){
  // aria-expandedの値を変数expandedと定義する
  const expanded = $(this).attr('aria-expanded');

  //「expanded」の値が'false'だった場合(メニューが非表示の時)開く動作をする
  if(expanded === 'false'){
    //'aria-expanded'を'true'に変更する
    //'aria-label'を「閉じる」に変更する
    $(this).attr('aria-expanded',true).attr('aria-label','閉じる');
    //メニューボタンの'aria-hidden'を'false'に変更し、メニューを表示する
    $nav.attr('aria-hidden', false).slideDown("slow");
    //「expanded」の値が'true'だった場合(メニューが表示)閉じる動作をする
  } else {
    //'aria-expanded'を'false'に変更する
    //'aria-label'を「開く」に変更する
    $(this).attr('aria-expanded',false).attr('aria-label','開く');
    $nav.attr('aria-hidden', true).slideUp("slow");
  }
});


  //ブレイクポイントをまたいだときの挙動
  function checkBreakPoint() {
    //もし992px以上だったら
    if (point_header.matches) {
      //グロナビを表示
      $nav.attr('aria-hidden',false).show();
    }else {
      //スマホレイアウトの初期状態にリセット
      $trigger.attr('aria-expanded',false).attr('aria-label','開く');
      $nav.attr('aria-hidden',true).hide();
    }
  }
  point_header.addListener(checkBreakPoint);
