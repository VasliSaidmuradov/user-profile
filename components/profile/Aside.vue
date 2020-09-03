<template>
  <aside class="profile-aside">
    <div class="profile-aside__name-wrp">
      <div class="profile-aside__avatar">
        <img :src="user.avatar" alt="avatar" />
      </div>
      <p class="profile-aside__name">
        Приветствуем,
        <b>{{ user.firstName }}</b>
      </p>
    </div>
    <nav class="profile-aside__nav">
      <nuxt-link class="profile-aside__link" to="/profile">
        <profile-icon />Личные данные
      </nuxt-link>
    </nav>
    <nuxt-link class="profile-aside__logout" to @click.native="logout">
      <logout-icon />Выйти
    </nuxt-link>
  </aside>
</template>

<script>
import profileIcon from '@/static/icons/user.svg'
import bonusesIcon from '@/static/icons/gift.svg'
import ordersIcon from '@/static/icons/clock.svg'
import logoutIcon from '@/static/icons/login.svg'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    profileIcon,
    bonusesIcon,
    ordersIcon,
    logoutIcon,
  },
  computed: {
    ...mapGetters({
      user: 'GET_USER',
    })
  },
  methods: {
    ...mapActions({
      logout: 'logout',
    })
  },
}
</script>
