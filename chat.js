document.addEventListener("DOMContentLoaded", function() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const messagesDiv = document.getElementById("messages");
    const messageForm = document.getElementById("message-form");
    const messageInput = document.getElementById("message-input");
    const usernameDisplay = document.getElementById("username-display");

    // Kullanıcı giriş yapmış mı kontrol et
    if (!currentUser) {
        alert("Önce giriş yapmalısınız!");
        window.location.href = "giris.html";
        return;
    }

    // Kullanıcı adını göster
    usernameDisplay.textContent = currentUser.username;

    // Mesaj gönderme
    messageForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const message = messageInput.value.trim();
        if (message) {
            addMessage(currentUser.username, message);
            messageInput.value = "";
        }
    });

    // Mesaj ekleme fonksiyonu
    function addMessage(sender, text) {
        const messageElement = document.createElement("div");
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        messagesDiv.appendChild(messageElement);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    // Örnek mesajlar
    addMessage("Sistem", "Sohbet odasına hoş geldiniz!");
});