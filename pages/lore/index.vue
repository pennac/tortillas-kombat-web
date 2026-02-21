<template>
  <div class="w-full relative min-h-screen bg-zinc-950 px-4 py-8">
    <h1 class="font-rye text-4xl text-amber-500 text-center mb-2 mt-4">ROSTER</h1>
    <p class="font-elite text-center text-zinc-500 text-xs mb-8 uppercase tracking-widest">Seleziona il tuo combattente</p>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <NuxtLink 
        v-for="char in characters" 
        :key="char._path"
        :to="char._path"
        class="block relative aspect-square border-2 border-zinc-800 bg-zinc-900 group overflow-hidden transition-all hover:border-amber-500 hover:shadow-[0_0_15px_rgba(227,182,89,0.5)] cursor-pointer"
      >
        <img :src="char.media?.portrait || '/img/placeholder-portrait.jpg'" :alt="char.name" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0" />
        <div class="absolute bottom-0 inset-x-0 bg-zinc-950/80 p-2 text-center border-t border-zinc-800 group-hover:border-amber-500">
           <span class="font-rye text-zinc-300 group-hover:text-amber-500 text-sm md:text-base transition-colors">{{ char.name }}</span>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Roster - Tortillas Kombat' })

const { data: characters } = await useAsyncData('lore', () => 
  queryContent('/lore').find()
)
</script>
