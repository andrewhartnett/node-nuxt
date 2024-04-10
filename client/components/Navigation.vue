<template>
  <header
    class="w-full md:bg-opacity-90 transition duration-300 ease-in-out border-b border-blue-300 mb-4"
  >
    <div class="max-w-6xl mx-auto">
      <div class="flex items-center justify-between h-16 md:h-20">
        <div class="flex-shrink-0 mr-4">
          <nuxt-link class="block text-xl p-2" to="/"> GymNotes XYZ</nuxt-link>
        </div>
        <nav>
          <ul class="flex flex-grow justify-end flex-wrap">
            <li v-show="!user.email" class="mr-2">
              <nuxt-link class="block p-2" to="login">Sign In</nuxt-link>
            </li>
            <li v-show="!user.email">
              <nuxt-link class="block bg-blue-600 text-white p-2" to="register"
                >Sign Up</nuxt-link
              >
            </li>
            <li v-show="user.email">
              <nuxt-link class="block bg-blue-600 text-white p-2" to="logout"
                >Logout</nuxt-link
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('user', ['user']),
  },
}
</script>
