<template>
  <header class="header">
    <div class="header__container">
      <div class="header__right">
        <div class="header__signin" @click="$setTrue('auth.signin')">
          <user-icon />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import VButton from '@/components/common/VButton'
import userIcon from '@/static/icons/user.svg'

export default {
  components: {
    VButton,
    userIcon,
  },
  methods: {
    openAuth() {
      if (this.$checkAuth()) {
        this.$router.push({ path: "/profile" });
      } else {
        this.$setTrue('auth.signin');
      }
    },
  }
}
</script>
