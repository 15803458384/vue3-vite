<template>
  <div>dqwdqwdqw</div>
  <div class='home-container'>
    <img alt="Vue logo" v-if="isShow" src="@/assets/logo.png" />

    <login title='登录首页' @login="userlogin"></login>
    <HelloWorld msg="Hello Vue 3 + Vite1swqdqdqdqd" />
    <button @click="change">显示</button>
    <button @click="toPage()">去详情页</button>
    <div>
     x轴： {{x}}   y轴： {{ y}}
    </div>
  </div>
</template>
<script>
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  getCurrentInstance
} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import login from '@/components/login.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import { useMousePosition } from '@/utils/mousemove';
export default {
  components: {
    login,
    HelloWorld
  },
  setup() {
    const isShow = ref(false);
    const router = useRouter();
    const route = useRoute();
    const { ctx } = getCurrentInstance();
    const { x, y } = useMousePosition();
    onMounted(() => {
      isShow.value = route.query.show;
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
    return { isShow, userlogin, change, toPage, x, y };
  }
};
</script>
<style lang="scss" scoped>
.home-container {
  height: 300px;
  background-color: pink;
}
</style>