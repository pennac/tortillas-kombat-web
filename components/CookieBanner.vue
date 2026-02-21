<template>
  <ClientOnly>
    <div v-if="!hasConsented" class="fixed bottom-0 left-0 right-0 z-50 p-4 bg-zinc-900 border-t border-amber-800 shadow-[0_-5px_20px_rgba(0,0,0,0.8)] font-elite text-zinc-300 w-full max-w-md mx-auto">
      <div class="text-sm mb-4 leading-relaxed">
        <h3 class="font-rye text-amber-500 mb-1">Uso de Cookies</h3>
        Utilizamos cookies analíticas para mejorar tu experiencia en Sartenópolis. ¿Aceptas su uso?
      </div>
      <div class="flex gap-3">
        <button @click="acceptCookies" class="flex-1 bg-amber-600 hover:bg-amber-500 text-zinc-950 font-rye py-2 transition-colors">Aceptar</button>
        <button @click="rejectCookies" class="flex-1 border border-zinc-600 hover:bg-zinc-800 text-zinc-400 font-rye py-2 transition-colors">Rechazar</button>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const { gtag } = useGtag()

// Default true on SSR so it doesn't flash or mismatch
const hasConsented = ref(true)

onMounted(() => {
  const consent = localStorage.getItem('tk_cookie_consent')
  if (!consent) {
    hasConsented.value = false
  } else if (consent === 'accepted') {
    gtag('consent', 'update', {
      analytics_storage: 'granted'
    })
  }
})

const acceptCookies = () => {
  localStorage.setItem('tk_cookie_consent', 'accepted')
  hasConsented.value = true
  gtag('consent', 'update', {
    analytics_storage: 'granted'
  })
}

const rejectCookies = () => {
  localStorage.setItem('tk_cookie_consent', 'rejected')
  hasConsented.value = true
}
</script>
