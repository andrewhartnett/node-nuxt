export const state = () => ({
  user: {
    _id: '',
    email: '',
  },
  token: '',
})

export const getters = {
  user(state) {
    return state.user
  },
  getToken(state) {
    return state.token
  },
}

export const mutations = {
  resetFromStorage(state) {
    const storage = window.localStorage.getItem('user')

    const user = JSON.parse(storage)

    state.user = {
      _id: user._id,
      email: user.email,
    }

    const token = window.localStorage.getItem('token')

    state.token = token
  },
  setUser(state, payload) {
    window.localStorage.setItem('user', JSON.stringify(payload))
    state.user = { ...payload }
  },
  setToken(state, token) {
    window.localStorage.setItem('token', token)
    state.token = token
  },
  logout(state) {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
    state.user = {
      _id: '',
      email: '',
    }
    state.token = ''
  },
}
