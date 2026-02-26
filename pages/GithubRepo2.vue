<template>
  <div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front rounded-xl">
        <div class="repository-img-wrapper rounded-t-xl">
          <img class="repository-img border-none" :src="repositoryImageSrc" :alt="repository.name">
        </div>
        <div class="text-center px-4">
          <a :href="repository.html_url" target="_blank" class="repository-name">{{ repository.name }}</a>
        </div>
      </div>
      <div class="flip-card-back rounded-xl">
        <div class="repository-name-back">{{ repository.name }}</div>
        <div class="project-description">
          <p>{{ repository.description }}</p>
        </div>
        <div class="languages-used">
          <div class="language-item" v-for="language in repository.topLanguages" :key="language">
            <div class="language-circle">
              <ion-icon :name="getLanguageIconName(language)" class="language-icon"></ion-icon>
            </div>
            <div class="language-name">{{ language }}</div>
          </div>
        </div>
        <div class="links-section">
          <div class="link-item" v-if="repository.homepage">
            <ion-icon name="log-out-outline" class="link-icon"></ion-icon>
            <a :href="repository.homepage" target="_blank">{{repository.homepage}}</a>
          </div>
          <div class="link-item" v-if="repository.html_url">
            <ion-icon name="logo-github" class="link-icon"></ion-icon>
            <a :href="repository.html_url" target="_blank">{{repository.html_url}}</a>
          </div>
          <div class="link-item" v-if="repository.paper_url">
            <ion-icon name="document-text-outline" class="link-icon"></ion-icon>
            <a :href="repository.paper_url" target="_blank">Published Paper</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GithubReposItem",
  props: {
    repository: {
      type: Object,
      default: () => {
        return {};
      }
    },
    bgColor: {
      type: String,
      default: undefined
    }
  },
  data() {
    return {
      repositoryImageSrc: "/images/projects/generic.png",
    };
  },
  mounted() {
    this.loadRepositoryImage();
  },
  methods: {
    loadRepositoryImage() {
      const repositoryName = this.repository.name;
      const extensions = ['jpg', 'png', 'webp'];
      const tryNext = (index) => {
        if (index >= extensions.length) return;
        const url = `/images/projects/${repositoryName}.${extensions[index]}`;
        const img = new Image();
        img.src = url;
        img.onload = () => { this.repositoryImageSrc = url; };
        img.onerror = () => tryNext(index + 1);
      };
      tryNext(0);
    },
    getLanguageIconName(language) {
      const languageIcons = {
        JavaScript: 'logo-javascript',
        Python: 'logo-python',
        HTML: 'logo-html5',
        CSS: 'logo-css3',
        Vue: 'logo-vue',
        Dockerfile: 'logo-docker'
      };

      return languageIcons[language] || 'code';
    }
  }
};
</script>