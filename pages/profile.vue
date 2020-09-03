<template>
  <div class="profile">
    <div class="container">
      <div class="row">
        <!-- <pre> {{ user }} </pre> -->
        <profile-aside />
        <div class="profile__content">
          <profile-account />
          <profile-Personal />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileAside from '@/components/profile/Aside'
import profileAccount from '@/components/profile/Account'
import profilePersonal from '@/components/profile/Personal'
import { mapGetters } from 'vuex'

export default {
  components: {
    profileAside,
    profileAccount,
    profilePersonal,
    },
 	middleware: ['auth'],
  computed: {
    ...mapGetters({
      user: 'GET_USER',
    })
  }
}
</script>
