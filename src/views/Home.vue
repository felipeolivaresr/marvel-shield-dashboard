<script setup>
import { onMounted } from 'vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
import useAuth from '@/useAuth'

const router = useRouter()
const { logout } = useAuth()

onMounted(() => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.push('/login')
    }
  })
})

const handleLogout = async () => {
  await logout()
  router.push('/login')
}
</script>

<template>
  <div class="home">
    <h1>Bienvenido al Universo Marvel</h1>
    <div class="hero-content">
      <div class="hero-card">
        <img src="data:image/png;base64,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" alt="Shield Logo" class="shield-logo">
        <p class="welcome-text">¡Bienvenido, Agente!</p>
        <p class="mission-text">Has sido autorizado para acceder a los archivos confidenciales de S.H.I.E.L.D.</p>
        <div class="stats">
          <div class="stat-item">
            <span class="stat-label">Nivel de Autorización</span>
            <span class="stat-value">7</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Estado</span>
            <span class="stat-value">Activo</span>
          </div>
        </div>
        <button @click="handleLogout" class="logout-btn">
          Cerrar Sesión <span class="icon">🔒</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #202020 0%, #303030 100%);
}

h1 {
  text-align: center;
  color: #ED1D24;
  font-size: 3rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-card {
  background-color: #303030;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(237, 29, 36, 0.3);
  text-align: center;
}

.shield-logo {
  width: 150px;
  margin-bottom: 2rem;
}

.welcome-text {
  font-size: 2rem;
  color: #ED1D24;
  margin-bottom: 1rem;
  font-weight: bold;
}

.mission-text {
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: rgba(237, 29, 36, 0.1);
  border-radius: 8px;
}

.stat-item {
  text-align: center;
}

.stat-label {
  display: block;
  color: #ED1D24;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.stat-value {
  display: block;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
}

.logout-btn {
  background-color: #ED1D24;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-btn:hover {
  background-color: #C7151D;
}

.icon {
  margin-left: 0.5rem;
}
</style>
