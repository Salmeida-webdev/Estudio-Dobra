<script setup lang="ts">
useSeoMeta({ title: 'Método — Estúdio Dobra', description: 'Como o Estúdio Dobra investiga espaços e desenvolve estudos de arquitetura e interiores.' })
const steps = [
  ['01', 'Escutar', 'Entender o lugar, as pessoas, os hábitos e os limites que já fazem parte do espaço.'],
  ['02', 'Investigar', 'Desenhar possibilidades, testar relações e encontrar o que precisa de mais atenção.'],
  ['03', 'Compor', 'Organizar circulação, luz, matéria e mobiliário numa proposta visual coerente.'],
  ['04', 'Apresentar', 'Compartilhar o estudo com clareza, mostrando decisões, intenção e caminhos possíveis.']
]
</script>

<template>
  <section class="method-page section-wrap"><div class="page-intro"><p class="eyebrow">MÉTODO / DO CONTEXTO À FORMA</p><h1>Desenhar é<br><em>prestar atenção.</em></h1><p>Um processo começa com observação e conversa. As etapas abaixo descrevem uma abordagem conceitual, não uma proposta comercial ou promessa de prazo.</p></div><div class="method-layout"><div class="method-graphic" aria-hidden="true"><svg viewBox="0 0 360 360"><path d="M24 24h312v312H24zM24 144h120v192M144 24v120h192M144 144h96v192M240 144V72h96M240 240h96M72 24v72h72M24 240h48"/><circle cx="240" cy="192" r="10"/></svg><span>OBSERVAÇÃO → PROPOSTA</span></div><ol class="steps-list"><li v-for="step in steps" :key="step[0]"><span class="step-number">{{ step[0] }}</span><div><h2>{{ step[1] }}</h2><p>{{ step[2] }}</p></div><span class="step-cross" aria-hidden="true">+</span></li></ol></div><div class="method-quote"><span>“</span><p>Um projeto atento não ocupa mais espaço. Ele ajuda cada parte a encontrar seu lugar.</p></div><NuxtLink class="button button-wine" to="/contato">Conversar sobre uma ideia <span aria-hidden="true">↗</span></NuxtLink></section>
</template>
