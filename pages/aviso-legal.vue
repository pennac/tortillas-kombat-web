<template>
  <div class="w-full min-h-screen bg-zinc-950 text-zinc-400 px-6 py-12 font-elite">
    <NuxtLink to="/" class="text-amber-500 text-xs hover:text-amber-400 mb-6 inline-block border-b border-amber-900 pb-1">
      ← Volver al inicio
    </NuxtLink>
    <h1 class="font-rye text-3xl text-amber-500 mb-8 border-b border-amber-800 pb-2">Aviso Legal</h1>
    
    <div class="space-y-6 text-sm leading-relaxed">
      <section>
        <h2 class="font-rye text-xl text-amber-600 mb-2">1. Información General</h2>
        <p>En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se reflejan los siguientes datos: el titular de dominio web es Tortillas Kombat (en adelante "El Titular"), con domicilio a estos efectos en Sartenópolis.</p>
      </section>

      <section>
        <h2 class="font-rye text-xl text-amber-600 mb-2">2. Propiedad Intelectual e Industrial</h2>
        <p>El Titular por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, etc.). Todos los derechos reservados.</p>
      </section>

      <section>
        <h2 class="font-rye text-xl text-amber-600 mb-2">3. Exclusión de Garantías y Responsabilidad</h2>
        <p>El Titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.</p>
      </section>
      
      <section>
        <h2 class="font-rye text-xl text-amber-600 mb-2">4. Modificaciones</h2>
        <p>El Titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Aviso Legal - Tortillas Kombat' })
</script>
