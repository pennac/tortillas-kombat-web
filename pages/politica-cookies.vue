<template>
  <div class="w-full min-h-screen bg-zinc-950 text-zinc-400 px-6 py-12 font-elite">
    <NuxtLink to="/" class="text-amber-500 text-xs hover:text-amber-400 mb-6 inline-block border-b border-amber-900 pb-1">
      ← Volver al inicio
    </NuxtLink>
    <h1 class="font-rye text-3xl text-amber-500 mb-8 border-b border-amber-800 pb-2">Política de Cookies</h1>
    
    <div class="space-y-6 text-sm leading-relaxed">
      <section>
        <h2 class="font-rye text-xl text-amber-600 mb-2">1. ¿Qué son las cookies?</h2>
        <p>Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
      </section>

      <section>
        <h2 class="font-rye text-xl text-amber-600 mb-2">2. Tipos de cookies utilizadas</h2>
        <ul class="list-disc pl-5 space-y-2 text-zinc-300">
          <li><strong>Cookies Técnicas:</strong> Son aquellas necesarias para la navegación y el buen funcionamiento de la página web.</li>
          <li><strong>Cookies de Análisis:</strong> Son aquellas que nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
        </ul>
      </section>

      <section>
        <h2 class="font-rye text-xl text-amber-600 mb-2">3. Desactivación de cookies</h2>
        <p>Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas.</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Política de Cookies - Tortillas Kombat' })
</script>
