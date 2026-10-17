<script setup lang="ts">
useSeoMeta({ title: 'Caderno — Estúdio Dobra', description: 'Notas breves sobre espaços, materiais e o cotidiano.' })
const notes = [
  ['01 / ESPAÇO', 'A medida de uma boa circulação', 'Antes de acrescentar móveis, vale observar por onde a vida já passa. Um percurso claro pode transformar a leitura de um ambiente compacto.'],
  ['02 / MATÉRIA', 'Texturas que deixam a luz aparecer', 'Superfícies foscas, veios discretos e pequenas variações de cor dão profundidade sem disputar atenção com o conjunto.'],
  ['03 / COMÉRCIO', 'Uma vitrine também é uma conversa', 'O primeiro contato com uma loja pode começar do lado de fora. Visibilidade, acolhimento e orientação ajudam a contar o que acontece lá dentro.']
]
</script>

<template>
  <section class="notebook-page section-wrap"><div class="page-intro"><p class="eyebrow">CADERNO / NOTAS SOBRE O ESPAÇO</p><h1>Observar também<br><em>é projetar.</em></h1><p>Anotações editoriais para pensar casas, trabalho e pequenos comércios a partir do cotidiano.</p></div><div class="note-list"><article v-for="note in notes" :key="note[0]" class="note-card"><span class="micro-label">{{ note[0] }}</span><div><h2>{{ note[1] }}</h2><p>{{ note[2] }}</p></div><span class="note-cross" aria-hidden="true">↗</span></article></div><p class="concept-note">Conteúdo demonstrativo criado para o projeto conceitual Estúdio Dobra.</p></section>
</template>
