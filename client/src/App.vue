<template>
  <router-view />
</template>

<script setup>
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  background: #22262a;
  color: #ced1d5;
}
body * {
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}
h1 {
  margin: 0;
  font-weight: 600px;
}
.search {
  width: 50%;
  height: 31px;
  outline: navajowhite;
}
.btn {
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  background: #fa8b58;
  color: #22262a;
  cursor: pointer;
}
.header {
  background: #7cacf8;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
}
.full-height {
  height: 100vh;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  flex-direction: column;
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
  .header {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    Grid-column-gap: 10px;
    height: auto;
    text-align: center;
    padding: 16px;
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
</style>
