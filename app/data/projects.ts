export type Project = {
  slug: string
  title: string
  category: 'Residencial' | 'Comercial'
  eyebrow: string
  summary: string
  image: string
  imageAlt: string
  concept: string
  intention: string
  materials: string[]
  index: string
}

export const projects: Project[] = [
  {
    slug: 'casa-42', title: 'Casa 42', category: 'Residencial', eyebrow: 'Reforma · apartamento compacto',
    summary: 'Um estudo sobre continuidade, luz lateral e mobiliário que organiza sem fechar o espaço.',
    image: '/images/casa-42.webp', imageAlt: 'Cozinha compacta com marcenaria de carvalho e nicho vinho, estudo conceitual',
    concept: 'Estudo conceitual de interiores', intention: 'Reunir cozinha, refeições e estar em uma sequência clara. A marcenaria concentra funções e libera a circulação; o nicho vinho cria um ponto de orientação sem pesar no ambiente.',
    materials: ['Carvalho natural', 'Reboco mineral', 'Laca vinho'], index: '01'
  },
  {
    slug: 'sala-comum', title: 'Sala Comum', category: 'Comercial', eyebrow: 'Espaço de trabalho · uso compartilhado',
    summary: 'Um lugar compacto para trabalhar junto, com zonas de concentração e encontros breves.',
    image: '/images/sala-comum.webp', imageAlt: 'Mesa de trabalho coletiva em um estúdio compacto com banco vinho e luz natural',
    concept: 'Estudo conceitual de espaço comercial', intention: 'Criar uma sala de trabalho flexível para profissionais autônomos. A mesa central favorece o uso compartilhado; um banco junto à parede permite conversas rápidas e espera sem bloquear o percurso.',
    materials: ['Madeira clara', 'Granilite', 'Tecido vinho'], index: '02'
  },
  {
    slug: 'vitrine-de-bairro', title: 'Vitrine de Bairro', category: 'Comercial', eyebrow: 'Loja local · pequena escala',
    summary: 'Uma loja de bairro organizada para apresentar produtos, receber e conversar.',
    image: '/images/vitrine-bairro.webp', imageAlt: 'Loja compacta com balcão curvo vinho, prateleiras claras e vitrine para a rua',
    concept: 'Estudo conceitual de ponto comercial', intention: 'Tornar o atendimento legível desde a calçada. O balcão curvo orienta a chegada, enquanto as prateleiras mantêm produtos ao alcance e deixam a fachada participar da experiência.',
    materials: ['Carvalho claro', 'Aço escovado', 'Pintura vinho'], index: '03'
  }
]
