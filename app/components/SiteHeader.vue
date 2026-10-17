<script setup lang="ts">
const menuOpen = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { menuOpen.value = false })
</script>

<template>
  <header class="site-header">
    <NuxtLink class="brand" to="/" aria-label="Estúdio Dobra — página inicial">
      <svg class="brand-mark" viewBox="0 0 42 42" aria-hidden="true"><path d="M7 7h14c8 0 14 6 14 14S29 35 21 35H7V7Z"/><path d="M14 14v14h7c4 0 7-3 7-7s-3-7-7-7h-7Z"/></svg>
      <span class="brand-wordmark">ESTÚDIO <b>DOBRA</b></span>
    </NuxtLink>
    <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="main-navigation" @click="menuOpen = !menuOpen">
      <span>{{ menuOpen ? 'Fechar' : 'Menu' }}</span><span class="menu-glyph" aria-hidden="true">{{ menuOpen ? '×' : '+' }}</span>
    </button>
    <nav id="main-navigation" class="main-nav" :class="{ 'is-open': menuOpen }" aria-label="Navegação principal">
      <NuxtLink to="/projetos">Projetos</NuxtLink>
      <NuxtLink to="/servicos">Serviços</NuxtLink>
      <NuxtLink to="/metodo">Método</NuxtLink>
      <NuxtLink to="/estudio">Estúdio</NuxtLink>
      <NuxtLink class="nav-contact" to="/contato">Vamos conversar <span aria-hidden="true">↗</span></NuxtLink>
    </nav>
  </header>
</template>
