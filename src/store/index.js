import { createStore } from 'vuex'
import getters from './getters';
import app from './modules/app'
import user from './modules/user'
// https://webpack.js.org/guides/dependency-management/#requirecontext
// const modulesFiles = import.meta.glob('./modules/*.js');
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
// const modules = Object.keys(modulesFiles).reduce((modules, modulePath) => {
//   // set './app.js' => 'app'
//   const moduleName = modulePath.replace(/^\.\/modules\/(.*)\.\w+$/, '$1');
//   modulesFiles[modulePath]().then((value) => {
//     modules[moduleName] = value.default;
//   })
//   return modules
// }, {});

export default createStore({
  getters,
  modules:{
    app,
    user,
  },
})
