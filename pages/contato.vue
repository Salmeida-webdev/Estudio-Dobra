<script setup lang="ts">
useSeoMeta({ title: 'Contato — Estúdio Dobra', description: 'Apresente seu espaço e comece uma conversa com o Estúdio Dobra pelo WhatsApp.' })
const form = reactive({ tipo: '', cidade: '', etapa: '', descricao: '' })
const phone = '5583998739712'
const whatsappUrl = computed(() => {
  const message = `Olá! Quero conversar sobre um espaço.\nTipo: ${form.tipo || 'a definir'}\nCidade: ${form.cidade || 'a informar'}\nEtapa: ${form.etapa || 'a definir'}\nSobre a ideia: ${form.descricao || 'Quero apresentar melhor por mensagem.'}`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
})
function submit() { window.open(whatsappUrl.value, '_blank', 'noopener,noreferrer') }
</script>

<template>
  <section class="contact-page section-wrap"><div class="contact-intro"><p class="eyebrow">CONTATO / PRIMEIRO CONTEXTO</p><h1>Conte o que<br>está <em>tomando forma.</em></h1><p>O formulário organiza as primeiras informações e abre uma conversa no WhatsApp. Os dados não são armazenados por este site.</p><div class="contact-aside"><span class="micro-label">WHATSAPP</span><a href="https://wa.me/5583998739712" target="_blank" rel="noopener noreferrer">(83) 99873-9712 <span aria-hidden="true">↗</span></a><span class="contact-note">Projeto demonstrativo · atendimento ilustrativo</span></div></div><form class="contact-form" @submit.prevent="submit"><label>Que tipo de espaço?<select v-model="form.tipo" required><option value="" disabled>Selecione uma opção</option><option>Interiores residenciais</option><option>Espaço comercial compacto</option><option>Reforma</option><option>Consultoria de espaço</option><option>Outro</option></select></label><label>Em qual cidade fica?<input v-model="form.cidade" autocomplete="address-level2" placeholder="Cidade / estado" required></label><label>Em que etapa está a ideia?<select v-model="form.etapa" required><option value="" disabled>Selecione uma opção</option><option>Estou começando a pesquisar</option><option>Já tenho um espaço definido</option><option>Quero reformar em breve</option><option>Ainda estou entendendo as possibilidades</option></select></label><label>O que você gostaria de contar?<textarea v-model="form.descricao" rows="4" maxlength="600" placeholder="Um pouco sobre o espaço e o que você imagina…" required></textarea><span class="character-count">{{ form.descricao.length }}/600</span></label><button class="button button-wine form-submit" type="submit">Continuar no WhatsApp <span aria-hidden="true">↗</span></button><p class="form-privacy">Ao continuar, você abre o WhatsApp e envia a mensagem por sua conta. <NuxtLink to="/privacidade">Leia a política de privacidade.</NuxtLink></p></form></section>
</template>
