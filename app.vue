<script setup>
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from './composables/locale'
const { locale } = useI18n({ useScope: 'global' })
const cookieLocale = useLocaleStore()

// locale.value = cookieLocale.getLocale || 'en'
locale.value = 'en'

const loadingPage = ref()

onBeforeMount(() => {
  loadingPage.value = false
})

onMounted(() => {
  loadingPage.value = true  
})
</script>

<template>
  <LoadingPage v-show="!loadingPage" />

  <NuxtLayout>
    <NuxtPage transition />
  </NuxtLayout>
</template>

<style>
.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from, .v-leave-to {
  opacity: 0;
}
</style>
