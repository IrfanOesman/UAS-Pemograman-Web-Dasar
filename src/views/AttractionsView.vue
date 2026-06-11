<template>
  <section class="page-attractions">
    <div class="section-header">
      <h2>Aktivitas</h2>
      <p>Banyak hal seru yang bisa kamu lakukan bersama teman dan keluarga.</p>
    </div>
    <div class="cards-grid">
      <div class="card" v-for="(item, index) in attractions" :key="index">
        <div class="card-icon">{{ item.icon }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const attractions = ref([
  { title: 'Jembatan Gantung', description: 'Jembatan ikonik berwarna-warni yang membentang di atas Kali Bekasi, sangat cocok untuk spot foto estetik.', icon: '🌉' },
  { title: 'Dermaga Perahu', description: 'Nikmati sensasi menyusuri sungai dengan perahu tradisional sembari menikmati rimbunnya pohon bambu.', icon: '🚣' },
  { title: 'Lorong Bambu', description: 'Berjalan di bawah rindangnya kanopi bambu alami yang memberikan keteduhan maksimal bahkan di siang hari.', icon: '🎋' },
  { title: 'Piknik', description: 'Area saung yang teduh di tengah pepohonan bambu yang rimbun cocok untuk bersantai dan menikmati suasana alam. ', icon: '🏠' },
  { title: 'Spot Foto Instagramable', description: 'Berbagai instalasi foto menarik yang dibuat dari bambu hasil kreativitas warga lokal.', icon: '📸' },
  { title: 'Menyelusuri Sungai', description: 'Beberapa bagian dari Hutan Bambu Bekasi berada di tepi Sungai Bekasi. Kamu bisa menyusuri sungai dengan perahu kecil yang disediakan oleh pengelola.', icon: '🔍' },
  { title: 'Wahana Bermain Anak', description: 'Kamu juga bisa mengajak si kecil bermain di area wahana bermain anak.', icon: '🎢' },
  { title: 'Kuliner Tradisional', description: 'Sajian warung santai di area sekitar hutan yang menyajikan makanan ringan dan kelapa muda segar.', icon: '🥥' }
]);
</script>

<style scoped>
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  border: 1px solid rgba(0,0,0,0.03);
  box-shadow: 0 10px 30px rgba(0,0,0,0.01);
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(76, 124, 76, 0.1);
  border-color: rgba(76, 124, 76, 0.2);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.card h3 {
  font-size: 1.3rem;
  color: #1b3322;
  margin-bottom: 0.8rem;
  font-weight: 700;
}

.card p {
  color: #6b7c6e;
  line-height: 1.6;
  font-size: 0.95rem;
}
</style>