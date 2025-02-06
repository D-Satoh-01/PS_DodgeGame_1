
// 変数群
let playerX = 350;
let playerY = 450;




// 描画関連
function draw(){
  let screen = document.getElementById("screen").getContext("2d");

  // 背景の描画
  screen.fillStyle = "#222222"; // 色
  screen.fillRect(0,0,720,540); // 図形の開始座標＆終了座標

  // プレイヤーの四角の描画
  screen.fillStyle = "#cccccc"; // 色
  screen.fillRect(playerX, playerY, 30, 30); // 図形の開始座標＆終了座標
}


// プレイヤーの四角形の移動 // ★
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight"){
    playerX += 5;
  }
  if (event.code === "ArrowLeft"){
    playerX -= 5;
  }
  if (event.code === "ArrowDown"){
    playerY += 5;
  }
  if (event.code === "ArrowUp"){
    playerY -= 5;
  }
})

// ゲームを更新させる
function update(){
  draw();

  requestAnimationFrame(update); // デバイスのFPSに合わせて実行
}

// ページ読み込み時に1回実行される
window.onload = function(){
  update()
}