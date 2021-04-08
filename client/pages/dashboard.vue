<template>
  <div class="mx-auto w-5/6 mt-8">
    <div>Dashboard For {{ user.email }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: ['auth'],
  computed: {
    ...mapGetters('user', ['user']),
  },
}
</script>
