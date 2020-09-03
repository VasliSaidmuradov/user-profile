const usersInDatabase = [{
    login: 'vasli',
    pass: 'qwqwqw'
  },
  {
    login: 'user',
    pass: 'qwqwqwqw'
  },
]
const fakeUsers = [{
    id: 1,
    login: 'vasli',
    firstName: 'Vasli',
    lastName: 'Said',
    email: 'vasli_ntu@mail.ru',
    phone: '77018009008',
    avatar: 'https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png',
  },
  {
    id: 2,
    login: 'user',
    firstName: 'User',
    lastName: 'Userovich',
    email: 'user.userovich@mail.ru',
    phone: '77010000000',
    avatar: null,
  },
]

export const state = () => ({
  isSignedIn: false,
  user: null,
})

export const mutations = {
  SET_IS_SIGNEDIN: (state, payload) => state.isSignedIn = payload,
  SET_USER: (state, payload) => state.user = payload,
}

export const actions = {
  async signin(store, payload) {
    const verify = usersInDatabase.find(el => {
      return el.login === payload.login && el.pass === payload.pass
    })

    if (verify) {
      store.commit('SET_IS_SIGNEDIN', true)
      await store.dispatch('fetchUser', payload.login)
    } else {
      store.commit('SET_IS_SIGNEDIN', false)
      store.commit('SET_USER', null)
    }
  },
  async fetchUser(store, payload) {
    const resp = await fakeUsers.find(el => el.login === payload)
    console.log("👨‍👩‍👦‍👦: fetchUser -> user: ", resp)
    if (resp) {
      store.commit('SET_USER', resp);
    } else {
      store.commit('SET_IS_SIGNEDIN', false);
    }
  },
  async logout(store) {
    await store.dispatch('fetchUser', {});
    this.$router.push({
      path: '/'
    });
  },
}

export const getters = {
  GET_IS_SIGNEDIN: state => state.isSignedIn,
  GET_USER: state => ({
    ...state.user,
    avatar: state.user.avatar ? state.user.avatar : require('@/static/images/avatar-placeholder.png')
  }),
}
