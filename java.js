const rulesButton = document.querySelector(".rules-btn");
const rules = document.querySelector(".rules-of-game");
const closeRulesBtn = document.querySelector(".close-btn");
const scoreBoard = document.querySelector(".score");
const moves = document.querySelector(".moves");

let computerChoice;
let playerChoice;
let score = 0;

const choices = ["paper", "scissors", "rock"];
const choicesStyles = {
  paper: "hsl(230, 89%, 62%), hsl(230, 89%, 65%)",
  scissors: "hsl(39, 89%, 49%), hsl(40, 84%, 53%)",
  rock: "hsl(349, 71%, 52%), hsl(349, 70%, 56%)",
};

function toggleRules(show) {
  rules.classList.toggle("hide", !show);
  rules.classList.toggle("flex", show);
}

rulesButton.addEventListener("click", () => toggleRules(true));
closeRulesBtn.addEventListener("click", () => toggleRules(false));

function attachEventListeners() {
  const gameButton = document.querySelectorAll(".game-button");
  gameButton.forEach((button) => {
    button.addEventListener("click", () => {
      playerChoice = button.id;
      computerChoice = getComputerChoice();
      displayChoices(button.innerHTML);
      computerMove(computerChoice);
      resultSection(computerChoice, playerChoice);
    });
  });
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function displayChoices(playerHTML) {
  moves.classList.add("column");
  moves.innerHTML = `
    <div class="flex flex-col gap-4 items-center sm:flex-col-reverse">
        <div>${playerHTML}</div>
          <p class="uppercase text-white font-bold">You picked</p>
      </div>
    <div class="result">
    </div>
    <div class="flex flex-col gap-4 items-center sm:flex-col-reverse">
      <div class=" bg-transparent house-choice sm:w-5 sm:h-5" style=" width: 8rem; height: 8rem;">
        <div class="bg-neutral-800 rounded-full" style=" width: 7rem; height: 7rem;"></div>
      </div>
      <p class="uppercase text-white font-bold text-center">The house picked</p>
    </div>
  `;
}

function computerMove(choice) {
  const houseChoice = document.querySelector(".house-choice");
  setTimeout(() => {
    houseChoice.innerHTML = `
      <button class="game-button flex flex-col items-center justify-center" style="width: 8rem; height: 8rem; position: relative" id="paper">
        <div class="flex items-center justify-center" style="width: 8rem; height: 8rem">
          <div class="rounded-full" style="
            background: linear-gradient(
              to right, ${choicesStyles[choice]});
            width: 7rem;
            height: 7rem;
            display: flex;
            align-items: center;
            justify-content: center;
          ">
          <div
            class="flex items-center justify-center rounded-full bg-white"
            style="
              width: 5rem;
              height: 5rem;
              box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.2);
          ">
          <img
            src="./images/icon-${choice}.svg"
            class="h-10 w-10 object-contain"
          />
        </div>
      </div>
    </div>
  </button>
    `;
  }, 3000);
}

function resultSection(computerChoice, playerChoice) {
  let result;
  setTimeout(() => {
    if (computerChoice === playerChoice) {
      result = "tie";
    } else if (
      (computerChoice === "rock" && playerChoice === "scissors") ||
      (computerChoice === "paper" && playerChoice === "rock") ||
      (computerChoice === "scissors" && playerChoice === "paper")
    ) {
      result = "you lose";
    } else {
      result = "you win";
    }

    if (result === "you win") {
      score++;
    }
    updateScore(result);
  }, 4000);
}

function updateScore(result) {
  scoreBoard.innerHTML = score;
  const gameResult = document.querySelector(".result");
  gameResult.innerHTML = `
      <div style=" width: 8rem;" class="mx-auto self-center mt-8 flex items-center flex-col gap-4">
            <h3 class="text-white uppercase text-2xl font-bold">${result}</h3>
            <button class="bg-white py-2 px-6 rounded-md " onclick="playAgain()">Play again</button>
      </div>
    `;
}

function playAgain() {
  moves.classList.remove("column")
  moves.innerHTML = `
          <button
            class="game-button flex flex-col items-center justify-center"
            style="width: 8rem; height: 8rem; position: relative"
            id="paper"
          >
            <div
              class="flex items-center justify-center"
              style="width: 8rem; height: 8rem"
            >
              <div
                class="rounded-full"
                style="
                  background: linear-gradient(
                    to right,
                    hsl(230, 89%, 62%),
                    hsl(230, 89%, 65%)
                  );
                  width: 7rem;
                  height: 7rem;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <div
                  class="flex items-center justify-center rounded-full bg-white"
                  style="
                    width: 5rem;
                    height: 5rem;
                    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.2);
                  "
                >
                  <img
                    src="./images/icon-paper.svg"
                    class="h-10 w-10 object-contain"
                  />
                </div>
              </div>
            </div>
          </button>

          <button
            class="game-button flex items-center justify-center"
            style="width: 8rem; height: 8rem"
            id="scissors"
          >
            <div
              class="flex items-center justify-center"
              style="width: 8rem; height: 8rem"
            >
              <div
                class="flex items-center justify-center rounded-full"
                style="
                  background: linear-gradient(
                    to right,
                    hsl(39, 89%, 49%),
                    hsl(40, 84%, 53%)
                  );
                  width: 7rem;
                  height: 7rem;
                "
              >
                <div
                  class="flex items-center justify-center rounded-full bg-white"
                  style="
                    width: 5rem;
                    height: 5rem;
                    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.2);
                  "
                >
                  <img
                    src="./images/icon-scissors.svg"
                    class="h-10 w-10 object-contain"
                  />
                </div>
              </div>
            </div>
          </button>
          <button
            class="game-button col-span-2 mx-auto flex items-center justify-center"
            style="width: 8rem; height: 8rem"
            id="rock"
          >
            <div
              class="flex items-center justify-center"
              style="width: 8rem; height: 8rem"
            >
              <div
                class="flex items-center justify-center rounded-full"
                style="
                  background: linear-gradient(
                    to right,
                    hsl(349, 71%, 52%),
                    hsl(349, 70%, 56%)
                  );
                  width: 7rem;
                  height: 7rem;
                "
              >
                <div
                  class="flex items-center justify-center rounded-full bg-white"
                  style="
                    width: 5rem;
                    height: 5rem;
                    box-shadow: inset 0 4px 10px rgba(0, 0, 0, 0.2);
                  "
                >
                  <img
                    src="./images/icon-rock.svg"
                    class="h-10 w-10 object-contain"
                  />
                </div>
              </div>
            </div>
          </button>
  `;
  attachEventListeners();
}

attachEventListeners();
