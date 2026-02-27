<template>
  <div class="general-container">
    <article id="about" class="about active" data-page="about">
      <header>
        <h2 class="h2 article-title">
          {{ $t('pageTitles.about') }}
        </h2>
      </header>

      <!-- About -->
      <section class="about-text">
        <ul class="about-list">
          <AboutItem />
        </ul>
      </section>

      <!-- <section class="techs">
        <ul class="grid-techs">
          <li class="techs-item" v-for="item in info.about.techs">
            <Icon :icon="item.icon" width="4em" />
            <div class="tech-tooltip">
              <p>{{ item.name + ': ' + item.description }}</p>
            </div>
          </li>
        </ul>
      </section> -->
    </article>
    <resume />
    <Github />
    <publications />
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import Resume from './resume.vue'
import Portfolio from './portfolio.vue';
import Github from './github.vue';
import { Icon } from '@iconify/vue';
import publications from './publications.vue';

useHead({
})

onMounted(() => {
  useLocaleStore()
})

const { locale } = useI18n({ useScope: 'global' })

/* Services */
const { data: services } = await useFetch('/api/services')

/* Services */
const { data: about } = await useFetch('/api/about')
</script>