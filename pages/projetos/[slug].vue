<script setup lang="ts">
import { projects } from '~/data/projects'
const route = useRoute()
const project = computed(() => projects.find(item => item.slug === route.params.slug))
if (!project.value) throw createError({ statusCode: 404, statusMessage: 'Estudo não encontrado' })
useSeoMeta({ title: () => `${project.value?.title} — Estúdio Dobra`, description: () => project.value?.summary || '' })
const nextProject = computed(() => projects[(projects.findIndex(item => item.slug === project.value?.slug) + 1) % projects.length]!)
</script>

<template>
  <article v-if="project" class="project-detail section-wrap">
    <div class="detail-top"><NuxtLink class="back-link" to="/projetos">← Voltar ao arquivo</NuxtLink><span class="micro-label">ESTUDO {{ project.index }} / 03</span></div>
    <header class="detail-heading"><div><p class="eyebrow">{{ project.eyebrow }}</p><h1>{{ project.title }}<sup>®</sup></h1></div><span class="concept-stamp">{{ project.concept }}<br><b>PROJETO ILUSTRATIVO</b></span></header>
    <figure class="detail-image"><img :src="project.image" :alt="project.imageAlt" width="1500" height="1000"><figcaption><span>IMAGEM GERADA PARA ESTUDO CONCEITUAL</span><span>ESTÚDIO DOBRA · 2026</span></figcaption></figure>
    <div class="detail-content"><aside><span class="micro-label">CADERNO DE PROJETO</span><p>ESTUDO {{ project.index }}<br>{{ project.category.toUpperCase() }}<br>BRASIL · 2026</p><span class="concept-stamp small">CONCEITUAL</span></aside><div><p class="detail-lead">{{ project.summary }}</p><p>{{ project.intention }}</p><h2>Matéria & atmosfera</h2><ul class="material-list"><li v-for="material in project.materials" :key="material">{{ material }}</li></ul><p class="detail-disclaimer">Este é um estudo conceitual. Não representa obra executada, cliente real ou especificação técnica para construção.</p></div></div>
    <NuxtLink class="next-project" :to="`/projetos/${nextProject.slug}`"><span class="micro-label">PRÓXIMO ESTUDO</span><b>{{ nextProject.title }}</b><span aria-hidden="true">↗</span></NuxtLink>
  </article>
</template>
