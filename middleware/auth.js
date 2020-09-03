export default async function ({ store, redirect }) {
  if (!store.state.isSignedIn) {
    redirect('/');
  }
}
