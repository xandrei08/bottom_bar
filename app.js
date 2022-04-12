let buttonSound = new Audio("./assets/Button_Click.wav");

function play() {
  buttonSound.play();
}
// Auto spin big button
let buttonSpin = document.querySelector(".auto_overlay_btn");
buttonSpin.addEventListener("click", () => {
  buttonSpin.classList.add("auto_animation");

  setTimeout(() => {
    buttonSpin.classList.remove("auto_animation");
  }, 2000);
});

// Auto spin selector
let autoBtn = document.querySelector(".dropBtn");
let spinBox = document.createElement("div");
spinBox.classList.add("dropdown_content");
autoBtn.addEventListener("mouseover", function () {
  spinBox.innerHTML = `
  <a class="until_feature" href="#">UNTIL FEATURE</a><br>
  <a class="spins_25" href="#">25 SPINS</a><br>
  <a class="spins_20" href="#">20 SPINS</a><br>
  <a class="spins_15" href="#">15 SPINS </a><br>
  <a class="spins_10" href="#">10 SPINS </a><br>
  <a class="SPINS_5" href="#">5 SPINS </a>`;
  autoBtn.appendChild(spinBox);
});

autoBtn.addEventListener("mouseleave", function () {
  spinBox.innerHTML = "";
});

// Turbo button
let turboBtn = document.querySelector(".turbo_btn");
let turboBox = document.querySelector(".turbo_box");
turboBtn.addEventListener("click", start);

function start() {
  turboBtn.style.marginTop = "12px";
  turboBox.style.backgroundColor = "#7c0000";
  turboBtn.removeEventListener("click", start);
  turboBtn.addEventListener("click", stop);
}

function stop() {
  turboBtn.style.marginTop = "0px";
  turboBox.style.backgroundColor = "#0c4206";
  turboBtn.addEventListener("click", stop);
  turboBtn.addEventListener("click", start);
}

// Increase and Decrease Bet
let minusBet = document.querySelector(".minus_btn");
let plusBet = document.querySelector(".plus_btn");
let bet = document.querySelector(".text_area2");

let increaseBet = parseFloat(bet.textContent);
let totalBet = 0.0;

plusBet.addEventListener("click", addBet);

function addBet() {
  totalBet += increaseBet;
  bet.textContent = totalBet.toFixed(2);
  if (bet.textContent == 3) {
    plusBet.disabled = true;
    minusBet.disabled = false;
  }
  minusBet.disabled = false;
}

minusBet.addEventListener("click", subBet);

function subBet() {
  totalBet -= 0.15;
  bet.textContent = totalBet.toFixed(2);
  if (bet.textContent == 0.15) {
    minusBet.disabled = true;
    plusBet.disabled = false;
  }
  plusBet.disabled = false;
}
