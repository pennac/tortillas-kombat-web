<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader v-if="route.path !== '/'" />
    <main :class="['flex-grow pb-4', route.path !== '/' ? 'pt-14' : '']">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
