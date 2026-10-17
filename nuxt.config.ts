export default defineNuxtConfig({
  compatibilityDate: '2025-03-01',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'pt-BR' },
      title: 'Estúdio Dobra — Arquitetura que encontra forma no cotidiano',
      meta: [
        { name: 'description', content: 'Estudos conceituais de arquitetura comercial compacta e interiores residenciais.' },
        { name: 'theme-color', content: '#f2eee7' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600;700&family=Syne:wght@500;600;700;800&display=swap' }
      ]
    }
  },
  nitro: {
    prerender: {
      routes: ['/projetos/casa-42', '/projetos/sala-comum', '/projetos/vitrine-de-bairro']
    }
  },
  typescript: { strict: true, typeCheck: true }
})
