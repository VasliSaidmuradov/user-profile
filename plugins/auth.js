export default function ({ store }, inject) {
  inject('getUser', () => store.state.user)
  inject('checkAuth', () => store.state.isSignedIn)
}
