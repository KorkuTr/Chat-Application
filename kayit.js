document.addEventListener("DOMContentLoaded", function() {
    // Form elementini seç
    const form = document.getElementById("butonlar"); // "Document" değil "document" olacak
    const usernameInput = document.querySelector("input[name='username']");
    const passwordInput = document.querySelector("input[name='password']");
    const emailInput = document.querySelector("input[name='email']"); // E-posta inputu eklendi

    // Form doğrulama fonksiyonu
    function validateForm() {
        if (!usernameInput.value.trim() || !passwordInput.value.trim() || !emailInput.value.trim()) {
            alert("Lütfen tüm alanları doldurun!");
            return false;
        }

        if (passwordInput.value.length < 6) {
            alert("Şifre en az 6 karakter olmalıdır!");
            return false;
        }

        // Basit email kontrolü
        if (!emailInput.value.includes('@')) {
            alert("Geçerli bir e-posta adresi girin!");
            return false;
        }

        return true;
    }

    // Verileri localStorage'a kaydetme
    function saveFormData() {
        const userData = {
            username: usernameInput.value.trim(),
            password: passwordInput.value, // Gerçek uygulamada şifre hash'lenmeli
            email: emailInput.value.trim(), // E-posta eklendi
            lastLogin: new Date().toISOString()
        };

        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(userData));
        console.log("Kullanıcı verileri kaydedildi:", userData);
    }

    // Form submit event listener
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            if (validateForm()) {
                saveFormData();
                alert("Başarıyla kayıt olundu!");
                // Yönlendirme yapılabilir
                // window.location.href = "anasayfa.html";
            }
        });
    }

    // "Zaten kayıtlı mısın" butonu için event listener
    const kayitliBtn = document.querySelector(".btn-1");
    if (kayitliBtn) {
        kayitliBtn.addEventListener("click", function() {
            // Giriş sayfasına yönlendirme
            window.location.href = "giris.html";
        });
    }
});