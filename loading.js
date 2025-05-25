// Menghilangkan loading screen setelah 3 detik dan kemudian navigasi ke tab lain
window.onload = function() {
  setTimeout(function() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const content = document.getElementById('content');

    // Menghilangkan loading overlay dengan transisi
    loadingOverlay.style.opacity = '0';

    setTimeout(function() {
      loadingOverlay.style.display = 'none';
      content.style.display = 'block';
      window.location.href = 'Album.html';

      // Pilihan 1: Redirect tab saat ini ke halaman lain (ganti URL sesuai kebutuhan)
      // window.location.href = 'halaman-lain.html';

      // Pilihan 2: Buka tab baru lalu (opsional) tutup tab saat ini
      // const newTab = window.open('https://contoh.com', '_blank');
      // Jika ingin menutup tab ini setelah membuka tab baru, pastikan tab ini dibuka dengan window.open sebelumnya
      // window.close();

    }, 500);
  }, 3000);
};
