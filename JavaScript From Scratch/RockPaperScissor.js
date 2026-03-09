const pilihan = ["Rock", "Paper", "Scissors"];

function pilihanComputer() {
  const random = Math.floor(Math.random() * 3);
  return pilihan[random];
}

function penentuMenang(pilihan, pilihanComputer) {
  if (pilihan === pilihanComputer) {
    return "draw";
  }
  if (
    (pilihan === "Rock" && pilihanComputer === "Scissors") ||
    (pilihan === "Paper" && pilihanComputer === "Rock") ||
    (pilihan === "Scissors" && pilihanComputer === "Paper")
  ) {
    return "player";
  }

  return "computer";
}

let playerScore = 0;
let computerScore = 0;
let round = 0;
function playRound(pilihan) {
  const pilihanComp = pilihanComputer();
  round++;

  console.log(
    `Round ${round}: Kamu pilih ${pilihan} dan Komputer ${pilihanComp}`,
  );

  if (penentuMenang(pilihan, pilihanComp) === "player") {
    playerScore++;
  } else if (penentuMenang(pilihan, pilihanComp) === "computer") {
    computerScore++;
  } else if (penentuMenang(pilihan, pilihanComp === "draw")) {
    console.log("WOW KALIAN SERI!, SENGIT SEKALI!");
  }

  console.log(`Score kamu ${playerScore} dan Score Komputer ${computerScore}`);

  if (playerScore >= 2) {
    console.log("KEREN KAMU HOKI BANGET");
  } else if (computerScore >= 2) {
    console.log(`KOMPUTER MENANG DENGAN SCORE ${computerScore}, KAMU CACAD!`);
  }
}

playRound("Paper");
playRound("Scissors");
playRound("Rock");
