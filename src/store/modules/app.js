
const state = {
  device: 'desktop',
};

const mutations = {
  SETVALUE(state, val){
    state.device = val;
  }
};

const actions = {
  setValue({state, commit},val){
    commit('SETVALUE',val)
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
