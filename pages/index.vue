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

      <section class="techs">
        <ul class="grid-techs">
          <li class="techs-item" v-for="item in info.about.techs">
            <Icon :icon="item.icon" width="4em" />
            <div class="tech-tooltip">
              <p>{{ item.name + ': ' + item.description }}</p>
            </div>
          </li>
          <div v-if='false'>
            <li class="techs-item">
              <img src="/images/techs/java-logo.png" alt="Company">
              <div class="tech-tooltip">
                <p>+2 years of experience</p>
              </div>
            </li>
            <li class="techs-item">
              <img src="/images/techs/node-logo.png" alt="Company">
              <div class="tech-tooltip">
                <p>+3 years of experience</p>
              </div>
            </li>
            <li class="techs-item">
              <img src="/images/techs/vue-logo.png" alt="Company">
              <div class="tech-tooltip">
                <p>+3 years of experience</p>
              </div>
            </li>
            <li class="techs-item">
              <img src="/images/techs/javascript-logo.png" alt="Company">
              <div class="tech-tooltip">
                <p>+4 years of experience</p>
              </div>
            </li>
            <li class="techs-item">
              <img src="/images/techs/linux-logo.png" alt="Company">
              <div class="tech-tooltip">
                <p>+2 years of experience</p>
              </div>
            </li>
            <li class="techs-item">
              <img src="/images/techs/docker-logo.webp" alt="Company">
              <div class="tech-tooltip">
                <p>+1 years of experience</p>
              </div>
            </li>
            <li class="techs-item">
              <img src="/images/techs/gcp-logo-cloud.webp" alt="Company">
              <div class="tech-tooltip">
                <p>+1 years of experience</p>
              </div>
            </li>
          </div>
        </ul>
      </section>
    </article>
    <resume />
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