export default function ({ store }, inject) {
  inject('check', (key) => store.getters['flags/CHECK'](key))

  inject('toggle', (key) => {
    store.commit('flags/TOGGLE', key, { root: true })
  })

  inject('setFalse', (key) => {
    store.commit('flags/SET', { [key]: false }, { root: true })
  })

  inject('setTrue', (key) => {
    store.commit('flags/SET', { [key]: true }, { root: true })
  })
}
