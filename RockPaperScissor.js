const pilihan = ["Rock", "Paper", "Scissors"];

function pilihanComputer() {
  const random = Math.floor(Math.random() * 3);
  return pilihan[random];
}

function penentuMenang(pilihanTangan, tanganComputer) {
  if (pilihanTangan === tanganComputer) {
    return "draw";
  }
  if (
    (pilihanTangan === "Rock" && tanganComputer === "Scissors") ||
    (pilihanTangan === "Paper" && tanganComputer === "Rock") ||
    (pilihanTangan === "Scissors" && tanganComputer === "Paper")
  ) {
    return "player";
  }

  return "computer";
}

let playerScore = 0;
let computerScore = 0;
let round = 0;
let isGameOver = false;

// Color order matching the retro arcade high scores style
const arcadeColors = [
  "color-purple", // 1st
  "color-pink", // 2nd
  "color-red", // 3rd
  "color-orange", // 4th
  "color-green", // 5th
  "color-green", // 6th
  "color-cyan", // 7th
  "color-cyan", // 8th
  "color-blue", // 9th
  "color-blue", // 10th
];

function playGame(playerChoice) {
  if (isGameOver) return; // Prevent playing if game is resetting

  const compChoice = pilihanComputer();
  const winner = penentuMenang(playerChoice, compChoice);
  round++;

  let roundResultText = "";
  if (winner === "player") {
    playerScore++;
    roundResultText = `Pilih ${playerChoice} vs ${compChoice} (MENANG)`;
  } else if (winner === "computer") {
    computerScore++;
    roundResultText = `Pilih ${playerChoice} vs ${compChoice} (KALAH)`;
  } else {
    roundResultText = `SERI! SENGIT SEKALI!`;
  }

  // Update Score Board
  document.getElementById("player-score").innerText = playerScore;
  document.getElementById("comp-score").innerText = computerScore;

  // Status message based on the original script
  const statusMsg = document.getElementById("status-message");
  statusMsg.innerText = `Score kamu ${playerScore} dan Score Komputer ${computerScore}`;
  statusMsg.className = "color-cyan";

  addLogEntry(roundResultText);

  // Original script check: Player or Computer wins if score reaches 2
  if (playerScore >= 2 || computerScore >= 2) {
    isGameOver = true;
    let finalMsg = "";
    if (playerScore >= 2) {
      finalMsg = "KEREN KAMU HOKI BANGET (GAME OVER)";
      statusMsg.className = "color-yellow blink";
    } else {
      finalMsg = `KOMPUTER MENANG DENGAN SCORE ${computerScore}, KAMU CACAD!`;
      statusMsg.className = "color-red blink";
    }

    statusMsg.innerText = finalMsg;

    setTimeout(() => resetGame(), 4000);
  }
}

function addLogEntry(text) {
  const logContainer = document.getElementById("round-log");

  if (round === 1) {
    logContainer.innerHTML = "";
  }

  const entry = document.createElement("div");

  const colorClass = arcadeColors[(round - 1) % arcadeColors.length];
  entry.className = `log-entry ${colorClass}`;

  const rank =
    round +
    (round === 1 ? "ST" : round === 2 ? "ND" : round === 3 ? "RD" : "TH");
  entry.innerHTML = `<span>${rank}</span> <span>${text}</span>`;

  if (logContainer.children.length >= 6) {
    logContainer.removeChild(logContainer.lastChild);
  }

  logContainer.prepend(entry);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  isGameOver = false;

  document.getElementById("player-score").innerText = "0";
  document.getElementById("comp-score").innerText = "0";

  const logContainer = document.getElementById("round-log");
  logContainer.innerHTML =
    '<div class="log-entry color-purple blink" style="justify-content:center;">INSERT COIN TO PLAY</div>';

  const statusMsg = document.getElementById("status-message");
  statusMsg.innerText = "AWAITING INPUT...";
  statusMsg.className = "color-green";
}
