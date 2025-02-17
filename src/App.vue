<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="marvel-container">
    <nav class="marvel-nav">
      <div class="logo">MARVEL AUTH</div>
      <router-link to="/login">Login</router-link>
      <router-link to="/signup">Sign Up</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #202020;
  color: white;
  font-family: 'Roboto Condensed', sans-serif;
}

.marvel-container {
  min-height: 100vh;
}

.marvel-nav {
  background-color: #ED1D24;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
}

.marvel-nav .logo {
  font-size: 2rem;
  font-weight: bold;
  color: white;
}

.marvel-nav a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.marvel-nav a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.login, .signup {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  background-color: #303030;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(237, 29, 36, 0.3);
}

h2 {
  color: #ED1D24;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-transform: uppercase;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #ED1D24;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #404040;
  background-color: #404040;
  color: white;
  border-radius: 4px;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #ED1D24;
}

button {
  width: 100%;
  padding: 1rem;
  background-color: #ED1D24;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #ff1a1a;
}

.error {
  color: #ED1D24;
  background-color: rgba(237, 29, 36, 0.1);
  padding: 0.8rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}
</style>
