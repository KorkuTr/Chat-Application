document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("butonlar");
  const usernameInput = document.querySelector("input[name='username']");
  const passwordInput = document.querySelector("input[name='password']");
  const kodInput = document.querySelector("input[name='kod']");
  const girisButton = document.getElementById("Grs-Gndr");
  const kayitButton = document.querySelector(".btn-2");
  
  const GECERLI_KODLAR = ["12345", "123456", "1234567"];

  function loginUser() {
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      const kod = kodInput.value.trim();

      // 1. Kod kontrolü
      if (!GECERLI_KODLAR.includes(kod)) {
          alert("Geçersiz giriş kodu! Lütfen doğru kodu giriniz.");
          return false;
      }

      // 2. Kullanıcı adı ve şifre kontrolü
      if (!username || !password) {
          alert("Lütfen kullanıcı adı ve şifrenizi girin!");
          return false;
      }

      // 3. Kullanıcı doğrulama
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
          localStorage.setItem("currentUser", JSON.stringify(user));
          alert("Giriş başarılı! Sohbet sayfasına yönlendiriliyorsunuz.");
          window.location.href = "chat.html";
          return true;
      } else {
          alert("Kullanıcı adı veya şifre hatalı!");
          return false;
      }
  }

  // Event listener'lar
  if (form) form.addEventListener("submit", e => { e.preventDefault(); loginUser(); });
  if (girisButton) girisButton.addEventListener("click", e => { e.preventDefault(); loginUser(); });
  if (kayitButton) kayitButton.addEventListener("click", e => {
      e.preventDefault();
      window.location.href = kayitButton.getAttribute("data-target") || "kayit.html";
  });
});