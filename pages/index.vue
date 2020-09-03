<template>
  <section class="container">
    <Header />
    <!-- <v-btn @click="openAuthModal" class="ma-2" outlined>Войти</v-btn> -->
    <!-- <v-button @click.native="openAuthModal" :icon="true" icon-type="login">Войти</v-button> -->
  </section>
</template>

<script>
import VButton from '@/components/common/VButton'
import Header from '@/components/common/Header'
import { mapActions } from "vuex";


export default {
  components: {
    VButton,
    Header,
  },
  methods: {
    openAuthModal() {
      this.$setTrue('auth.signin')
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

