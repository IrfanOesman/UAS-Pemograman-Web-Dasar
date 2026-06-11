<template>
  <section class="page-about">
    <div class="section-header">
      <h2>Tentang Hutan Bambu</h2>
      <p>Kisah di balik terbentuknya paru-paru hijau Kota Bekasi.</p>
    </div>
    <div class="about-grid">
      <div class="about-text">
        <h3>Dari Area Terbengkalai Menjadi Destinasi Wisata</h3>
        <p>Hutan Bambu Bekasi awalnya merupakan kawasan penahan erosi di pinggiran Kali Bekasi. Berkat kepedulian masyarakat sekitar dan komunitas pecinta lingkungan, kawasan ini disulap menjadi destinasi wisata edukasi dan konservasi yang menawan.</p>
        <p>Selain menjadi tempat rekreasi, tempat ini berfungsi penting sebagai habitat berbagai jenis burung bangau dan pusat pembibitan bambu guna menjaga kelestarian ekosistem sungai.</p>
        <div class="features-list">
          <div class="feature-item">✔ Lingkungan Asri & Bebas Polusi</div>
          <div class="feature-item">✔ Spot Edukasi Flora & Fauna</div>
          <div class="feature-item">✔ Dikelola Secara Swadaya oleh Warga Lokal</div>
        </div>
      </div>
      <div class="about-visual">
        <div class="about-card-decor">
          <h4>Visi Kami</h4>
          <p>"Menjaga kelestarian alam Bekasi sekaligus menyediakan ruang publik yang sehat, edukatif, dan terjangkau bagi semua lapisan masyarakat."</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

.about-text h3 {
  font-size: 1.8rem;
  color: #1b3322;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.about-text p {
  color: #556357;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.features-list {
  margin-top: 2rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  color: #2d5232;
  margin-bottom: 0.8rem;
}

.about-visual {
  background: linear-gradient(135deg, #4c7c4c, #1b3322);
  height: 400px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: white;
}

.about-card-decor {
  text-align: center;
}

.about-card-decor h4 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.about-card-decor p {
  font-style: italic;
  opacity: 0.9;
  line-height: 1.6;
}

@media (max-width: 968px) {
  .about-grid { grid-template-columns: 1fr; gap: 2.5rem; }
}
</style>