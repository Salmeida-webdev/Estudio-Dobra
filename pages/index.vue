<script setup lang="ts">
import { projects } from '~/data/projects'
useSeoMeta({ title: 'Estúdio Dobra — Arquitetura para o cotidiano', description: 'Arquitetura comercial compacta e interiores residenciais. Conheça os estudos conceituais do Estúdio Dobra.' })
const featured = projects[0]!
</script>

<template>
  <div>
    <section class="hero section-wrap">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-line"></span> ARQUITETURA · INTERIORES · CIDADE</p>
        <h1>Espaços que<br><em>fazem sentido.</em></h1>
        <p class="hero-description">Arquitetura para o que acontece todos os dias. Projetos compactos, pensados para acolher ideias, trabalho e vida.</p>
        <div class="hero-actions"><NuxtLink class="button button-dark" to="/projetos">Conheça os estudos <span aria-hidden="true">↗</span></NuxtLink><NuxtLink class="text-link" to="/metodo">Como pensamos <span aria-hidden="true">→</span></NuxtLink></div>
        <div class="hero-index"><span>01 — 03</span><span>ESTÚDIO DOBRA / BRASIL</span></div>
      </div>
      <div class="hero-visual">
        <div class="hero-photo"><img src="/images/casa-42.webp" alt="Estudo conceitual de apartamento compacto com madeira clara e nicho vinho" fetchpriority="high" width="1400" height="1050"></div>
        <div class="hero-drawing" aria-hidden="true"><svg viewBox="0 0 170 170"><path d="M12 12h146v146H12zM12 72h56v86M68 12v60h90M68 72h48v86M116 72v-30h42M116 116h42M35 12v30h33M12 112h22"/><circle cx="116" cy="96" r="5"/></svg><span>PLANTA · ESTUDO 01</span></div>
        <div class="hero-caption"><span>01 / REFORMA RESIDENCIAL</span><span>CASA 42 — ESTUDO</span></div>
      </div>
      <div class="hero-side-note" aria-hidden="true">FORMA · USO · MATÉRIA</div>
    </section>

    <section class="manifesto section-wrap">
      <div class="manifesto-number">[ A ]</div><div class="manifesto-main"><p class="eyebrow">UM ESTÚDIO DE ESCALA PRÓXIMA</p><h2>O projeto começa<br>no <em>jeito de viver.</em></h2></div><p class="manifesto-copy">O Estúdio Dobra é uma prática conceitual de arquitetura e interiores. Investigamos espaços reais do cotidiano — casas, salas de trabalho e pequenos comércios — para encontrar soluções claras, acolhedoras e possíveis.</p>
    </section>

    <section class="projects-section section-wrap">
      <div class="section-heading"><div><p class="eyebrow">ARQUIVO 001 — 003</p><h2>Estudos em <em>andamento.</em></h2></div><NuxtLink class="text-link" to="/projetos">Ver todos os projetos <span aria-hidden="true">↗</span></NuxtLink></div>
      <div class="project-grid"><ProjectCard v-for="project in projects" :key="project.slug" :project="project" /></div>
    </section>

    <section class="services-band">
      <div class="services-inner section-wrap"><div><p class="eyebrow eyebrow-light">ONDE PODEMOS COMEÇAR</p><h2>Um espaço.<br><em>Muitas possibilidades.</em></h2></div><div class="service-list"><NuxtLink to="/servicos"><span>01</span><b>Interiores residenciais</b><i aria-hidden="true">↗</i></NuxtLink><NuxtLink to="/servicos"><span>02</span><b>Espaços comerciais compactos</b><i aria-hidden="true">↗</i></NuxtLink><NuxtLink to="/servicos"><span>03</span><b>Reforma & consultoria</b><i aria-hidden="true">↗</i></NuxtLink></div></div>
    </section>

    <section class="closing section-wrap"><div class="closing-mark" aria-hidden="true">D.</div><div><p class="eyebrow">UMA IDEIA PODE SER O PRIMEIRO DESENHO</p><h2>Vamos conversar<br>sobre <em>o seu espaço?</em></h2><NuxtLink class="button button-wine" to="/contato">Começar uma conversa <span aria-hidden="true">↗</span></NuxtLink></div></section>
  </div>
</template>
