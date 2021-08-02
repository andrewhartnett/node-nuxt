<template>
  <div>
    <div class="max-w-6xl mx-auto mb-6">
      <HeroHeader
        text="Welcome to your"
        highlight="Project"
        details="This project is going to
    be so awesome just you wait"
        :button-left="buttonLeft"
        :button-right="buttonRight"
        :hightlight="true"
      />
      <div
        class="block border border-black mx-auto"
        style="height: 300px; width: 600px"
      >
        Some Awesome Image
      </div>
    </div>

    <div class="w-full bg-gray-100">
      <div class="max-w-6xl mx-auto">
        <HeroHeader text="We are awesome" />
        <p class="px-6">And here are all of the reasons why</p>
        <p class="px-6">And here are all of the reasons why</p>
        <p class="px-6">And here are all of the reasons why</p>
        <p class="px-6">And here are all of the reasons why</p>
        <p class="px-6">And here are all of the reasons why</p>
        <p class="px-6">And here are all of the reasons why</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonLeft: {
        to: '/register',
        text: 'Register',
      },
      buttonRight: {
        to: '/',
        text: 'Learn More',
      },
    }
  },
}
</script>
