<template>
  <div>serverTime: {{ serverTime }}</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

definePageMeta({
  middleware: ['auth'],
})

const serverTime = ref('')

await useFetch<string>('/api/demo/serverTime').then((res) => {
  serverTime.value = res.data.value
})
</script>
