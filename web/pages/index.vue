<template>
  <div>
    <div>hello，{{ name }}</div>
    <div>
      <a-button>11</a-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { User$ } from '~/server/api/user'

definePageMeta({
  middleware: ['auth'],
})

const name = ref('')

await useFetch<User$>('/api/user').then((res) => {
  name.value = res.data.value.name
})

// if (import.meta.env.SSR) {
//   console.info('ssr', process.memoryUsage().heapUsed / 1000 / 1000)
// }
</script>
