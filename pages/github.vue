<script setup>
useHead({
  title: 'Projects',
})
</script>

<template>
  <article id="github" class="github active" data-page="github">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.projects') }}
      </h2>
    </header>

    <section class="github-form">
        <div class="input-wrapper">
          <div
            v-for="repo in repos"
            :key="repo.id"
            class="github-repository"
          >
            <GithubReposItem
              :repository="repo"
              :bg-color="repo.language ? colors[repo.language].color : '#ffffff'"
            />
          </div>
        </div>
    </section>
  </article>
</template>

<script>
import GithubReposItem from "./GithubRepo2.vue";
import reposData from "~/storage/repos.json";

const LANGUAGE_COLORS = {
  Python: { color: '#3572A5' },
  JavaScript: { color: '#f1e05a' },
  TypeScript: { color: '#3178c6' },
  HTML: { color: '#e34c26' },
  CSS: { color: '#563d7c' },
  Vue: { color: '#41b883' },
  Shell: { color: '#89e051' },
  R: { color: '#198CE7' },
  Java: { color: '#b07219' },
  'C++': { color: '#f34b7d' },
  C: { color: '#555555' },
  Go: { color: '#00ADD8' },
  Rust: { color: '#dea584' },
  Ruby: { color: '#701516' },
  PHP: { color: '#4F5D95' },
  Swift: { color: '#F05138' },
  Kotlin: { color: '#A97BFF' },
  Dockerfile: { color: '#384d54' },
};

export default {
  name: "GithubRepos",
  data() {
    return {
      repos: reposData,
      colors: LANGUAGE_COLORS
    };
  },
  components: {
    GithubReposItem
  }
};
</script>