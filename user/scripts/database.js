function login() {
    var inputuser = document.getElementById("user").value; // Pobranie wartości pola użytkownika
    var inputpassword = document.getElementById("password").value; // Pobranie wartości pola hasła

    if (inputuser === 'admin' && inputpassword === 'luckcraftadminsystem') { // Porównanie wartości pól
        console.log("admin logged in.");
        window.location.href = "https://luckcraft.pl/user/admin"; // Przekierowanie do strony dla admina
    } else {
        alert("Niepoprawne hasło lub nazwa!"); // Wyświetlenie komunikatu o błędzie
    }
}
