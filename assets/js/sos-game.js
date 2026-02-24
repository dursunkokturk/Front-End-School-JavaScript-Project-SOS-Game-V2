let currentPlayer = "X";
let gameActive = true;

function game(btn) {

  console.log("Tıklandı");

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
      
      // Kazanma Durumu Olursa Kullaniciyi Bilgilendiriyoruz
      alert(buttons[a].innerHTML + " kazandı!");

      // Kazanma Isleminden Sonra Oyunu Durduruyoruz
      gameActive = false;

      return;
    }
  }

  // Beraberlik Kontrolu
  let isDraw = true;

  for (let i = 0; i < buttons.length; i++) {
    if (buttons[i].innerHTML === "") {
      isDraw = false;
      break;
    }
  }

  if (isDraw) {
    alert("Oyun berabere!");
    gameActive = false;
  }
}