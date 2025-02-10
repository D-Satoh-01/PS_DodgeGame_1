
// 変数群
let playerX = 350;
let playerY = 450;

let playerMoveFlagR = false;
let playerMoveFlagL = false;
let playerMoveFlagD = false;
let playerMoveFlagU = false;




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


// キーを押していることを検出
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowRight"){
    playerMoveFlagR = true;
  }
  if (event.code === "ArrowLeft"){
    playerMoveFlagL = true;
  }
  if (event.code === "ArrowDown"){
    playerMoveFlagD = true;
  }
  if (event.code === "ArrowUp"){
    playerMoveFlagU = true;
  }
})

// キーを離していることを検出
window.addEventListener("keyup", (event) => {
  if (event.code === "ArrowRight"){
    playerMoveFlagR = false;
  }
  if (event.code === "ArrowLeft"){
    playerMoveFlagL = false;
  }
  if (event.code === "ArrowDown"){
    playerMoveFlagD = false;
  }
  if (event.code === "ArrowUp"){
    playerMoveFlagU = false;
  }
})

// プレイヤーの四角形の移動（と外周への当たり判定）
function movePlayer() {
  if (playerMoveFlagR === true && playerX + 30 < 720){
    playerX += 3;
  }
  if (playerMoveFlagL === true && playerX > 0){
    playerX -= 3;
  }
  if (playerMoveFlagD === true && playerY + 30 < 540){
    playerY += 3;
  }
  if (playerMoveFlagU === true && playerY > 0){
    playerY -= 3;
  }
}


// ゲームの描画やデータを更新させる
function update(){
  draw();
  movePlayer();

  requestAnimationFrame(update); // デバイスのFPSに合わせて実行
}

// ページ読み込み時に1回実行される
window.onload = function(){
  update()
}