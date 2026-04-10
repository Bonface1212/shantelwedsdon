AOS.init();

// COUNTDOWN
const weddingDate = new Date("June 7, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const gap = weddingDate - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((gap / (1000 * 60)) % 60);

  document.getElementById("countdown").innerHTML =
    `${days} Days ${hours} Hrs ${mins} Min`;
}, 1000);

// MUSIC
function toggleMusic() {
  const music = document.getElementById("music");
  music.paused ? music.play() : music.pause();
}

// LIGHTBOX
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}