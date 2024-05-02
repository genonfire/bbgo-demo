<template>
  <v-app
    v-if="initialized.firstInit"
  >
    <router-view />
    <Toaster
      position="bottom-right"
      richColors
      closeButton
    />
  </v-app>

  <div
    class="mt-5 align-center text-center"
    v-else
  >
    <v-progress-circular
      :size="60"
      :width="4"
      indeterminate
      color="secondary"
    ></v-progress-circular>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, reactive, onMounted } from 'vue'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'
import { Toaster } from 'vue-sonner'
import { useAppStore } from '@/store/app'

const firstInit = ref(false)
const initialized = reactive({ firstInit })

onMounted(() => {
  const { proxy } = getCurrentInstance()
  const store = useAppStore()
  const theme = useTheme()
  const { availableLocales, locale } = useI18n()

  const localLocale = localStorage.getItem('locale')
  const localTheme = localStorage.getItem('theme')
  const localToken = localStorage.getItem('token')

  let prefix = ''

  if (store.const('THEMES').includes(localTheme)) {
    theme.global.name.value = localTheme
    store.setTheme(localTheme)
  }
  else {
    store.setTheme(theme.global.name.value)
  }

  if (availableLocales.includes(localLocale)) {
    locale.value = localLocale
    store.setLocale(localLocale, false)
  }
  else {
    store.setLocale(locale.value)
  }

  proxy.$axios({
    method: proxy.$api('BLOG_OPTION').method,
    url: proxy.$api('BLOG_OPTION').url,
  })
  .then(function (response) {
    store.setBlogOption(response.data['data'])
  })

  if (localToken) {
    proxy.$axios({
      method: proxy.$api('ACCOUNTS_CONNECT').method,
      url: proxy.$api('ACCOUNTS_CONNECT').url,
      headers: {
        Authorization: 'Token ' + localToken
      }
    })
    .then(function (response) {
      store.setToken(response.data['data']['key'], false)
      store.setUser(response.data['data']['user'], false)

      firstInit.value = true
    })
    .catch(function (error) {
      if (error.response.status === 401) {
        localStorage.removeItem('token')
      }
      firstInit.value = true
    })
  }
  else {
    firstInit.value = true
  }
})
</script>
