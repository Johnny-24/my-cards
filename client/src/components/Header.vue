<template>
  <header class="header">
    <Button v-if="!isHomePage" icon="pi pi-plus" rounded aria-label="Filter"  @click="linkTo('create')" />
      <Logo />
      <Button v-if="isHomePage" icon="pi pi-plus" rounded aria-label="Filter"  @click="linkTo('create')" />
    </header>
</template>

<script setup>
  import { useRouter, useRoute } from 'vue-router';
  import Logo from '../components/Logo.vue'
  import { computed } from 'vue';
  import Button from 'primevue/button';
  const router = useRouter();
  const route = useRoute();

  const isHomePage = computed(() => route.path === '/');
  const linkTo = (url) => {
    router.push({ name: url });
  }
</script>

<style scoped>
.header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  width: 100%;
  z-index: 10;
  max-width: 760px;
}
</style>
