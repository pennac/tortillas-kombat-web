<template>
  <div class="relative w-full border-2 border-zinc-900 bg-white overflow-hidden group shadow-[4px_4px_0_rgba(24,24,27,1)] transition-transform hover:-translate-y-1">
    <!-- Unlocked visual -->
    <NuxtLink v-if="isUnlocked" :to="link" class="block w-full h-full text-left">
      <div class="relative h-78 w-full overflow-hidden flex items-center justify-center bg-zinc-50 border-b-2 border-zinc-900">
        <video 
          v-if="cover && cover.toLowerCase().endsWith('.mp4')" 
          :src="cover" 
          autoplay loop muted playsinline 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        ></video>
        <img 
          v-else 
          :src="cover" 
          :alt="title" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
        />
        <div class="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
      </div>
      <div class="p-4 relative z-10 bg-white">
        <h3 class="font-header font-bold text-xl text-zinc-900 mb-1 group-hover:text-amber-800 transition-colors">{{ title }}</h3>
        <p class="font-body text-sm text-zinc-700 line-clamp-2 mb-4">{{ description }}</p>
        <span class="inline-block border-2 border-zinc-900 text-zinc-900 px-8 py-4 font-header font-bold text-xl md:text-2xl uppercase shadow-[4px_4px_0_rgba(24,24,27,1)] group-hover:shadow-[2px_2px_0_rgba(24,24,27,1)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:bg-amber-400 transition-all duration-200">
          Leer Capítulo
        </span>
      </div>
    </NuxtLink>

    <!-- Locked visual -->
    <div v-else class="block w-full h-full grayscale opacity-80 pointer-events-none cursor-not-allowed">
      <div class="relative h-78 w-full overflow-hidden flex items-center justify-center bg-zinc-100 border-b-2 border-zinc-900">
        <video 
          v-if="cover && cover.toLowerCase().endsWith('.mp4')" 
          :src="cover" 
          autoplay loop muted playsinline 
          class="w-full h-full object-cover opacity-60"
        ></video>
        <img 
          v-else 
          :src="cover" 
          :alt="title" 
          class="w-full h-full object-cover opacity-60" 
        />
        <div class="absolute inset-0 bg-white/40 flex flex-col items-center justify-center">
            <span class="text-4xl mb-2 drop-shadow-md">🔒</span>
            <span class="font-header font-bold text-xs text-zinc-900 bg-white border-2 border-zinc-900 px-3 py-1 text-center shadow-[2px_2px_0_rgba(24,24,27,1)]">
              Sellado hasta:<br/>{{ formattedDate }}
            </span>
        </div>
      </div>
      <div class="p-4 relative z-10 bg-zinc-50">
        <h3 class="font-header font-bold text-xl text-zinc-600 mb-1">{{ title }}</h3>
        <p class="font-body text-sm text-zinc-500 line-clamp-2">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  description: string
  cover: string
  link: string
  releaseDate: string
}>()

const isUnlocked = computed(() => {
  const current = new Date()
  const release = new Date(props.releaseDate)
  current.setHours(0,0,0,0)
  release.setHours(0,0,0,0)
  return current >= release
})

const formattedDate = computed(() => {
  if (!props.releaseDate) return 'Desconocida'
  const parts = props.releaseDate.split('-')
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`
  }
  return props.releaseDate
})
</script>
