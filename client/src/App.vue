<template>
  <router-view />
</template>

<script setup>
</script>

<style>
body * {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}
.page {
  padding-top: 60px;
  max-width: 760px;
  margin: 0 auto;
}

.card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;

}

.card__item {
  border-radius: 8px;
  overflow: hidden;
  background: red;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 150px;
}

.card__img {
  width: 100%;
}

@media (max-width: 900px) {
  .card__list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .card__list {
    grid-template-columns: 1fr 1fr;
  }
  .search {
    width: 100%;
  }
}

@media (max-width: 500px) {
  .card__list {
    grid-template-columns: 1fr;
  }
}

.text-center {
  text-align: center;
}
</style>
