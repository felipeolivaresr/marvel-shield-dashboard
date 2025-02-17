<template>
  <div class="signup">
    <h2>Únete a los Vengadores</h2>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Email del Héroe</label>
        <input 
          type="email" 
          v-model="email" 
          required
          placeholder="tony.stark@marvel.com"
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
      <button type="submit">Obtener Poderes</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useAuth from '@/useAuth'

export default {
  setup() {
    const { error, signup } = useAuth()
    const router = useRouter()

    const email = ref('')
    const password = ref('')

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value)
      if (res) router.push('/')
    }

    return { email, password, error, handleSubmit }
  }
}
</script>

<style scoped>
.signup {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  margin-top: 10px;
}
</style>