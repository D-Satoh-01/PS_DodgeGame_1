
// 描画関連
function draw(){
  let screen = document.getElementById("screen").getContext("2d");

  // 背景の描画
  screen.fillStyle = "#222222"; // 色
  screen.fillRect(0,0,720,540); // サイズ

  // プレイヤーの四角の描画
  screen.fillStyle = "#cccccc"; // 色
  screen.fillRect(0,0,30,30); // サイズ
}


// ページ読み込み時に1回実行される
window.onload = function(){
  draw();
}
