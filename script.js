const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
var firstAudio = document.getElementById("firstAudio");
var secondAudio = document.getElementById("secondAudio");

document.getElementById("startButton").addEventListener("click", function () {
  document.getElementById("initialUI").style.display = "none";
  document.getElementById("mainUI").style.display = "block";
  firstAudio.play();
});

noButton.addEventListener("mouseover", () => {
  noButton.style.position = "absolute";
  noButton.style.left = Math.random() * 80 + "vw";
  noButton.style.top = Math.random() * 80 + "vh";
});

yesButton.addEventListener("click", () => {
  document.querySelector(".container h1").style.display = "none";
  document.querySelector(".buttons").style.display = "none";
  popup.style.display = "block";
  popup.style.opacity = "1";
  popup.style.fontSize = "24px";
  popup.style.animation = "growText 2s forwards";
  const heart = confetti.shapeFromPath({
    path: "M167.5 72.5 C167.5 55 152.5 40 135 40 C120 40 107.5 50 102.5 62.5 C97.5 50 85 40 70 40 C52.5 40 37.5 55 37.5 72.5 C37.5 110 102.5 150 102.5 150 C102.5 150 167.5 110 167.5 72.5 Z",
    matrix: [0.03, 0, 0, 0.03, -3, -3],
  });

  const confettiInterval = setInterval(() => {
    confetti({
      particleCount: 80,
      startVelocity: 25,
      spread: 120,
      gravity: 0.8,
      origin: { y: 0.6 },
      shapes: [heart],
      colors: ["#ff4d6d", "#ff758f", "#ff8fa3"],
    });
  }, 1500);

  firstAudio.pause();
  secondAudio.play();
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
  clearInterval(confettiInterval);
});

// Hide the popup initially
popup.style.display = "none";
