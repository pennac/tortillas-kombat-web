<template>
  <div class="min-h-screen bg-white text-zinc-900 pt-24 pb-12 px-6">
    <div class="max-w-3xl mx-auto">
      <NuxtLink to="/" class="font-header text-zinc-900 hover:text-amber-600 mb-6 inline-block uppercase tracking-widest text-sm transition-colors border-b-2 border-zinc-900 hover:border-amber-600 pb-1">
        ← VOLVER AL INICIO
      </NuxtLink>
      
      <div class="bg-white border-2 border-zinc-900 p-6 md:p-10 shadow-[8px_8px_0px_rgba(24,24,27,1)] relative">
        <h1 class="font-header text-4xl md:text-5xl mb-8 uppercase text-zinc-900 border-b-4 border-zinc-900 pb-4">Política de Cookies</h1>
        
        <div class="space-y-6">
          <section>
            <h2 class="font-header text-2xl mt-8 mb-4 uppercase text-zinc-900">1. ¿Qué son las cookies?</h2>
            <p class="font-body text-lg leading-relaxed mb-4 text-zinc-800">Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</p>
          </section>

          <section>
            <h2 class="font-header text-2xl mt-8 mb-4 uppercase text-zinc-900">2. Tipos de cookies utilizadas</h2>
            <ul class="list-disc pl-5 space-y-2 font-body text-lg text-zinc-800 leading-relaxed mb-4">
              <li><strong>Cookies Técnicas:</strong> Son aquellas necesarias para la navegación y el buen funcionamiento de la página web.</li>
              <li><strong>Cookies de Análisis:</strong> Son aquellas que nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio ofertado.</li>
            </ul>
          </section>

          <section>
            <h2 class="font-header text-2xl mt-8 mb-4 uppercase text-zinc-900">3. Desactivación de cookies</h2>
            <p class="font-body text-lg leading-relaxed mb-4 text-zinc-800">Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. En la mayoría de los navegadores web se ofrece la posibilidad de permitir, bloquear o eliminar las cookies instaladas.</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Política de Cookies - Tortillas Kombat' })
</script>
