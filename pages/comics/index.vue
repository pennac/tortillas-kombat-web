<template>
  <div class="w-full relative min-h-screen bg-white px-4 py-8">
    <h1 class="font-header font-black text-4xl text-zinc-900 text-center mb-2 mt-4 tracking-tighter" style="text-shadow: 2px 2px 0 #fff, -1px -1px 0 #fff;">LOS CAPÍTULOS</h1>
    <p class="font-body font-bold text-center text-zinc-600 text-xs mb-8 uppercase tracking-widest">Archivio della Resistenza</p>

    <div v-if="pending" class="text-center font-body font-bold text-amber-600">
      Cargando...
    </div>
    <div v-else-if="error" class="text-center font-body font-bold text-red-600">
      Error al cargar los capítulos.
    </div>
    <div v-else class="grid grid-cols-1 gap-6">
      <div 
        v-for="comic in displayedComics" 
        :key="comic._path"
        :id="comic._path?.split('/').pop() || ''"
      >
        <ChapterCard 
          :title="comic.title"
          :description="comic.description || 'Sin descripción.'"
          :cover="comic.cover"
          :link="comic._path || '/'"
          :releaseDate="comic.releaseDate"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

useHead({ title: 'Capítulos - Tortillas Kombat' })

const { data: comics, pending, error } = await useAsyncData('comics-archive', () => 
  queryContent('/comics').sort({ title: 1 }).find()
)

const displayedComics = computed(() => {
  if (!comics.value) return []
  
  const current = new Date()
  current.setHours(0,0,0,0)

  // Sort chronologically by releaseDate just in case
  const sorted = [...comics.value].sort((a, b) => {
    return new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime()
  })

  const released: any[] = []
  let unreleasedAdded = false

  for (const comic of sorted) {
    const releaseDate = new Date(comic.releaseDate)
    releaseDate.setHours(0,0,0,0)

    if (current >= releaseDate) {
      released.push(comic)
    } else if (!unreleasedAdded) {
      // Add exactly one unreleased future chapter
      released.push(comic)
      unreleasedAdded = true
    }
  }

  return released
})
</script>
