<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }} {{state2.count}} {{state.count2}}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <div class="main">
     <router-link to='/home'> Home</router-link>
     <br>
     <br>

     <router-link to='/details'> details</router-link>
  </div>
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 2,count2: 2 })
const state2 = reactive({ count: 23 })
</script>

<style lang="scss" scoped>
a {
  color: #42b983;
}
.main {
  height: 100px;
}
</style>