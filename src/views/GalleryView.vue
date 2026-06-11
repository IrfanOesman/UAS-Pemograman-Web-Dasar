<template>
  <section class="page-gallery">
    <div class="section-header">
      <span class="badge">Visual Experience</span>
      <h2>Galeri & Momen</h2>
      <p>Intip keindahan setiap sudut Hutan Bambu Bekasi melalui lensa kamera.</p>
    </div>

    <div class="gallery-container">
      <div 
        v-for="(image, index) in galleryImages" 
        :key="index" 
        class="gallery-item"
        :class="'item-' + (index + 1)"
      >
        <div class="image-box">
          <img :src="image.url" :alt="image.title">
          <div class="image-overlay">
            <span class="category">{{ image.category }}</span>
            <h4>{{ image.title }}</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="gallery-footer">
      <p>Punya momen indah di Hutan Bambu? Tag kami di Instagram <strong>@hutanbambubekasi</strong></p>
      <a target='_blank' href="https://www.instagram.com/hutanbambubekasi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="btn btn-secondary">Lihat Instagram Kami</a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const galleryImages = ref([
  { title: 'Selamat Datang', category: 'Suasana', url: '/images/SelamatDatang-HutanBambu.jpg' },
  { title: 'Jembatan Gantung', category: 'Ikonik', url: '/images/Jembatan_cleanup.jpg' },
  { title: 'Taman Bambu', category: 'Suasana', url: '/images/Taman-Bambu-di-Bekasi.jpg' },
  { title: 'Tempat Makan', category: 'Kuliner', url: '/images/Tempat-Makan.jpg' },
  { title: 'Ketenangan', category: 'Suasana', url: '/images/Aktivitas-Wisata-di-Taman-Bambu-Bekasi.jpg' },
  { title: 'Ketenangan Air', category: 'Suasana', url: '/images/Sungai.jpeg' },
  { title: 'Saung', category: 'Suasana', url: '/images/Saung.jpg' }
  
]);
</script>

<style scoped>
.badge {
  background-color: #e2ede4;
  color: #2d5232;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  margin-bottom: 1rem;
}

/* Gallery Grid Layout */
.gallery-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 250px;
  gap: 1.5rem;
  margin-top: 3rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
}

/* Membuat variasi ukuran grid agar terlihat seperti masonry */
.item-1 { grid-column: span 2; grid-row: span 2; }
.item-4 { grid-row: span 2; }
.item-5 { grid-column: span 2; }

.image-box {
  width: 100%;
  height: 100%;
  position: relative;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.image-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(27, 51, 34, 0.8), transparent);
  padding: 2rem;
  color: white;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.4s ease;
}

.image-overlay .category {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #8cb867;
  display: block;
  margin-bottom: 0.5rem;
}

.image-overlay h4 {
  font-size: 1.25rem;
  font-weight: 600;
}

/* Hover Effects */
.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-item:hover .image-overlay {
  transform: translateY(0);
  opacity: 1;
}

.gallery-footer {
  text-align: center;
  margin-top: 5rem;
  padding: 3rem;
  background: #f0f4f0;
  border-radius: 30px;
}

.gallery-footer p {
  margin-bottom: 1.5rem;
  color: #435045;
  font-size: 1.1rem;
}

@media (max-width: 968px) {
  .gallery-container {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 200px;
  }
  .item-1, .item-5 { grid-column: span 2; }
}

@media (max-width: 600px) {
  .gallery-container {
    grid-template-columns: 1fr;
    grid-auto-rows: 250px;
  }
  .item-1, .item-4, .item-5 { grid-column: span 1; grid-row: span 1; }
}
</style>