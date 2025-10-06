// Sayfa yüklendiğinde çalışacak fonksiyon
document.addEventListener('DOMContentLoaded', function() {
    
    // HTML dosyasındaki butonu ve hata mesajı kutusunu seçiyoruz
    const openAppButton = document.getElementById('open-app-button');
    const errorMessage = document.getElementById('error-message');

    // Butona tıklama olayını dinliyoruz
    openAppButton.addEventListener('click', function(event) {
        
        // Formun gönderilmesini veya sayfanın yenilenmesini engelliyoruz (gerekiyorsa)
        event.preventDefault(); 
        
        // 1. Hata mesajını görünür yap
        errorMessage.classList.remove('hidden');
        
        // 2. Bir süre sonra (örneğin 3 saniye sonra) mesajı gizle
        setTimeout(() => {
            errorMessage.classList.add('hidden');
        }, 3000); // 3000 milisaniye = 3 saniye
        
        // OPSİYONEL: İstersen, mesaj gizlendikten hemen sonra orijinal siteye yönlendirebilirsin.
        /* setTimeout(() => {
            window.location.href = "https://clashofclans.com";
        }, 3500); 
        */

        console.log("Şaka başarılı: Sahte hata mesajı gösterildi.");
    });
});
