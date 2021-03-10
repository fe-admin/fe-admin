export default {
  clear(state) {
    state.userInfo = {}
  },
  update(state, payload) {
    Object.assign(state, payload)
  },
}
