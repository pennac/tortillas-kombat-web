<template>
  <div class="w-full h-screen bg-zinc-950 font-elite">
    <ClientOnly>
      <MotionComicReader v-if="chapter" :chapter="chapter" />
      <div v-else class="h-screen w-full flex items-center justify-center text-amber-500">
        Caricamento capitolo in corso...
      </div>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

definePageMeta({
  layout: false // Hide header/footer for immersive reading
})

const route = useRoute()

const { data: chapter } = await useAsyncData(`comic-${route.params.id}`, () => 
  queryContent(`/comics/${route.params.id}`).findOne()
)

useHead({ title: chapter.value ? `${chapter.value.title} - Lettore` : 'Lettore' })
</script>
