<template>
  <div>hello，{{ name }}</div>
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
</script>
