<template>
  <footer class="site-footer">
    <div class="footer-main">
      <div>
        <NuxtLink class="brand footer-brand" to="/">
          <svg class="brand-mark" viewBox="0 0 42 42" aria-hidden="true"><path d="M7 7h14c8 0 14 6 14 14S29 35 21 35H7V7Z"/><path d="M14 14v14h7c4 0 7-3 7-7s-3-7-7-7h-7Z"/></svg>
          <span class="brand-wordmark">ESTÚDIO <b>DOBRA</b></span>
        </NuxtLink>
        <p class="footer-note">Arquitetura que encontra forma no cotidiano.</p>
      </div>
      <div class="footer-links"><span class="micro-label">NAVEGAR</span><NuxtLink to="/projetos">Projetos</NuxtLink><NuxtLink to="/caderno">Caderno</NuxtLink><NuxtLink to="/contato">Contato</NuxtLink><NuxtLink to="/privacidade">Privacidade</NuxtLink></div>
      <div class="footer-cta"><span class="micro-label">SEU ESPAÇO, EM CONVERSA</span><NuxtLink to="/contato">Conte o que você imagina <span aria-hidden="true">↗</span></NuxtLink></div>
    </div>
    <div class="footer-bottom"><span>© {{ new Date().getFullYear() }} Estúdio Dobra · projeto conceitual</span><span>Desenvolvido por <b>LMX Soluções Digitais/Segundo Almeida</b></span></div>
  </footer>
</template>
