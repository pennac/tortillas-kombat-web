<template>
  <div class="min-h-screen bg-white text-zinc-900 pt-24 pb-12 px-6">
    <div class="max-w-3xl mx-auto">
      <NuxtLink to="/" class="font-header text-zinc-900 hover:text-amber-600 mb-6 inline-block uppercase tracking-widest text-sm transition-colors border-b-2 border-zinc-900 hover:border-amber-600 pb-1">
        ← VOLVER AL INICIO
      </NuxtLink>
      
      <div class="bg-white border-2 border-zinc-900 p-6 md:p-10 shadow-[8px_8px_0px_rgba(24,24,27,1)] relative">
        <h1 class="font-header text-4xl md:text-5xl mb-8 uppercase text-zinc-900 border-b-4 border-zinc-900 pb-4">Política de Privacidad</h1>
        
        <div class="space-y-6">
          <section>
            <h2 class="font-header text-2xl mt-8 mb-4 uppercase text-zinc-900">1. Responsable del Tratamiento</h2>
            <p class="font-body text-lg leading-relaxed mb-4 text-zinc-800">El responsable del tratamiento de los datos personales recogidos en esta web es Tortillas Kombat. Puede contactar con nosotros a través de los canales establecidos en el Aviso Legal.</p>
          </section>

          <section>
            <h2 class="font-header text-2xl mt-8 mb-4 uppercase text-zinc-900">2. Finalidad</h2>
            <p class="font-body text-lg leading-relaxed mb-4 text-zinc-800">Los datos personales proporcionados serán utilizados exclusivamente para gestionar las solicitudes realizadas y enviar comunicaciones relevantes sobre las novedades de Tortillas Kombat, siempre que se cuente con el consentimiento explícito del usuario.</p>
          </section>

          <section>
            <h2 class="font-header text-2xl mt-8 mb-4 uppercase text-zinc-900">3. Legitimación</h2>
            <p class="font-body text-lg leading-relaxed mb-4 text-zinc-800">La base legal para el tratamiento de sus datos es el consentimiento del interesado. El suministro de los datos es voluntario, pero necesario para acceder a ciertas funcionalidades.</p>
          </section>
          
          <section>
            <h2 class="font-header text-2xl mt-8 mb-4 uppercase text-zinc-900">4. Destinatarios</h2>
            <p class="font-body text-lg leading-relaxed mb-4 text-zinc-800">No se cederán datos a terceros, salvo obligación legal. En caso de contar con encargados de tratamiento, se asegurará el cumplimiento de la normativa vigente.</p>
          </section>

          <section>
            <h2 class="font-header text-2xl mt-8 mb-4 uppercase text-zinc-900">5. Derechos</h2>
            <p class="font-body text-lg leading-relaxed mb-4 text-zinc-800">Cualquier persona tiene derecho a obtener confirmación sobre si en Tortillas Kombat estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos, solicitar su rectificación, supresión, limitación del tratamiento, portabilidad y oposición.</p>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Política de Privacidad - Tortillas Kombat' })
</script>
