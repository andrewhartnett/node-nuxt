<template>
  <div></div>
</template>
<script>
export default {
  created() {
    this.$store.commit('user/logout')
    this.$router.push('login')
  },
}
</script>
