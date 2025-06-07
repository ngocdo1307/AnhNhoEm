const button = document.getElementById("showButton");
const container = document.getElementById("boxContainer");

const audio = new Audio("music.mp3");
audio.loop = true;

function createHeart() {
  const colors = ["#ff5c8d", "#ff4d4d", "#ffb347", "#7ec8e3", "#b19cd9"];

  for (let i = 0; i < 3; i++) { // Tạo 3 trái tim mỗi lần gọi
    const heart = document.createElement("div");
    heart.className = "heart";

    const color = colors[Math.floor(Math.random() * colors.length)];
    heart.style.backgroundColor = color;

    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${Math.random() * window.innerHeight}px`;
    heart.style.zIndex = 9999;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 2000);
  }
}



button.addEventListener("click", () => {
  audio.play();

  const numberOfBoxes = 520;

  for (let i = 0; i < numberOfBoxes; i++) {
    setTimeout(() => {
      const box = document.createElement("div");
      box.className = "box";
      box.innerHTML = `
        <div class="box-header">Đầy Bộ Nhớ</div>
        <div class="box-body">Anh Nhớ Em</div>
      `;

      const maxX = window.innerWidth - 240;
      const maxY = window.innerHeight - 100;

      const x = Math.random() * maxX;
      const y = Math.random() * maxY;

      box.style.left = `${x}px`;
      box.style.top = `${y}px`;

      container.appendChild(box);
    }, i * 100);
  }

  // Tạo tim bay mãi mãi
  setInterval(createHeart, 50);

  button.disabled = true;
  button.innerText = "Hiện rồi đó ^^";
});
