<template>
  <div class="profile__block">
    <div class="profile__heading">
      <heading-icon />Личные данные
    </div>
    <div class="profile__block-inner">
      <div class="profile__input-wrap">
        <label @click="alertToSave" class="profile__label">
          <span>Имя</span>
          <input v-model="firstName" type="text" class="profile__input" :disabled="toggleSave"/>
        </label>
        <label @click="alertToSave" class="profile__label">
          <span>Фамилия</span>
          <input v-model="lastName" type="text" class="profile__input" :disabled="toggleSave"/>
        </label>
      </div>
      <v-button :class="{ alert: alert }" :icon="false" @click.native="openSave">{{ toggleSave ?  'Изменить' : 'Сохранить' }}</v-button>
    </div>
  </div>
</template>

<script>
import headingIcon from '@/static/icons/shield.svg'
import arrow from '@/static/icons/chevron.svg'
import VButton from '@/components/common/VButton'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    headingIcon,
    arrow,
    VButton,
  },
  data() {
    return {
      toggleSave: true,
      adulthood: 0,
      firstName: null,
      lastName: null,
      alert: false,
      changesSaved: false,
    }
  },
  created() {
    this.firstName = this.user.firstName
    this.lastName = this.user.lastName
  },
  watch: {
    toggleSave: async function(val) {
      console.log('saved!!!');
    }
  },
  computed: {
    ...mapGetters({
      user: 'GET_USER',
    }),
  },
  methods:{
    ...mapActions({
    }),
    alertToSave(field) {
      if (this.alert) return
      if(field && !this.toggleSave) {
        this[field] = !this[field]
      }
      else {
        this.alert = true
        setTimeout(() => {
          this.alert = false
        }, 300)
      }
    },
    openSave() {
      this.toggleSave = !this.toggleSave
    }
  },
}
</script>
<style lang="scss" scoped>
  .alert {
    opacity: 0.5;
  }
</style>
