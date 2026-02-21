<template>
  <ClientOnly>
    <div class="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/80 backdrop-blur-sm p-4">
      <div class="bg-white border-2 border-zinc-900 text-zinc-900 shadow-xl relative w-full max-w-md p-8 text-center font-body">
        
        <button 
          @click="emit('close')" 
          class="absolute top-4 right-4 text-zinc-900 hover:text-amber-600 font-bold text-xl transition-colors"
          aria-label="Cerrar modal"
        >
          ✕
        </button>

        <h2 class="font-header font-bold text-2xl text-zinc-900 mb-4 tracking-widest">
          ACCESO RESTRINGIDO
        </h2>
        <p class="text-sm text-zinc-700 mb-6 font-medium">
          Para obtener la palabra secreta y desbloquear los archivos, únete al clan en Instagram: @tortillas.kombat
        </p>
        
        <form @submit.prevent="checkCode" class="flex flex-col gap-4">
          <input 
            v-model="inputCode" 
            type="text" 
            placeholder="PALABRA SECRETA" 
            class="w-full bg-zinc-50 border-2 border-zinc-900 font-bold text-zinc-900 px-4 py-3 text-center uppercase focus:outline-none focus:ring-2 focus:ring-amber-800 transition-all placeholder:text-zinc-400"
            required
            autocomplete="off"
          />
          <button 
            type="submit"
            class="w-full bg-amber-600 hover:bg-amber-500 text-zinc-950 font-header font-bold py-3 border-2 border-zinc-900 transition-colors shadow-[2px_2px_0_rgba(24,24,27,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            DESBLOQUEAR
          </button>
        </form>
        
        <p v-if="errorMsg" class="mt-4 text-center text-red-600 text-sm animate-pulse font-bold">
          {{ errorMsg }}
        </p>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits(['close'])

const router = useRouter()
const { gtag } = useGtag()
const inputCode = ref('')
const errorMsg = ref('')

const checkCode = () => {
  const code = inputCode.value.toUpperCase().trim()
  errorMsg.value = ''
  
  const map: Record<string, { path: string, hash?: string }> = {
    'VAPORE': { path: '/comics', hash: '#capitolo-1' },
    'ORIGINE': { path: '/comics' },
    'SCOPARE': { path: '/comics', hash: '#capitolo-1' },
    'RONIN': { path: '/comics', hash: '#capitolo-2' },
    'NINJA': { path: '/comics', hash: '#capitolo-3' }
  }
  
  if (map[code]) {
    gtag('event', 'unlock_gate', {
      secret_word: code
    })
    emit('close')
    router.push(map[code])
  } else {
    errorMsg.value = 'Código incorrecto o corrupto.'
  }
}
</script>
