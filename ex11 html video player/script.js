// pegar os elementos
const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscreen = player.querySelector(".fullscreen");

// funcoes

function togglePlay() {
  // const metodo = video.paused ? 'play' : 'pause';
  // video[metodo]();

  if (video.paused) {
    video.play();
    toggle.textContent = "▐▐";
  } else {
    video.pause();
    toggle.textContent = "►";
  }
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  //   console.log(e);
}

function toggleFullscreen() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

// function turnFullscreen() {
//   video.requestFullscreen();
// }
// function offFullscreen() {
//   document.exitFullscreen();
// }

// linkar os event listners
video.addEventListener("click", togglePlay);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
video.addEventListener("timeupdate", handleProgress);

// Escolher tempo do video clicando e arrastando o mouse
let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => {
  mousedown = true;
});
progress.addEventListener("mouseup", () => {
  mousedown = false;
});

fullscreen.addEventListener("click", toggleFullscreen);
