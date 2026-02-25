let currentPlayer = "X";
let gameActive = true;

let scoreX = 0;
let scoreO = 0;
let scoreDraw = 0;

// LocalStorage'dan skorlari Aliyoruz
let storedScores = JSON.parse(localStorage.getItem("sosScores"));

if (storedScores) {
  scoreX = storedScores.x;
  scoreO = storedScores.o;
  scoreDraw = storedScores.draw;
} else {
  scoreX = 0;
  scoreO = 0;
  scoreDraw = 0;

  // Ilk Acilista localStorage Olusturuyoruz
  saveScores();
}

// Skor Sonuclarini Dom Uzerinden index.html Dosyasina Yazdiriyoruz
scoreXResult.innerText = scoreX;
scoreOResult.innerText = scoreO;
scoreDrawResult.innerText = scoreDraw;

function game(btn) {

  if (!gameActive) {
    return;
  }

  // Butonda Yazi Var Mi Diye Bakiyoruz
  if (btn.innerHTML !== "") {
    return;
  }

  // Butona Tiklandiginda X Veya O Yazdiriyoruz
  btn.innerHTML = currentPlayer;

  checkWinner();

  // Sirayi Degistir
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function checkWinner() {

  let buttons = document.querySelectorAll(".click");

  let winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  // Matris Icine Alinan Olasilik Sayisini Array Icinde Tarama Yapiyoruz
  for (let i = 0; i < winCombinations.length; i++) {

    // Olasiliklari i Degiskeni Uzerinden Matris Icinde Dagitiyoruz
    let [a, b, c] = winCombinations[i];

    /* Butona Tiklandiginda Cikan Sonuclari Karsilastiriyoruz
      Ayni Hizada 3 Tane X Yada O Denk Gelirse Kazanma Durumu Gerceklesiyor */
    if (buttons[a].innerHTML !== "" && buttons[a].innerHTML === buttons[b].innerHTML && buttons[a].innerHTML === buttons[c].innerHTML) {

      if (buttons[a].innerHTML === "X") {
        scoreX++;
        saveScores();
        scoreXResult.innerText = scoreX;
        alert("X'in Puani : " + scoreX);
        console.log("X'in Puani : " + scoreX);
        console.log("X'in Puani : " + scoreXResult.value.innerText);
      }

      if (buttons[a].innerHTML === "O") {
        scoreO++;
        saveScores();
        scoreOResult.innerText = scoreO;
        alert("O'nun Puani : " + scoreO);
        console.log("O'nun Puani : " + scoreO);
        console.log("O'nun Puani : " + scoreOResult.value.innerText);
      }

      // Oyundaki Score Durumunu Kaydediyoruz
      saveScores();

      // Kazanma Durumu Olursa Kullaniciyi Bilgilendiriyoruz
      alert(buttons[a].innerHTML + " kazandı!");

      // Kazanma Isleminden Sonra Oyunu Durduruyoruz
      gameActive = false;

      return;
    }
  }

  // Beraberlik Kontrolu
  // let isDraw = true;
  let isDraw = Array.from(buttons).every(btn => btn.innerHTML !== "");

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML === "") {
      isDraw = false;
      break;
    }
  }

  if (isDraw) {
    scoreDraw++;
    saveScores();

    scoreDrawResult.innerText = scoreDraw;
    
    alert("X ve O Beraberlik Puani : " + scoreDraw);
    console.log("X ve O Beraberlik Puani : " + scoreDraw);
    console.log("X ve O Beraberlik Puani : " + scoreOResult.value.innerText);
    
    alert("Oyun berabere!");
    gameActive = false;
  }
}

function saveScores() {
  let scores = {
    x: scoreX,
    o: scoreO,
    draw: scoreDraw
  };

  localStorage.setItem("sosScores", JSON.stringify(scores));
}

function resetGame() {
  // Tum Butonlari Seciyoruz
  let buttons = document.querySelectorAll(".click");

  // Tum Butonlarin Icini Temizliyoruz
  buttons.forEach(btn => btn.innerHTML = "");

  gameActive = true;
  currentPlayer = "X";
  saveScores();
}