<template>
  <div>
    <nuxt/>
    <sign-in />
    <sign-up />
  </div>
</template>
<script>
import SignIn from '@/components/auth/Signin'
import SignUp from '@/components/auth/Signup'

export default {
  components: {
    SignIn,
    SignUp,
  }
}
</script>
