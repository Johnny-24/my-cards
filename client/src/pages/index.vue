<template>
  <div class="page">
    <Header />
    <div class="container">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="Избранное">
          <ul class="card__list">
            <li class="card__item" style="background: red;">
              <router-link class="card__link" to="detail">
                <img src="https://img.hussle.ru/QaWKyh4HobsAohhtJWkyajjOYawSORdJhHx0j4c1KOI/rs:fill:0:0:0/g:ce:0:0/c:0:0/aHR0cHM6Ly9odXNzbGUucnUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDQvNi9odXNzbGUucnVfNi4wNC4yMDIwX1BTeXBOYWIwY3Q0dHQucG5nP29yaWdpbj0yMDIwLzA0LzYvaHVzc2xlLnJ1XzYuMDQuMjAyMF9QU3lwTmFiMGN0NHR0LnBuZw" class="card__img">
              </router-link>
            </li>
            <li class="card__item" style="background: #06414c;">
              <router-link class="card__link" to="detail">
                <img src="https://centergoroda.com/upload/iblock/c99/c99ef23caaafeefe1892cb2aab449203.jpg" class="card__img">
              </router-link>
            </li>
          </ul>
        </a-tab-pane>
        <a-tab-pane key="2" tab="Все карты" force-render>
          <ul class="card__list">
            <li class="card__item" style="background: red;">
              <router-link class="card__link" to="detail">
                <img src="https://img.hussle.ru/QaWKyh4HobsAohhtJWkyajjOYawSORdJhHx0j4c1KOI/rs:fill:0:0:0/g:ce:0:0/c:0:0/aHR0cHM6Ly9odXNzbGUucnUvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDQvNi9odXNzbGUucnVfNi4wNC4yMDIwX1BTeXBOYWIwY3Q0dHQucG5nP29yaWdpbj0yMDIwLzA0LzYvaHVzc2xlLnJ1XzYuMDQuMjAyMF9QU3lwTmFiMGN0NHR0LnBuZw" class="card__img">
              </router-link>
            </li>
            <li class="card__item" style="background: #06414c;">
              <router-link class="card__link" to="detail">
                <img src="https://centergoroda.com/upload/iblock/c99/c99ef23caaafeefe1892cb2aab449203.jpg" class="card__img">
              </router-link>
            </li>
          </ul>
        </a-tab-pane>
      </a-tabs>
  </div>
  </div>
</template>

<script lang="ts" setup>
  import Header from '../components/Header.vue'
  import { ref } from 'vue';
  const activeKey = ref('1');
</script>