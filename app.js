let star = document.querySelector("#star"); //子元素
let background = document.querySelector("#background"); //父元素


let speedX = 3; //每次橫向運動量
let speedY = 3; //每次縱向運動量

function move() {
  checkCollision(background, star); //每次移動前都先檢測

  let starStyle = getComputedStyle(star);
  let currentLeft = parseInt(starStyle.left); //一開始與左邊距離
  let currentTop = parseInt(starStyle.top); //一開始與上方距離
  let left = currentLeft + speedX;
  let top = currentTop + speedY;
  star.style.left = left + "px";
  star.style.top = top + "px";
}

function checkCollision(parent, el) {
  //el = element
  let style = getComputedStyle(el);
  let left = parseInt(style.left);
  let top = parseInt(style.top);
  let width = parseInt(style.width);
  let height = parseInt(style.height);

  let parentStyle = getComputedStyle(parent);
  let pWidth = parseInt(parentStyle.width);
  let pHeight = parseInt(parentStyle.height);

  //檢測左邊
  if (left < 0) {
    left = 0;
    speedX *= -1; //變成反方向運動
  }

  //檢測右邊
  if (left > pWidth - width) {
    left = pWidth - width;
    speedX *= -1; //變成反方向運動
  }
  if (top < 0) {
    //檢測上方
    top = 0;
    speedY *= -1; //變成反方向運動
  }

  //檢測下方
  if (top > pHeight - height) {
    top = pHeight - height;
    speedY *= -1; //變成反方向運動
  }
}

//每0.02秒檢查/移動一次
setInterval(() => {
  move();
}, 20);
