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
  const confettiInterval = setInterval(() => {
    confetti({
      particleCount: 80,
      startVelocity: 30,
      spread: 360,
      angle: 90,
      origin: { y: 0.5, x: 0.5 },
      shapes: ["emoji"],
      shapeOptions: {
        emoji: {
          value: ["❤️", "💖", "💘"],
        },
      },
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
