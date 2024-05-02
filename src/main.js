/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'
import { toast } from 'vue-sonner'
import { useAppStore } from '@/store/app'
import axios from 'axios'
import APIs from '@/plugins/apiurls'
import Mock from '@/plugins/mock'
import Responses from '@/plugins/responses'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { useError } from '@/composables/error'

const app = createApp(App)

axios.defaults.baseURL = (
  '/' + import.meta.env.VITE_API_PREFIX
)
const axiosClient = axios.create({});
Mock.mocked(axiosClient, Responses);

registerPlugins(app)

app.config.globalProperties.$axios = axiosClient
app.config.globalProperties.$toast = toast
app.config.globalProperties.$error = useError
app.config.globalProperties.$store = useAppStore()
app.config.globalProperties.$api = (key) => APIs[key]

app.mount('#app')
