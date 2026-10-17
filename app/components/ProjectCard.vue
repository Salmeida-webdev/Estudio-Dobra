<script setup lang="ts">
import type { Project } from '../data/projects'
defineProps<{ project: Project }>()
</script>

<template>
  <article class="project-card">
    <NuxtLink class="project-card-link" :to="`/projetos/${project.slug}`" :aria-label="`Ver estudo conceitual ${project.title}`">
      <div class="project-image-frame">
        <div class="frame-top"><span>ED / {{ project.index }}</span><span>ESTUDO · 2026</span></div>
        <div class="project-image-wrap"><img :src="project.image" :alt="project.imageAlt" loading="lazy" width="1200" height="900"></div>
        <span class="image-index" aria-hidden="true">{{ project.index }}</span>
        <span class="image-arrow" aria-hidden="true">↗</span>
        <div class="frame-bottom"><span>{{ project.eyebrow }}</span><span>CONCEITUAL</span></div>
      </div>
      <div class="project-card-meta"><div><span class="project-category">{{ project.category }} <i aria-hidden="true">/</i> Conceito</span><h3>{{ project.title }}</h3></div><p>{{ project.summary }}</p></div>
    </NuxtLink>
  </article>
</template>
