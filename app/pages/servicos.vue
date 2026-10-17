<script setup lang="ts">
useSeoMeta({ title: 'Serviços — Estúdio Dobra', description: 'Arquitetura comercial compacta, interiores residenciais, reformas e consultoria de espaço.' })
const services = [
  { n: '01', title: 'Interiores residenciais', text: 'Organização de ambientes, marcenaria, iluminação e escolhas de materiais para uma rotina que funciona melhor.', mark: 'CASA' },
  { n: '02', title: 'Espaços comerciais compactos', text: 'Estudos de layout e experiência para lojas, salas de atendimento e espaços de trabalho de pequena escala.', mark: 'USO' },
  { n: '03', title: 'Reforma & reconfiguração', text: 'Leitura do espaço existente e investigação de possibilidades antes de iniciar uma transformação.', mark: 'REVER' },
  { n: '04', title: 'Consultoria de espaço', text: 'Uma conversa orientada para mapear necessidades, prioridades e próximos passos de um ambiente.', mark: 'IDEIA' }
]
</script>

<template>
  <section class="services-page section-wrap"><div class="page-intro"><p class="eyebrow">SERVIÇOS / ESCALA PRÓXIMA</p><h1>O espaço precisa<br><em>servir à vida.</em></h1><p>Atuação conceitual em arquitetura e interiores para quem quer entender melhor o próprio espaço antes de transformá-lo.</p></div><div class="service-cards"><article v-for="service in services" :key="service.n" class="service-card"><div class="service-card-top"><span>{{ service.n }} / DOBRA</span><span class="service-symbol">{{ service.mark }}</span></div><div><h2>{{ service.title }}</h2><p>{{ service.text }}</p></div><NuxtLink to="/contato" :aria-label="`Conversar sobre ${service.title}`">Explorar esta ideia <span aria-hidden="true">↗</span></NuxtLink></article></div><div class="service-bottom"><span class="micro-label">COMEÇAR PELO CONTEXTO</span><p>O primeiro passo é contar um pouco sobre o espaço, a cidade e o que você gostaria de mudar.</p><NuxtLink class="button button-dark" to="/contato">Apresentar meu espaço <span aria-hidden="true">↗</span></NuxtLink></div></section>
</template>
