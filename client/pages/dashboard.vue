<template>
  <div class="mx-auto w-5/6">
    <div class="text-center">
      <button class="bg-purple-800 text-white p-2" @click="createWorkout">
        Create Workout
      </button>
    </div>

    <div class="text-center">
      <nuxt-link
        v-for="workout in workouts"
        :key="workout._id"
        :to="`/workout/${workout._id}`"
      >
        {{ workout.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  middleware: ['auth'],
  async asyncData({ $axios, redirect }) {
    try {
      const workouts = await $axios.$get('/workout')
      return {
        workouts,
      }
    } catch (err) {
      redirect('/login')
    }
  },
  computed: {
    ...mapGetters('user', ['user']),
  },
  methods: {
    async createWorkout() {
      const res = await this.$axios.post('/workout', { name: 'New Workout' })

      console.log(res.data)
    },
  },
}
</script>
