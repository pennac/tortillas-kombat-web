<template>
  <div class="w-full relative bg-white min-h-screen pb-12">
    
    <!-- Hero Section -->
    <section class="relative h-[70vh] w-full flex items-center justify-center overflow-hidden border-b-4 border-zinc-900 bg-zinc-100">
      <div class="absolute inset-0 z-0">
         <video src="/img/bg1.mp4" autoplay loop muted playsinline class="w-full h-full object-cover"></video>
      </div>
    </section>

    <!-- Content Section -->
    <section class="relative min-h-[30vh] w-full flex flex-col items-center justify-start overflow-hidden py-12">
      <div class="relative z-10 text-center px-4 w-full">
        <h1 class="font-header font-black text-5xl md:text-6xl text-zinc-900 mb-6 tracking-tight" style="text-shadow: 2px 2px 0 #fff, -1px -1px 0 #fff;">
          TORTILLAS KOMBAT
        </h1>
        
        <div class="bg-white border-2 border-zinc-900 p-6 shadow-[4px_4px_0_rgba(24,24,27,1)] mb-10 relative">
          <p class="font-body text-zinc-800 text-sm leading-relaxed font-medium">
            En un futuro distópico y grasiento, la ciudad de Sartenópolis vive bajo el yugo del tirano Huovo Frito, quien ha prohibido el sabor y la mezcla de ingredientes. Patato-Pan, un viejo ronin tubérculo con un pasado doloroso, regresa del exilio. Junto a su pequeña aprendiz Aceituna, deberá viajar por las Tierras del Ayuno, aprender las 7 Técnicas Maestras y enfrentarse a su propio hermano, el General Roto, en el brutal torneo "Tortillas Kombat". No es solo una lucha por el poder; es una batalla por el derecho a ser delicioso.
          </p>
        </div>
         
        <button 
          @click="isModalGateOpen = true"
          class="bg-amber-400 text-zinc-900 border-2 border-zinc-900 font-header font-black text-xl md:text-2xl py-4 px-8 uppercase tracking-widest cursor-pointer mt-8 shadow-[8px_8px_0_rgba(24,24,27,1)] hover:shadow-[2px_2px_0_rgba(24,24,27,1)] hover:translate-x-1.5 hover:translate-y-1.5 transition-all duration-200"
        >
          DESBLOQUEAR ARCHIVOS
        </button>

        <SocialGate 
          v-if="isModalGateOpen" 
          @close="isModalGateOpen = false" 
        />
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({ title: 'Inicio - Tortillas Kombat' })

const isModalGateOpen = ref(false)
</script>
