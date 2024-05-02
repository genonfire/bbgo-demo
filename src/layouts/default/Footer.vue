<template>
  <v-footer
    app
    color="neutral"
    v-if="banner"
  >
    <v-banner
      color="info"
      :elevation="0"
      bg-color="neutral"
      lines="one"
      :text="$t('demo.DEMO_BANNER')"
      icon="mdi-alert-outline"
      class="ma-0 py-0"
      style="border-bottom: 0px;"
    >
      <template v-slot:actions>
        <v-btn
          icon="mdi-close-circle-outline"
          @click="banner = false"
        >
        </v-btn>
      </template>
    </v-banner>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      banner: true,
    }
  },
}
</script>
