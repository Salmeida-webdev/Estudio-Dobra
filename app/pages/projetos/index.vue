<script setup lang="ts">
import { projects } from '../../data/projects'
useSeoMeta({ title: 'Projetos — Estúdio Dobra', description: 'Arquivo de estudos conceituais de arquitetura residencial e comercial compacta.' })
const filter = ref('Todos')
const filters = ['Todos', 'Residencial', 'Comercial']
const filtered = computed(() => filter.value === 'Todos' ? projects : projects.filter(project => project.category === filter.value))
</script>

<template>
  <section class="archive-page section-wrap">
    <div class="page-intro"><p class="eyebrow">ARQUIVO DE PROJETOS / 2026</p><h1>Ideias em<br><em>forma de espaço.</em></h1><p>Estudos conceituais para casas, trabalho e pequenos negócios. Cada projeto começa com uma pergunta sobre como o espaço pode servir melhor a quem usa.</p></div>
    <div class="archive-toolbar"><span class="micro-label">{{ filtered.length.toString().padStart(2, '0') }} ESTUDOS</span><div class="filter-list" aria-label="Filtrar projetos"><button v-for="item in filters" :key="item" type="button" :aria-pressed="filter === item" :class="{ active: filter === item }" @click="filter = item">{{ item }}</button></div></div>
    <div class="project-grid archive-grid"><ProjectCard v-for="project in filtered" :key="project.slug" :project="project" /></div>
    <p class="concept-note">Todos os projetos, imagens e descrições deste arquivo são conceituais e ilustrativos.</p>
  </section>
</template>
