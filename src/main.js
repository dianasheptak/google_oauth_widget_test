import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
    clientId: '647845422592-camt250uq3f9j80oei2bdjm30u2sn6a5.apps.googleusercontent.com'
})

app.mount('#app')