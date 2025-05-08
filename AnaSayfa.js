document.addEventListener("DOMContentLoaded", function() {
    // Giriş butonu
    const giris = document.querySelector(".btn-1");
    if (giris) {
        giris.addEventListener("click", function(e) {
            e.preventDefault();
            window.location.href = "./giris.html";
        });
    } else {
        console.warn(".btn-1 class'lı element bulunamadı");
    }

    // Kayıt butonları
    const kayitButtons = document.querySelectorAll(".btn-2");
    if (kayitButtons.length > 0) {
        kayitButtons.forEach(button => {
            button.addEventListener("click", function(e) {
                e.preventDefault();
                const target = button.getAttribute("data-target");
                if (target) {
                    window.location.href = target;
                } else {
                    console.warn("data-target attribute eksik");
                }
            });
        });
    } else {
        console.warn(".btn-2 class'lı element bulunamadı");
    }
});
