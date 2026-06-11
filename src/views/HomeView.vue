<template>
  <section class="page-home">
    <div class="hero-section">
      <div class="hero-content">
        <span class="badge">Oase Hijau di Tengah Kota</span>
        <h1>Temukan Ketenangan di <br /><span class="gradient-text">Hutan Bambu Bekasi</span></h1>
        <p>
          Lepaskan penat sejenak dari hiruk-pikuk perkotaan. Nikmati kesegaran udara alami,
          gemerisik daun bambu yang menenangkan, dan keindahan pinggiran Kali Bekasi yang asri.
        </p>
        <div class="hero-buttons">
          <router-link to="/attractions" class="btn btn-primary">Jelajahi Wisata</router-link>
          <router-link to="/about" class="btn btn-secondary">Pelajari Lebih Lanjut</router-link>
        </div>
      </div>
      <div class="hero-image-container">
        <div class="hero-image-mock">
          <span class="mock-text">Welcome to Nature 🌿</span>
        </div>
      </div>
    </div>

    <div class="stats-container">
      <div class="stat-card">
        <h3>1K+</h3>
        <p>Pengunjung Bulanan</p>
      </div>
      <div class="stat-card">
        <h3>2+ He</h3>
        <p>Area Konservasi</p>
      </div>
      <div class="stat-card">
        <h3>0 Rp</h3>
        <p>Tiket Masuk (Sukarela)</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 65vh;
}

.badge {
  background-color: #e2ede4;
  color: #2d5232;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  color: #1b3322;
  margin: 1rem 0 1.5rem 0;
}

.gradient-text {
  background: linear-gradient(135deg, #4c7c4c, #8cb867);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #556357;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

.hero-image-mock {
  width: 100%;
  height: 450px;
  /* Pastikan ekstensinya ditulis .webp dengan huruf kecil */
  background-image: url('/images/Hutan-Bambu.webp'); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #d2e4d4; 
  border-radius: 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.08);
  display: flex;
  align-items: flex-end;
  padding: 2rem;
}

.mock-text {
  color: white;
  background: rgba(0, 0, 0, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 10px;
  backdrop-filter: blur(5px);
  font-weight: 600;
}

.stats-container {
  display: flex;
  justify-content: space-around;
  margin-top: 5rem;
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.02);
}

.stat-card {
  text-align: center;
}

.stat-card h3 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #4c7c4c;
  margin-bottom: 0.2rem;
}

.stat-card p {
  color: #7a8b7d;
  font-weight: 500;
}

@media (max-width: 968px) {
  .hero-section {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .hero-content h1 {
    font-size: 2.5rem;
  }
  .stats-container {
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
