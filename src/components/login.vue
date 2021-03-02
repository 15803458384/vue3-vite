<template>
  <div>1111dwqdqw1d</div>
  <div class='form-element'>
    <h2> {{ state.title }} </h2>
    <input type='text' v-model='state.username' placeholder='Username' />

    <input type='password' v-model='state.password' placeholder='Password' />

    <button @click='login'>
      Submit
    </button>
    <p>
      Values: {{ state.username + ' ' + state.password }}
    </p>
    <p> lowerCaseUsername : {{lowerCaseUsername}}</p>
  </div>
</template>
<script>
import { reactive, onMounted, computed } from 'vue';

export default {
  props: {
    title: String
  },

  emits: ['login'],
  setup(props, { emit }) {
    const state = reactive({
      username: '',
      password: ''
    });
    const lowerCaseUsername = computed(() => state.username.toLowerCase());
    onMounted(() => {
      console.log('组件已挂载');
      console.log('title: ' + props.title);
      console.log('title: ' + state.lowerCaseUsername);
    });

    const login = () => {
      emit('login', {
        username: state.username,
        password: state.password
      });
    };
    return {
      login,
      lowerCaseUsername,
      state
    };
  }
};
</script>