<template>
  <div class="container">
    <div class="text-center w-full">
      <input v-model="workout.name" type="text" @change="sync" />
    </div>
    <div
      v-for="(excercise, i) in workout.excercises"
      :key="i"
      class="w-full py-4"
    >
      <div class="w-full text-2xl">
        {{ excercise.name }}
      </div>
      <div class="flex">
        <div class="w-2/5">Reps</div>
        <div class="w-2/5">Weight</div>
        <div class="w-1/5"></div>
      </div>
      <div v-for="(set, j) in excercise.sets" :key="j" class="flex">
        <div class="w-2/5">
          <input
            v-model="workout.excercises[i].sets[j].reps"
            type="text"
            class="w-full outline-none focus:outline-none"
            @change="sync"
          />
        </div>
        <div class="w-2/5">
          <input
            v-model="workout.excercises[i].sets[j].weight"
            type="text"
            class="w-full outline-none focus:outline-none"
            @change="sync"
            @click="reset('weight', i, j)"
          />
        </div>
        <div class="w-1/5"></div>
      </div>
      <div class="text-center my-2">
        <button
          class="w-1/3 border-gray-500 border p-2"
          @click.prevent="removeSet(i)"
        >
          - Set
        </button>
        <button
          class="w-1/3 border-gray-500 border p-2"
          @click.prevent="addSet(i)"
        >
          + Set
        </button>
      </div>
    </div>
    <div class="text-center">
      <input
        v-model="newExcercise"
        type="text"
        class="shadow appearance-none border rounded p-2 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button @click.prevent="addExcercise">Add Excercise</button>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  async asyncData({ $axios, redirect, params }) {
    try {
      const res = await $axios.$get(`/workout/${params.id}`)

      return {
        workout: res.workout,
        newExcercise: '',
      }
    } catch (err) {
      console.log('error', err)
    }
  },
  methods: {
    addExcercise() {
      this.workout.excercises.push({
        name: this.newExcercise,
        sets: [{ reps: 4, weight: 0 }],
      })

      this.sync()
    },
    addSet(index) {
      this.workout.excercises[index].sets.push({ reps: 4, weight: 0 })
      this.sync()
    },
    removeSet(index) {
      this.workout.excercises[index].sets.pop()
      this.sync()
    },
    async sync() {
      await this.$axios.$put(`/workout/${this.workout._id}`, {
        workout: this.workout,
      })
    },
  },
}
</script>
