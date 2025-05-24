<template>
  <main class="wrapper">
    <h1 v-if="!user">The User is not logged in.</h1>
    <h1 v-else>Now the user is logged in!</h1>

    <GoogleLogin v-if="!user" :callback="callback" />

    <div v-if="user" class="user-info">
      <p><strong>Welcome!</strong></p>
      <p>Username: {{ user.name }}</p>
      <img :src="user.picture" />
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { GoogleLogin } from 'vue3-google-login'

const user = ref(null)

const callback = (response) => {
  const data = parseJwt(response.credential)
  user.value = data
  console.log("Logged in:", data)
}

function parseJwt(token) {
  return JSON.parse(atob(token.split('.')[1]))
}
</script>

<style>
body {
  background-color: indigo;
  color: ivory;
}
main {
  font-family: sans-serif;
  text-align: center;
  padding: 2rem;
}

img {
  border-radius: 50%;
  width: 80px;
  margin-top: 10px;
}

.wrapper {
  display: block;
  margin: 0 auto;
  width: 20vw;
  height: 40vh;
  border: 1px solid ivory;
  border-radius: 12px;
}
</style>
