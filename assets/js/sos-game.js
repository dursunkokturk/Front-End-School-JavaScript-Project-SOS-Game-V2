let currentPlayer = "X";

function game(btn) {

  console.log("Tıklandı");
  
  // Butonda Yazi Var Mi Diye Bakiyoruz
  if (btn.innerHTML !== "") {
    return;
  }

  // Butona Tiklandiginda X Veya O Yazdiriyoruz
  btn.innerHTML = currentPlayer;

  // Sirayi Degistir
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}