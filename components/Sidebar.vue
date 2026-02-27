<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}

var email = ref(btoa(info.bio.email))

onMounted(() => {
  email.value = atob(email.value)
})
</script>

<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img :src="info.bio.pfp" alt="Photo" width="80">
      </figure>

      <div class="info-content">
        <h1 class="name" title="David Alvarez">
          {{info.bio.name}}
        </h1>

        <p class="title text-center xl:block flex items-center justify-center gap-1">
            <span v-for="item in info.bio.title.slice(0, info.bio.title.length - 1)" class="xl:after:content-[''] after:content-[',']">{{ item }}</span>
            <span>{{ info.bio.title[info.bio.title.length-1] }}</span>
        </p>
      </div>

      <button class="info_more-btn" @click="isOpen = !isOpen">
        <span>Show Contacts</span>

        <ion-icon name="chevron-down" />
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator" />

      <ul class="contacts-list">
        
        <!-- Email -->
        <a class="contact-item" :href="'mailto:'+email">
          <div class="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Email</p>
            <span class="contact-link">{{ email }}</span>
          </div>
        </a>

        <div v-if="false">
          <!-- Phone -->
          <a href="tel:+34689571913" class="contact-item">
            <div class="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div class="contact-info">
              <p class="contact-title">Phone</p>
              <span class="contact-link">689 571 913</span>
            </div>
          </a>
        </div>

        <!-- Linkedin -->
        <a :href="info.bio.linkedin" class="contact-item" target="_blank">
          <div class="icon-box">
            <ion-icon name="logo-linkedin" />
          </div>
          <div class="contact-info">
            <p class="contact-title">Linkedin</p>
            <span class="contact-link">{{info.bio.name}}</span>
          </div>
        </a>

        <!-- Github -->
        <a :href="info.bio.github" class="contact-item" target="_blank">
          <div class="icon-box">
            <ion-icon name="logo-github" />
          </div>
          <div class="contact-info">
            <p class="contact-title">
              Github
            </p>
            <span class="contact-link">{{info.bio.github}}</span>
          </div>
        </a>

        <!-- Google Scholar -->
        <a :href="info.bio.scholar" class="contact-item" target="_blank">
          <div class="icon-box">
            <ion-icon name="school-outline" />
          </div>
          <div class="contact-info">
            <p class="contact-title">Google Scholar</p>
            <span class="contact-link">{{info.bio.name}}</span>
          </div>
        </a>
      </ul>

      <div v-if="false">
        <div class="separator" />

        <ul class="social-list">
          <LangSwitcher2 />
        </ul>
      </div>
    </div>
  </aside>
</template>

<style scoped>

.contacts-list .contact-item:hover {
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

/* Estilos adicionales para el enlace del cursor */
.contacts-list .contact-item:hover .contact-link {
  text-decoration: underline;
  text-decoration-color: var(--color-secondary-3);
}

</style>
