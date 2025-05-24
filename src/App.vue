<template>
  <main>
    <h1>Google Auth with GIS</h1>
    <h2>Is Initialized: {{ !!initGoogleAuth }}</h2>

    <div ref="googleBtn"></div>
    <div v-if="user">
      <p><strong>Name:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <img :src="user.picture" alt="Profile picture" />
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const user = ref(null)
const googleBtn = ref(null)

function initGoogleAuth() {
  window.google.accounts.id.initialize({
    client_id: '647845422592-camt250uq3f9j80oei2bdjm30u2sn6a5.apps.googleusercontent.com',
    callback: (response) => {
      const data = parseJwt(response.credential)
      user.value = data
    }
  })
}

onMounted(() => {

  initGoogleAuth();
  window.google.accounts.id.renderButton(googleBtn.value, {
    theme: 'outline',
    size: 'large',
  })
})

function parseJwt(token) {
  return JSON.parse(atob(token.split('.')[1]))
}
</script>

<style scoped>
main {
  padding: 2rem;
  font-family: sans-serif;
}
img {
  width: 100px;
  border-radius: 50%;
}
</style>
