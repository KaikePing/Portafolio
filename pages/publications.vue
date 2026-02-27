<template>
    <article id="publication" class="publication active" data-page="publication">
        <header>
            <h2 class="h2 article-title">Publications
            </h2>
        </header>

        <div style="display: flex; flex-wrap: wrap; margin-top: 25px;">
            <div class="cellphone-container" v-for="paper in info.publication">
                <div class="movie">
                    <div class="movie-img"
                        :style="`background-image: url(${paper.pic});`">
                    </div>
                    <div class="text-movie-cont">
                        <div class="mr-grid">
                            <div class="col1">
                                <h1>{{ paper.title }}</h1>
                                <ul class="movie-gen">
                                    <li>{{ paper.comment }}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="mr-grid summary-row">
                            <div class="col2">
                                <h5>Authors</h5>
                            </div>
                        </div>
                        <div class="mr-grid actors-row">
                            <div class="col1">
                                <p class="movie-actors" v-html="highlightAuthors(paper.authors)"></p>
                            </div>
                        </div>
                        <div class="mr-grid">
                            <div class="col1">
                                <p class="movie-description">{{ paper.venue }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </article>
</template>

<script setup>
const highlightAuthors = (authors) => {
  return authors.replace(/kaike ping/gi, '<span class="author-highlight">$&</span>');
};
</script>

<style scoped>
:deep(.author-highlight) {
  display: inline;
  background: linear-gradient(90deg, #64ffda, #b2fff0, #64ffda);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  animation: name-shine 3s linear infinite;
}

@keyframes name-shine {
  from { background-position: 0% center; }
  to   { background-position: 200% center; }
}
</style>