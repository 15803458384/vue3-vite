<template>
  <div class="details">
    详情页面
  </div>
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger" @click="changeStore">危险按钮</el-button>

    <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
    {{checkoutStatus}}
    <button @click="toPage()">去首页</button>
  </div>
</template>

<script>
import { reactive, toRefs, getCurrentInstance, computed, onMounted,h } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { codeLogin } from '../api/common';
// import { ElButton, ElSelect, ElOption } from 'element-plus';
export default {
  components: {
    // ElButton,
    // ElSelect,
    // ElOption
  },
render() {
    return h('div')
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const { ctx } = getCurrentInstance(); // 获取上下文，类似原来的this
    const state = reactive({
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    });
    const checkoutStatus = computed(() => store.state.app.device);
    onMounted(() => {
      login();
    });
    function toPage() {
      ctx
        .$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        })
        .then(() => {
          ctx.$message({
            type: 'success',
            message: '删除成功!'
          });
        })
        .catch(() => {
          ctx.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      // router.push({ path: '/', query: { show: true } });
    }
    function changeStore() {
      if (store.state.app.device == 'white') {
        store.dispatch('app/setValue', 'desktop');
      } else {
        store.dispatch('app/setValue', 'white');
      }
    }
    function login() {
      codeLogin().then((res) => {
        console.log(res);
      });
    }
    return { ...toRefs(state), checkoutStatus, toPage, changeStore };
  }
};
</script>

<style>
</style>