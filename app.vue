<template>
  <div class="w-full max-w-md mx-auto min-h-screen bg-white text-zinc-900 relative shadow-2xl overflow-hidden font-body">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <CookieBanner />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Tortillas Kombat - The Steam Scroll',
  description: 'Un cómic interactivo y base de datos de lore en un mundo Steampunk-Culinario.',
  ogTitle: 'Tortillas Kombat - The Steam Scroll',
  ogDescription: 'Descubre Sartenópolis y sus técnicas de combate culinario.',
  ogImage: '/capitoli/capitulo1/Cover.jpeg',
  twitterCard: 'summary_large_image',
})
</script>
