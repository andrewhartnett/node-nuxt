export default function ({ store, redirect }) {
  // If the user is not authenticated
  if (!store.state.user.token) {
    if (localStorage.getItem('user')) {
      store.commit('user/resetFromStorage')
    } else {
      return redirect('/login')
    }
  }
}
