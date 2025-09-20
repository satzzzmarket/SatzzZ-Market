// index.js
<script src="index.js"></script>

// Fungsi buka WhatsApp dengan pesan produk
function openWhatsApp(productName) {
  const phoneNumber = '6287856444909'; // Ganti dengan nomor WhatsApp Anda (format internasional tanpa +)
  const message = encodeURIComponent(`Halo, saya tertarik dengan ${productName}. Mohon info lebih lanjut.`);
  const url = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(url, '_blank');
}

// Smooth scroll ke fitur saat tombol pelajari lebih lanjut diklik
document.addEventListener('DOMContentLoaded', () => {
  const learnMoreBtn = document.getElementById('learnMoreBtn');
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener('click', () => {
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
