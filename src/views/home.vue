<template>
  <div>dqwdqwdqw</div>
  <div class='home-container'>
    <img alt="Vue logo" v-if="isShow" src="@/assets/logo.png" />

    <login title='登录首页' @login="userlogin"></login>
    <HelloWorld msg="Hello Vue 3 + Vite1swqdqdqdqd" />
    <button @click="change">显示</button>
    <button @click="toPage()">去详情页</button>
  </div>
</template>
<script>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import login from '@/components/login.vue';
import HelloWorld from '@/components/HelloWorld.vue';
export default {
  components: {
    login,
    HelloWorld
  },
  setup() {
    const isShow = ref(false);
    const router = useRouter();
    const route = useRoute();
    onMounted(() => {
      isShow.value = route.params.show;
      console.log(isShow.value);
      console.log('mounted!');
    });
    onUpdated(() => {
      console.log('updated!');
    });
    onUnmounted(() => {
      console.log('unmounted!');
    });
    const userlogin = (data) => {
      console.log(data);
    };
    const change = () => {
      console.log(isShow.value);
      isShow.value = !isShow.value;
    };
    function toPage() {
      router.push({ path: '/details', query: { name: '111' } });
    }
    return { isShow, userlogin, change, toPage };
  }
};
</script>
<style lang="scss" scoped>
.home-container {
  height: 300px;
  background-color: pink;
}
</style>