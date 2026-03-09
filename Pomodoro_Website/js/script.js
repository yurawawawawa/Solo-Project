console.log("js kebaca");

document.addEventListener("DOMContentLoaded", () => {
  const timerDisplay = document.getElementById("timer");
  const startBtn = document.getElementById("startBtn");
  const resetBtn = document.getElementById("resetBtn");
  const alarmSound = document.getElementById("alarmSound");

  //   Definisi Variabel
  let time = 5 * 600;
  let interval = null;
  let isRunning = false;

  //   UPDATE TIMERNYA :
  function updateTimer() {
    if (time === 0) {
      clearInterval(interval);
      isRunning = false;

      alarmSound.currentTime = 0;
      alarmSound.play();

      setTimeout(() => {
        alert("Waktu habis! 🔔");
        alarmSound.pause();
        alarmSound.currentTime = 0;
      }, 100);
      return;
    }

    time--;

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  //   Button Start
  startBtn.addEventListener("click", () => {
    if (!isRunning) {
      updateTimer(); // ⭐ TAMBAH INI
      interval = setInterval(updateTimer, 1000);
      isRunning = true;
      startBtn.textContent = "PAUSE";
    } else {
      clearInterval(interval);
      isRunning = false;
      startBtn.textContent = "START";
    }
  });

  //   button reset
  resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    time = 5 * 600;
    isRunning = false;
    startBtn.textContent = "START";
    timerDisplay.textContent = "50.00";
  });
});

// Alert Waktu Habis
