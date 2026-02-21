<template>
  <div class="w-full min-h-screen bg-zinc-950 text-zinc-400 px-6 py-12 font-elite">
    <NuxtLink to="/" class="text-amber-500 text-xs hover:text-amber-400 mb-6 inline-block border-b border-amber-900 pb-1">
      ← Volver al inicio
    </NuxtLink>
    <h1 class="font-rye text-3xl text-amber-500 mb-8 border-b border-amber-800 pb-2">Política de Privacidad</h1>
    
    <div class="space-y-6 text-sm leading-relaxed">
      <section>
        <h2 class="font-rye text-xl text-amber-600 mb-2">1. Responsable del Tratamiento</h2>
        <p>El responsable del tratamiento de los datos personales recogidos en esta web es Tortillas Kombat. Puede contactar con nosotros a través de los canales establecidos en el Aviso Legal.</p>
      </section>

      <section>
        <h2 class="font-rye text-xl text-amber-600 mb-2">2. Finalidad</h2>
        <p>Los datos personales proporcionados serán utilizados exclusivamente para gestionar las solicitudes realizadas y enviar comunicaciones relevantes sobre las novedades de Tortillas Kombat, siempre que se cuente con el consentimiento explícito del usuario.</p>
      </section>

      <section>
        <h2 class="font-rye text-xl text-amber-600 mb-2">3. Legitimación</h2>
        <p>La base legal para el tratamiento de sus datos es el consentimiento del interesado. El suministro de los datos es voluntario, pero necesario para acceder a ciertas funcionalidades.</p>
      </section>
      
      <section>
        <h2 class="font-rye text-xl text-amber-600 mb-2">4. Destinatarios</h2>
        <p>No se cederán datos a terceros, salvo obligación legal. En caso de contar con encargados de tratamiento, se asegurará el cumplimiento de la normativa vigente.</p>
      </section>

      <section>
        <h2 class="font-rye text-xl text-amber-600 mb-2">5. Derechos</h2>
        <p>Cualquier persona tiene derecho a obtener confirmación sobre si en Tortillas Kombat estamos tratando datos personales que les conciernan, o no. Las personas interesadas tienen derecho a acceder a sus datos, solicitar su rectificación, supresión, limitación del tratamiento, portabilidad y oposición.</p>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Política de Privacidad - Tortillas Kombat' })
</script>
