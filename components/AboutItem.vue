<template>
  <li class="about-item">
    <div class="about-content-box">
      <p class="about-item-text" v-html="highlightText(info.about.content)">
      </p>
    </div>
  </li>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n({ useScope: 'global' })


</script>

<style>
.highlight {
  color: rgb(94 234 212);
  display: inline-flex;
  font-weight: bold;
  white-space: nowrap; /* Evita que la frase se rompa en múltiples líneas */
}
</style>
