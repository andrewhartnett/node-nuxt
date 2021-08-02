<template>
  <div class="text-center">
    <h1
      class="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 w-1/2 mx-auto"
    >
      {{ text }}
      <span
        v-if="highlight"
        class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-gray-400"
      >
        {{ highlight }}
      </span>
    </h1>
    <p class="text-xl text-gray-600">
      {{ details }}
    </p>
    <div
      v-if="buttonLeft || buttonRight"
      class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center my-6"
    >
      <div v-if="buttonLeft">
        <nuxt-link
          class="block text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0 p-2 rounded"
          :to="buttonLeft.to"
          >{{ buttonLeft.text }}</nuxt-link
        >
      </div>
      <div v-if="buttonRight">
        <nuxt-link
          class="block text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4 p-2 rounded"
          :to="buttonRight.to"
          >{{ buttonRight.text }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    highlight: {
      type: String,
      default: '',
    },
    details: {
      type: String,
      default: '',
    },
    buttonLeft: {
      type: Object,
      default: null,
    },
    buttonRight: {
      type: Object,
      default: null,
    },
  },
  computed: {},
}
</script>
