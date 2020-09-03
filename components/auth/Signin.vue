<template>
  <transition name="fade">
    <div v-if="$check('auth.signin')" class="modal">
      <div class="overlay" @click="$setFalse('auth.signin')"></div>
      <div class="modal__container">
        <button class="modal__close" @click="$setFalse('auth.signin')">
          <close-icon />Закрыть
        </button>
        <h2 class="modal__title">Вход</h2>
        <form @submit.prevent="sendSignin" class="modal__inner">
          <p class="modal__label">Логин</p>
          <input v-model="login" type="text" class="modal__input" />
          <p class="modal__label">
            Пароль
            <button class="modal__forgot">Забыли пароль?</button>
          </p>
          <input v-model="password" type="password" class="modal__input" />
          <div class="modal__btn-wrp">
            <v-button type="submit" :icon="true" icon-type="login">Войти</v-button>
            <button @click.prevent="openSignup" class="modal__btn">Зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import VButton from '@/components/common/VButton'
import closeIcon from '@/static/icons/close.svg'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    VButton,
    closeIcon,
  },
  data() {
    return {
      login: null,
      password: null,
    }
  },
  watch: {
    '$route.path': function() {
      this.login = null
      this.password = null
    },
  },
  methods: {
    ...mapActions({
      signin: 'signin'
    }),
    openSignup() {
      this.$setFalse('auth.signin')
      this.$setTrue('auth.register')
    },
    async sendSignin() {
      try {
        await this.signin({
          login: this.login,
          pass: this.password
        })
        this.$router.push('/profile')
        this.$setFalse('auth.signin')
      } catch (error) {
        console.log(error);
      }
      this.password = null
    },
  },
}
</script>
