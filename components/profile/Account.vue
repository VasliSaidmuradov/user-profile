<template>
  <div class="profile__block">
    <div class="profile__heading">
      <heading-icon />Учетная запись
    </div>
    <div class="row profile__acc-row" @click="$setTrue('profile.phone')">
      <phone-icon />
      <p class="profile__text">Номер телефона</p>
      <p class="profile__text --gray">{{ $formatPhone(user.phone) }}</p>
    </div>
    <div class="row profile__acc-row" @click="$setTrue('profile.email')">
      <email-icon />
      <p class="profile__text">E-mail</p>
      <p class="profile__text --gray">{{ user.email ? user.email : '-' }}</p>
    </div>
    <div class="row profile__acc-row" @click="$setTrue('profile.password')">
      <password-icon />
      <p class="profile__text">Пароль</p>
      <button class="profile__edit">Изменить</button>
    </div>
  </div>
</template>

<script>
import headingIcon from '@/static/icons/shield.svg'
import phoneIcon from '@/static/icons/phone.svg'
import emailIcon from '@/static/icons/mail.svg'
import passwordIcon from '@/static/icons/key.svg'
import { mapGetters } from 'vuex'

export default {
  components: {
    headingIcon,
    phoneIcon,
    emailIcon,
    passwordIcon,
  },
  computed: {
    ...mapGetters({
      user: 'GET_USER',
    })
  }
}
</script>
