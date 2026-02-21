<template>
  <footer class="w-full bg-zinc-50 border-t border-zinc-900 py-6 mt-auto">
    <div class="px-4 text-center font-body text-xs text-zinc-600 flex flex-col gap-3 font-semibold">
      <p>&copy; {{ new Date().getFullYear() }} Tortillas Kombat.</p>
      <div class="flex flex-wrap justify-center gap-x-4 gap-y-2">
        <NuxtLink to="/aviso-legal" class="hover:text-amber-800 transition-colors">Aviso Legal</NuxtLink>
        <NuxtLink to="/politica-privacidad" class="hover:text-amber-800 transition-colors">Política de Privacidad</NuxtLink>
        <NuxtLink to="/politica-cookies" class="hover:text-amber-800 transition-colors">Política de Cookies</NuxtLink>
      </div>
    </div>
  </footer>
</template>
