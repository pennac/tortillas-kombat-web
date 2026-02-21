<template>
  <div v-if="character" class="relative min-h-[100dvh] w-full bg-zinc-950 overflow-hidden">
    <!-- Idle Video Background -->
    <div class="absolute inset-0 z-0">
      <video v-if="character.media?.videoIdle" :src="character.media?.videoIdle" autoplay loop muted playsinline class="w-full h-full object-cover opacity-40"></video>
      <img v-else src="../capitoli/capitulo1/cover.jpeg" class="w-full h-full object-cover opacity-30 sepia" />
      <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 px-6 py-12 flex flex-col h-full justify-end min-h-[100dvh] pb-24">
      <NuxtLink to="/lore" class="absolute top-20 left-6 font-elite text-amber-500 text-xs hover:text-amber-400 bg-zinc-950/50 px-2 py-1 backdrop-blur-sm border border-amber-900">
        ← Torna al Roster
      </NuxtLink>
      
      <h1 class="font-rye text-5xl text-amber-500 mb-2 drop-shadow-lg">{{ character.name }}</h1>
      <p class="font-elite text-zinc-400 text-sm italic mb-8 border-l-2 border-red-800 pl-3">
        "{{ character.quote || 'Il vapore mi guida.' }}"
      </p>

      <!-- Stats -->
      <div v-if="character.stats" class="mb-8 grid grid-cols-1 gap-3 max-w-sm">
        <div v-for="(val, stat) in character.stats" :key="stat" class="flex items-center gap-4">
          <span class="font-elite text-amber-600 text-xs w-16 uppercase">{{ stat }}</span>
          <div class="flex-grow h-2 bg-zinc-900 border border-zinc-800">
            <div class="h-full bg-red-800 transition-all duration-1000 ease-out" :style="{ width: `${val * 10}%` }"></div>
          </div>
          <span class="font-elite text-zinc-300 text-xs w-6 text-right">{{ val }}/10</span>
        </div>
      </div>

      <!-- Biography -->
      <div class="bg-zinc-900/80 backdrop-blur-md border border-amber-900/50 p-6 shadow-2xl">
        <ClientOnly>
          <div class="typewriter-container h-32 overflow-y-auto hide-scrollbar">
             <p class="font-elite text-zinc-300 text-sm leading-relaxed typing-effect">
               {{ character.description }}
             </p>
          </div>
        </ClientOnly>
      </div>
    </div>
  </div>
  <div v-else class="h-screen flex items-center justify-center font-elite text-amber-500">
    Combattente non trovato.
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

const { data: character } = await useAsyncData(`lore-${route.params.id}`, () => 
  queryContent(`/lore/${route.params.id}`).findOne()
)

useHead({ title: character.value ? `${character.value.name} - Roster` : 'Roster' })
</script>

<style scoped>
/* Very basic typewriter emulation purely with css animation if needed, else fallback */
.typing-effect {
  overflow: hidden; 
  animation: typing 2s steps(40, end);
}
@keyframes typing {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
