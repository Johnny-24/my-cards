<template>
  <header class="header">
      <a-button v-if="!isHomePage" type="link" shape="circle" @click="linkTo('index')" :icon="h(ArrowLeftOutlined)">Назад</a-button>
      <Logo />
      <a-button v-if="isHomePage" type="primary" shape="circle" @click="linkTo('create')" :icon="h(PlusOutlined)"></a-button>
    </header>
</template>

<script setup>
  import { useRouter, useRoute } from 'vue-router';
  import Logo from '../components/Logo.vue'
  import { h, computed } from 'vue';
  import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons-vue';

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
  background: #22262a;
  max-width: 760px;
}
</style>
