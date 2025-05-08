document.addEventListener("DOMContentLoaded", function() {
    // Form elements
    const form = document.getElementById("butonlar");
    const usernameInput = document.querySelector("input[name='username']");
    const passwordInput = document.querySelector("input[name='password']");
    const kodInput = document.querySelector("input[name='kod']");

    // Form validation function
    function validateForm() {
        // Check if fields are empty
        if (!usernameInput.value.trim() || !passwordInput.value.trim() || !kodInput.value.trim()) {
            alert("Lütfen tüm alanları doldurun!");
            return false;
        }

        // Check password length
        if (passwordInput.value.length < 6) {
            alert("Şifre en az 6 karakter olmalıdır!");
            return false;
        }

        return true;
    }

    // Save data to localStorage
    function saveFormData() {
        const userData = {
            username: usernameInput.value.trim(),
            password: passwordInput.value, // In real apps, password should be hashed
            kod: kodInput.value.trim(),
            lastLogin: new Date().toISOString()
        };

        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(userData));
        console.log("Kullanıcı verileri kaydedildi:", userData);
    }

    // Form submit handler
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            if (validateForm()) {
                saveFormData();
                alert("Başarıyla kayıt olundu!");
                // Redirect if needed
                // window.location.href = "anasayfa.html";
            }
        });
    }

    // "Kayıt ol" button event listener
    const kayitBtn = document.querySelector(".btn-2");
    if (kayitBtn) {
        kayitBtn.addEventListener("click", function() {
            // Redirect to registration page
            const target = kayitBtn.getAttribute("data-target");
            if (target) {
                window.location.href = target;
            }
        });
    }
});