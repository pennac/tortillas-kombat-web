<template>
  <div class="bg-white min-h-screen w-full flex justify-center">
    
    <div class="relative w-full max-w-md h-screen overflow-y-scroll snap-y snap-mandatory hide-scrollbar bg-white border-x-2 border-zinc-900 shadow-[0_0_50px_rgba(24,24,27,0.1)]">
      
      <div v-if="chapter" class="absolute top-0 left-0 z-[100] bg-zinc-900 text-white px-2 py-1 font-body font-bold text-[10px] rounded-br pointer-events-none shadow-[2px_2px_0_rgba(24,24,27,1)]">
        Pannelli: {{ chapter?.panels?.length || 0 }}
      </div>

      <div 
        v-for="(panel, index) in chapter?.panels" 
        :key="index" 
        class="relative w-full h-screen snap-center flex-shrink-0 overflow-hidden border-b-4 border-zinc-900 bg-zinc-100"
      >
        <div class="absolute inset-0 w-full h-full">
          <video 
            v-if="panel.type?.toLowerCase() === 'video'" 
            :src="panel.src" 
            autoplay 
            loop 
            muted 
            playsinline 
            class="absolute inset-0 w-full h-full object-cover"
          ></video>
          <img 
            v-else 
            :src="panel.src" 
            class="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div 
          v-if="panel.textEffect"
          v-motion
          :initial="{ opacity: 0, scale: 0.3, rotate: -15 }"
          :visibleOnce="{ opacity: 1, scale: 1.1, rotate: 5, transition: { type: 'spring', stiffness: 300, damping: 10 } }"
          class="absolute top-[30%] left-0 w-full z-20 pointer-events-none flex justify-center px-4"
        >
           <p class="font-header text-4xl md:text-7xl text-amber-600 font-extrabold tracking-tighter drop-shadow-[2px_2px_0_rgba(24,24,27,1)] uppercase -rotate-6 transform scale-y-110 max-w-[90vw] whitespace-normal break-words leading-none overflow-hidden text-center" style="text-shadow: 2px 2px 0 #18181b, -2px -2px 0 #18181b, 2px -2px 0 #18181b, -2px 2px 0 #18181b;">
             {{ panel.textEffect }}
           </p>
        </div>

        <div 
          v-if="panel.textOverlay"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="absolute bottom-0 left-0 w-full z-10 px-6 pb-24 md:pb-8 flex flex-col items-center text-center"
        >
          <div class="bg-white/95 backdrop-blur-sm border-2 border-zinc-900 p-5 shadow-[4px_4px_0_rgba(24,24,27,1)] max-w-[90%] md:max-w-2xl">
            <p class="font-body text-base md:text-lg text-zinc-900 font-medium leading-relaxed">
              {{ panel.textOverlay }}
            </p>
          </div>
        </div>

         <div 
          v-if="panel.description"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 800 } }"
          class="absolute top-12 left-0 w-full z-10 px-6 flex flex-col items-center text-center"
        >
          <div class="bg-white/95 backdrop-blur-sm border-2 border-zinc-900 p-5 shadow-[4px_4px_0_rgba(24,24,27,1)] max-w-[90%]">
            <p class="font-body text-base md:text-lg text-zinc-900 font-medium leading-relaxed">
              {{ panel.description }}
            </p>
          </div>
        </div>

      </div>

      <div v-if="chapter" class="relative w-full h-screen snap-center flex-shrink-0 flex items-center justify-center bg-white border-t-4 border-zinc-900">
        <h3 class="text-3xl font-header font-bold text-zinc-900 uppercase tracking-widest text-center px-4">
          Fin del Capítulo
        </h3>
        
        <NuxtLink to="/comics" class="absolute bottom-12 font-header font-bold text-zinc-900 border-2 border-zinc-900 px-6 py-3 hover:bg-zinc-100 transition-colors shadow-[4px_4px_0_rgba(24,24,27,1)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
          Volver al Índice
        </NuxtLink>
      </div>

    </div>

    <!-- Audio FAB -->
    <ClientOnly>
      <button 
        v-if="chapter && chapter.audioTheme"
        @click="toggleAudio"
        class="fixed top-20 right-4 z-[60] bg-white/90 p-3 w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-zinc-900 shadow-md flex items-center justify-center text-zinc-900 hover:-translate-y-1 transition-transform"
        :class="{ 'animate-pulse ring-4 ring-zinc-900/10': isPlaying }"
        aria-label="Toggle Audio"
      >
        <span v-if="isPlaying" class="text-xl md:text-2xl">⏸</span>
        <span v-else class="text-xl md:text-2xl">🎵</span>
      </button>
    </ClientOnly>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Panel {
  type: "image" | "video" | "Video";
  src: string;
  textOverlay?: string;
  textEffect?: string;
}

interface Chapter {
  title: string;
  audioTheme?: string;
  panels: Panel[];
}

const props = defineProps<{
  chapter: Chapter
}>()

const isPlaying = ref(false)
let audioObj: HTMLAudioElement | null = null

const toggleAudio = () => {
  if (!audioObj && props.chapter.audioTheme) {
    audioObj = new Audio(props.chapter.audioTheme)
    audioObj.loop = true
  }
  
  if (audioObj) {
    if (isPlaying.value) {
      audioObj.pause()
      isPlaying.value = false
    } else {
      audioObj.play().then(() => {
        isPlaying.value = true
      }).catch(err => {
        console.error("Autoplay prevented or audio source failed", err)
      })
    }
  }
}

onUnmounted(() => {
  if (audioObj) {
    audioObj.pause()
    audioObj.currentTime = 0
  }
})
</script>
