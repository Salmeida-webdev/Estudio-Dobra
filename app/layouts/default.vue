<template>
  <div class="site-shell">
    <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
    <SiteHeader />
    <main id="conteudo"><slot /></main>
    <SiteFooter />
  </div>
</template>
