export default {
  clear(context) {
    context.commit('clear')
  },
  update(context, payload) {
    context.commit('update', payload)
  },
}
