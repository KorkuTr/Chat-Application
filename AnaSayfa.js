document.addEventListener("DOMContentLoaded", function() {



    // Giriş butonu (.btn-1)
    const giris = document.querySelector(".btn-1");
    if (giris) {
        giris.addEventListener("click", function(e) {
            e.preventDefault();
            window.location.href = "./giris.html";
        });
    } else {
        console.warn(".btn-1 classlı element bulunamadı");
    }

    // Kayıt butonları (.btn-2)
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
        console.warn(".btn-2 classlı element bulunamadı");
    }

    // Kayıt ol butonu (#kyt-ol)
    const kayitol = document.getElementById("kyt-ol");
    if (kayitol) {
        kayitol.addEventListener("click", function(e) {
            e.preventDefault();
            window.location.href = "./kayit.html";
        });
    } else {
        console.warn("#kyt-ol id'li element bulunamadı");
    }

    // Gönder butonu (#Grs-Gndr)
    const gonder = document.getElementById("Grs-Gndr");
    if (gonder) {
        gonder.addEventListener("click", function(e) {
            e.preventDefault();
            // Buraya form gönderme işlemleri eklenebilir
        });
    } else {
        console.warn("#Grs-Gndr id'li element bulunamadı");
    }


/* kayıları alma kısmı */
const form =document.getElementById("butonlar");

});