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
    timerDisplay.textContent = "50:00";
  });

  // Sticky Note
  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
      const li = document.createElement("li");
      li.className = "task-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.className = "checkbox";
      checkbox.addEventListener("change", function () {
        if (this.checked) {
          li.classList.add("completed");
        } else {
          li.classList.remove("completed");
        }
      });

      const span = document.createElement("span");
      span.className = "task-text";
      span.textContent = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.innerHTML = "&times;";
      deleteBtn.addEventListener("click", () => {
        li.remove();
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);

      taskList.appendChild(li);
      taskInput.value = "";
    }
  }

  // Stikcy Note End

  // Alarm Start
  addBtn.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
});

// Alert Waktu Habis
