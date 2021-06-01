let star = document.querySelector("#star");
let computedStyle = getComputedStyle(star);

let speedX = 3;
//let speedY = 3;
function move() {
  let currentLeft = parseInt(computedStyle.left); //與視窗左邊距離 (44)
  let currentTop = parseInt(computedStyle.top); //與視窗上方距離 (47)
  let left = currentLeft + speedX;

  star.style.left = left + "px";
}

setInterval(() => {
  move();
}, 20);
