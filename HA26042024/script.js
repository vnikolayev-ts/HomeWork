
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Verhindert das tatsächliche Absenden des Formulars

    // Formulardaten sammeln
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Formulardaten in einem Alert anzeigen
    var alertMessage = "Name: " + name + "\nE-Mail: " + email + "\nNachricht: " + message;
    alert(alertMessage);

    // Optional: Formular zurücksetzen
    this.reset();
});
