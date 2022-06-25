<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
useHead({
  title: 'Vitesse Nuxt 3',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: './nuxt.png',
    },
  ],
})
</script>

<style lang="scss">
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222;
  color: white;
}
</style>
