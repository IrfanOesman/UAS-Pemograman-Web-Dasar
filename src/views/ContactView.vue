<template>
  <section class="page-contact">
    <div class="section-header">
      <h2>Informasi & Kontak</h2>
      <p>Rencanakan kunjunganmu atau hubungi kami untuk informasi lebih lanjut.</p>
    </div>
    <div class="contact-grid">
      <div class="info-panel">
        <div class="info-item location-card">
          <span class="info-icon">📍</span>
          <div>
            <h4>Lokasi</h4>
            <p>Margahayu, Kecamatan Bekasi Timur, Kota Bekasi, Jawa Barat.</p>
            <a
              href="https://maps.app.goo.gl/ip4jHDrvi9Bcpdtp8"
              target="_blank"
              rel="noopener noreferrer"
              class="maps-link"
            >
              Buka di Google Maps ↗
            </a>
          </div>
        </div>
        <div class="info-item">
          <span class="info-icon">⏰</span>
          <div>
            <h4>Jam Operasional</h4>
            <p>Setiap Hari: 08:00 - 17:00 WIB</p>
          </div>
        </div>
        <div class="info-item">
          <span class="info-icon">🎟</span>
          <div>
            <h4>Harga Tiket</h4>
            <p>Gratis / Bayar Sukarela (Guna perawatan fasilitas)</p>
          </div>
        </div>
      </div>
      <div class="form-panel">
        <h3>Kirim Pesan</h3>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label>Nama Lengkap</label>
            <input v-model="formData.name" type="text" placeholder="Masukkan nama Anda" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input v-model="formData.email" type="email" placeholder="nama@email.com" required />
          </div>
          <div class="form-group">
            <label>Pesan</label>
            <textarea
              v-model="formData.message"
              rows="4"
              placeholder="Tulis pertanyaan atau saran Anda..."
              required
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-block" :disabled="isSubmitting">
            {{ isSubmitting ? 'Mengirim...' : 'Kirim Pesan' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const formData = ref({
  name: '',
  email: '',
  message: '',
})

const isSubmitting = ref(false)
const isSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true

  const formspreeUrl = 'https://formspree.io/f/xzdqaqvy'

  try {
    const response = await fetch(formspreeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        Nama: formData.value.name,
        Email: formData.value.email,
        Pesan: formData.value.message,
      }),
    })

    if (response.ok) {
      isSuccess.value = true
      formData.value.name = ''
      formData.value.email = ''
      formData.value.message = ''

      alert('Pesan berhasil terkirim langsung ke Email Pengelola!')
    } else {
      alert('Gagal mengirim pesan, silakan coba lagi.')
    }
  } catch (error) {
    console.error('Error:', error)
    alert('Terjadi kesalahan jaringan.')
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.maps-link {
  display: inline-block;
  margin-top: 0.5rem;
  color: #4c7c4c;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  transition: color 0.2s;
}
.maps-link:hover {
  color: #2d5232;
  text-decoration: underline;
}
.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 4rem;
}

.info-panel {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  background: white;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.01);
}

.info-icon {
  font-size: 2rem;
  background: #e2ede4;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.info-item h4 {
  font-size: 1.1rem;
  color: #1b3322;
  margin-bottom: 0.3rem;
}

.info-item p {
  color: #6b7c6e;
  line-height: 1.5;
}

.form-panel {
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.02);
}

.form-panel h3 {
  font-size: 1.5rem;
  color: #1b3322;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #435045;
  font-size: 0.9rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #d2e4d4;
  border-radius: 10px;
  font-family: inherit;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: #fcfcf9;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #4c7c4c;
  background-color: white;
  box-shadow: 0 0 0 4px rgba(76, 124, 76, 0.1);
}

.btn-block {
  width: 100%;
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}
</style>
