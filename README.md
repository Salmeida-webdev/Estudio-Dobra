# Estúdio Dobra

Site institucional conceitual de arquitetura e interiores, desenvolvido com Nuxt 4, Vue 3 e TypeScript, com geração estática para hospedagem na Netlify.

## Executar localmente

```bash
npm ci
npm run dev
```

## Validar e gerar para publicação

```bash
npm run build
npm run generate
```

O site estático é gerado em `.output/public/`. O `netlify.toml` já define o comando de build e a pasta de publicação.

## Conteúdo

- Páginas: início, projetos, detalhes dos estudos, serviços, método, estúdio, caderno, contato e privacidade.
- Estudos e imagens são conceituais. Não representam clientes, profissionais, obras ou especificações reais.
- O formulário monta uma mensagem e abre o WhatsApp informado no briefing. Não há backend nem armazenamento de dados pelo site.
- Os arquivos de imagem ficam em `public/images/`.
- A marca inclui arquivos SVG e uma versão PNG transparente em `public/images/`.
- O site é exportado como arquivos estáticos. Nuxt e Vue ficam em `devDependencies` e não são enviados à hospedagem.
- O `npm audit` atual ainda sinaliza vulnerabilidades altas em dependências transitivas de desenvolvimento (`braces` e `node-forge`); as advisories consultadas ainda não indicam versões corrigidas. Não aplique `npm audit fix --force`, pois a resolução sugerida rebaixa o Nuxt para uma versão com vulnerabilidades críticas. O servidor de desenvolvimento fica restrito a `127.0.0.1`; a hospedagem usa apenas arquivos estáticos.

## Manual editorial básico

- Preservar o tom observador, claro e próximo; evitar promessas, credenciais e dados de obras reais sem fonte.
- Manter a identificação “conceitual” em cada estudo enquanto o conteúdo for demonstrativo.
- Ao adicionar projetos, incluir descrição alternativa que diga o que a imagem mostra e revisar o recorte em telas pequenas.
- Antes de substituir imagens ou publicar conteúdo real, confirmar direitos de uso, informações profissionais e dados de contato.
