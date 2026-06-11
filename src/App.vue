<template>
  <div class="app-container">
    <!-- NAVBAR -->
    <header class="navbar">
      <div class="logo">
        <span class="logo-icon">🎋</span>
        <span class="logo-text">Hutan Bambu <span class="highlight">Bekasi</span></span>
      </div>
      <nav class="nav-links">
        <router-link to="/" active-class="active">Beranda</router-link>
        <router-link to="/about" active-class="active">Tentang</router-link>
        <router-link to="/attractions" active-class="active">Aktivitas</router-link>
        <router-link to="/gallery" active-class="active">Galeri</router-link>
        <router-link to="/contact" active-class="active">Informasi & Kontak</router-link>
      </nav>
    </header>

    <!-- CONTENT WITH TRANSITION -->
    <main class="content-wrapper">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <p>&copy; 2026 Hutan Bambu Bekasi. Irfan Oesman</p>
    </footer>
  </div>
</template>

<style>
/* GLOBAL STYLES */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: #2c3e50;
  background-color: #fcfcf9;
}

/* REUSABLE STYLES ACROSS VIEWS */
.btn {
  padding: 0.8rem 1.8rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background: linear-gradient(135deg, #4c7c4c, #2d5232);
  color: white;
  border: none;
  box-shadow: 0 4px 15px rgba(76, 124, 76, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(76, 124, 76, 0.4);
}

.btn-secondary {
  background: transparent;
  color: #2d5232;
  border: 2px solid #4c7c4c;
}

.btn-secondary:hover {
  background: #e2ede4;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  color: #1b3322;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.section-header p {
  color: #6b7c6e;
  font-size: 1.1rem;
}
</style>

<style scoped>
/* APP LAYOUT STRUCTURE */
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 8%;
  background: rgba(253, 253, 249, 0.8);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
  font-weight: 800;
  color: #1b3322;
}

.logo .highlight {
  color: #4c7c4c;
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-links a {
  text-decoration: none;
  padding: 0.6rem 1.2rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #5c6b5e;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.nav-links a:hover, .nav-links a.active {
  color: #1b3322;
  background-color: #e2ede4;
}

.content-wrapper {
  flex: 1;
  padding: 3rem 8%;
}

.footer {
  text-align: center;
  padding: 2rem;
  background-color: #1b3322;
  color: #a3c4a8;
  font-size: 0.9rem;
  margin-top: auto;
}

/* PAGE TRANSITIONS */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

@media (max-width: 968px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem 5%;
  }
  .content-wrapper {
    padding: 2rem 5%;
  }
}
</style>