function copyText() {
    var text = document.getElementById("textToCopy").innerText;  // Pobieranie tekstu do skopiowania
    var tempInput = document.createElement("input");  // Tworzenie tymczasowego elementu input
    document.body.appendChild(tempInput);  // Dodanie input do dokumentu
    tempInput.value = text;  // Przypisanie tekstu do input
    tempInput.select();  // Zaznaczenie tekstu
    document.execCommand("copy");  // Kopiowanie tekstu
    document.body.removeChild(tempInput);  // Usunięcie tymczasowego input
  
  }
  