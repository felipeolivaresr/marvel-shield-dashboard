<template>
  <div class="login">
    <h2>Accede al Universo Marvel</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Email del Héroe</label>
        <input 
          type="email" 
          v-model="email" 
          required
          placeholder="peter.parker@marvel.com"
        >
      </div>
      <div class="form-group">
        <label>Código Secreto</label>
        <input 
          type="password" 
          v-model="password" 
          required
          placeholder="••••••••"
        >
      </div>
      <div class="error" v-if="error">{{ error }}</div>
      <button type="submit">Activar Poderes</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '@/useAuth'

export default {
  setup() {
    const { error, login } = useAuth()
    const router = useRouter()

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      const res = await login(email.value, password.value)
      if (res) router.push('/')
    }

    return { email, password, error, handleSubmit }
  }
}
</script>
