<template>
  <transition name="fade">
    <form @submit.prevent="signup" v-if="$check('auth.register')" class="modal">
      <div class="overlay" @click="$setFalse('auth.register')"></div>
      <div class="modal__container">
        <button class="modal__close" @click="$setFalse('auth.register')">
          <close-icon />Закрыть
        </button>
        <h2 class="modal__title">Регистрация</h2>
        <div class="modal__inner">
          <p class="modal__label">Ваше имя</p>
          <input
            type="text"
            class="modal__input"
          />
          <p class="modal__label">Телефон</p>
          <client-only>
            <the-mask
              :mask="['+# (###) ###-##-##']"
              class="modal__input"
              type="tel"
            />
          </client-only>
          <p class="modal__label">Пароль</p>
          <input
            type="password"
            class="modal__input"
          />
          <p class="modal__label">Повторите пароль</p>
          <input
            type="password"
            class="modal__input"
          />
          <p class="modal__text">
            Нажимая кнопку «Зарегистрироваться», вы принимаете условия
            <span>Пользовательского соглашения</span>
          </p>
          <div class="modal__btn-wrp">
            <v-button :icon="true" icon-type="login" type="submit">Зарегистрироваться</v-button>
            <button @click.prevent="openSignin" class="modal__btn">Войти</button>
          </div>
        </div>
      </div>
    </form>
  </transition>
</template>

<script>
import VButton from "@/components/common/VButton"
import closeIcon from '@/static/icons/close.svg'

export default {
  components: {
    VButton,
    closeIcon,
  },
  methods: {
    openSignin() {
      this.$setFalse('auth.register')
      this.$setTrue('auth.signin')
    },
    async signup() {
      console.log('Registering...')
    },
  },
}
</script>
