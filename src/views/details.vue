<template>
  <div class="details">
    详情页面
  </div>
  <div>

    <button @click="toPage()">去首页</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    function toPage() {
      router.push({ path: '/', query: { show: true } });
    }
    return { toPage };
  }
};
</script>

<style>
</style>