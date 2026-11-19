// ============================================================
//  Todo o conteúdo do site fica aqui. Edite este arquivo para
//  atualizar textos, links, experiências e fotos.
// ============================================================

export const profile = {
  name: "Raisa Alves",
  fullName: "Raisa Alves dos Santos Silva",
  role: "Estudante de Sistemas para Internet",
  tagline: "Transição de carreira para Tecnologia · IA, Automação e Desenvolvimento",
  location: "Recife – PE",
  email: "raisaalves.tech@gmail.com",
  phone: "+55 (81) 99152-5108",
  whatsapp: "https://wa.me/5581991525108",
  linkedin: "https://www.linkedin.com/in/raisa-alves-49b2bb21b/",
  // Coloque aqui o seu usuário do GitHub para a página de Projetos
  // listar os seus repositórios automaticamente (API do GitHub).
  githubUser: "raisa4lves",
  photo: "/raisa.jpg",
  objective:
    "Atuar na área de Desenvolvimento / Tecnologia, com interesse em Inteligência Artificial, automação e desenvolvimento de soluções digitais.",
  summary: [
    "Sou uma profissional em transição de carreira para a tecnologia e estudante de Sistemas para Internet. Hoje participo da Residência Tecnológica no Porto Digital pelo programa Embarque Digital.",
    "Trago da minha experiência em Departamento Pessoal e Administração a organização, a análise de dados, a resolução de problemas e o trabalho em equipe — e venho somando a isso lógica de programação, Java, Python, JavaScript, HTML, CSS, SQL, Git/GitHub, APIs, IA generativa e automação.",
    "Busco minha primeira oportunidade profissional em tecnologia para transformar conhecimento técnico em soluções práticas.",
  ],
};

// Os três destaques que aparecem na Home
export const highlights = [
  {
    icon: "🚀",
    kicker: "Estudante",
    title: "Embarque Digital",
    text: "Aluna de Sistemas para Internet na Unicap pelo programa Embarque Digital, com Residência Tecnológica no Porto Digital.",
  },
  {
    icon: "🏆",
    kicker: "Finalista",
    title: "HackaZero",
    text: "Finalista do hackathon HackaZero, criando soluções em equipe da ideação ao pitch.",
  },
  {
    icon: "💜",
    kicker: "Voluntária",
    title: "SWITAB",
    text: "Voluntária na Supporting Women in Technology Across Borders, iniciativa que apoia mulheres na tecnologia.",
  },
];

// Fotos do carrossel de eventos (arquivos em /public/eventos)
export const eventPhotos = [
  { src: "/eventos/embarque-digital.jpg", title: "Embarque Digital", place: "Porto Digital · Recife" },
  { src: "/eventos/tech-woman.jpg", title: "Tech Woman 2026 · Voluntária", place: "Fui voluntária no evento de tecnologia para mulheres" },
  { src: "/eventos/awsome.jpg", title: "AWSome Women Summit 2026", place: "Evento da AWS para mulheres" },
  { src: "/eventos/recnplay.jpg", title: "Rec'n'Play 2026", place: "Bairro do Recife" },
  { src: "/eventos/farol-hub.jpg", title: "Farol Hub", place: "Com a equipe" },
  { src: "/eventos/comunidade.jpg", title: "Rolê Rec'n'Play 2026", place: "Armazém da Criatividade" },
  { src: "/eventos/auditorio.jpg", title: "Com as meninas da tecnologia", place: "Palestras e trilhas" },
  { src: "/eventos/oficina.jpg", title: "Oficinas e encontros", place: "Aprendendo em grupo" },
];

export const education = [
  {
    period: "Previsão: 2027",
    title: "Sistemas para Internet",
    org: "Unicap · Programa Embarque Digital",
    status: "Em andamento",
    text: "Graduação tecnológica com foco em desenvolvimento web, banco de dados e engenharia de software, integrada à Residência Tecnológica do Porto Digital.",
    featured: true,
  },
  {
    period: "Previsão: 2026",
    title: "Gestão de Recursos Humanos",
    org: "UNINASSAU · EAD",
    status: "Em andamento",
    text: "Base em gestão de pessoas, processos e legislação trabalhista, que conversa com minha experiência em Departamento Pessoal.",
  },
  {
    period: "2018",
    title: "Técnico em Redes de Computadores",
    org: "ETE Professor Lucilo Ávila Pessoa",
    status: "Concluído",
    text: "Primeiro contato com tecnologia: redes, infraestrutura e hardware.",
  },
];

export const techTraining = {
  title: "Formação em Tecnologia",
  org: "Instituto Reciclar / TripleTen",
  status: "Em andamento",
  courses: [
    { name: "IA e Engenharia de Prompts", hours: 40 },
    { name: "Lógica de Programação", hours: 20 },
    { name: "Python Básico", hours: 60 },
    { name: "JavaScript Básico", hours: 40 },
  ],
  topics: [
    "Pensamento computacional",
    "Algoritmos",
    "Estruturas de dados",
    "Funções, condicionais e repetição",
    "Jupyter Notebook",
    "Pré-processamento de dados",
    "Manipulação do DOM",
    "Git e versionamento",
    "Debugging em Python e JavaScript",
  ],
};

export const workshops = [
  { title: "Python para Automações e Integrações", org: "Rec'n'Play 2026 · Armazém da Criatividade" },
  { title: "Prototipagem rápida com IA e Design Thinking", org: "Rec'n'Play 2026 · Armazém da Criatividade" },
];

export const skills = [
  {
    group: "Programação",
    items: ["Java", "Python", "JavaScript", "HTML", "CSS", "Lógica de programação", "Estruturas de dados"],
  },
  {
    group: "Dados & Dev",
    items: ["SQL", "Banco de dados", "APIs", "Git", "GitHub", "Jupyter Notebook"],
  },
  {
    group: "Tecnologia & IA",
    items: ["IA generativa", "Engenharia de Prompts", "Automação", "Low-code / No-code", "Lovable"],
  },
  {
    group: "Comportamentais",
    items: ["Organização", "Análise de dados", "Resolução de problemas", "Trabalho em equipe", "Comunicação"],
  },
];

export const techExperience = [
  {
    period: "Atual",
    title: "Residente de Tecnologia",
    org: "Residência Tecnológica · Embarque Digital / Porto Digital",
    text: "Formação prática e projetos em squad, desenvolvendo conhecimentos em programação, metodologias ágeis e criação de soluções digitais.",
    tags: ["Projetos em equipe", "Programação", "Ágil"],
  },
  {
    period: "Voluntariado",
    title: "Voluntária",
    org: "SWITAB — Supporting Women in Technology Across Borders",
    text: "Atuação voluntária em iniciativa que apoia o desenvolvimento e a presença de mulheres na tecnologia.",
    tags: ["Mulheres na tech", "Comunidade"],
  },
  {
    period: "Hackathon",
    title: "Finalista",
    org: "HackaZero",
    text: "Criação de solução em equipe com ideação, resolução de problemas e aplicação de tecnologia, chegando à final da competição.",
    tags: ["Ideação", "Pitch", "Equipe"],
  },
];

export const adminExperience = [
  {
    period: "03/2026 – atual",
    title: "Assistente de Departamento Pessoal Pleno",
    org: "Núcleo de Gestão do Porto Digital",
    text: "Rotinas de Departamento Pessoal no ecossistema de inovação do Porto Digital, com foco em organização, precisão das informações e melhoria de processos.",
    tags: ["Departamento Pessoal", "Processos", "Porto Digital"],
  },
  {
    period: "08/2022 – 03/2026",
    title: "Assistente Administrativa / RH",
    org: "LMA Empreendimentos LTDA",
    text: "Rotinas de Departamento Pessoal, RH e administração, com atenção a prazos, conferência de informações e organização de documentos — onde desenvolvi olhar analítico e cuidado com dados.",
    steps: ["Estagiária Administrativa", "Auxiliar Administrativa", "Assistente Administrativa / RH"],
    tags: ["Departamento Pessoal", "RH", "Organização", "Dados"],
  },
  {
    period: "08/2021 – 11/2022",
    title: "Jovem Aprendiz – Administrativo",
    org: "Mobibrasil Expresso S.A.",
    text: "Primeira experiência profissional, apoiando as rotinas administrativas e o controle de informações em contato com diferentes equipes.",
    tags: ["Rotinas administrativas", "Trabalho em equipe"],
  },
];

export const events = [
  { title: "AWSome Women Summit 2026", text: "Evento de tecnologia da AWS voltado para mulheres." },
  { title: "Rolê Rec'n'Play 2026", text: "Oficinas no Armazém da Criatividade." },
  { title: "Tech Woman 2026", text: "Voluntária no evento de tecnologia voltado para mulheres." },
  { title: "Tech Woman 2025", text: "Participação no evento de tecnologia voltado para mulheres." },
  { title: "Carreiras de Excelência – Na Prática", text: "Evento de trilha de carreira." },
];

export const projects = [
  {
    title: "Solução no HackaZero",
    badge: "Finalista 🏆",
    text: "Projeto criado em equipe durante o hackathon HackaZero: do entendimento do problema à apresentação final, chegando entre os finalistas.",
    tags: ["Hackathon", "Ideação", "Trabalho em equipe"],
  },
  {
    title: "Projetos da Residência",
    badge: "Porto Digital",
    text: "Soluções digitais desenvolvidas em squad na Residência Tecnológica do Embarque Digital, aplicando programação e metodologias ágeis.",
    tags: ["Squad", "Ágil", "Desenvolvimento"],
  },
  {
    title: "Automações com Python",
    badge: "Oficina",
    text: "Scripts de automação e integração com APIs praticados na oficina do Rec'n'Play 2026.",
    tags: ["Python", "APIs", "Automação"],
  },
  {
    title: "Protótipos com IA",
    badge: "Design Thinking",
    text: "Prototipagem rápida de ideias usando IA generativa e Design Thinking, com ferramentas low-code como o Lovable.",
    tags: ["IA generativa", "Lovable", "Design Thinking"],
  },
  {
    title: "Este portfólio",
    badge: "Next.js",
    text: "Site em React/Next.js com animações de rolagem, carrossel de fotos e integração com as APIs Open-Meteo e GitHub.",
    tags: ["React", "Next.js", "CSS", "APIs"],
  },
];

// Tudo que foi usado para construir este site (página Sobre)
export const builtWith = [
  { name: "React 19", what: "Biblioteca para construir a interface com componentes." },
  { name: "Next.js 16 (App Router)", what: "Framework React com rotas por pastas, otimização de imagens e deploy fácil." },
  { name: "JavaScript (ES Modules)", what: "Linguagem do projeto." },
  { name: "CSS puro", what: "Estilos globais, variáveis CSS, gradientes, textura e animações com @keyframes." },
  { name: "next/image", what: "Otimização e carregamento preguiçoso das fotos." },
  { name: "next/link + usePathname", what: "Navegação entre páginas e destaque do menu ativo." },
  { name: "React Hooks", what: "useState, useEffect e useRef para carrossel, APIs e animações." },
  { name: "Intersection Observer API", what: "Faz os elementos surgirem conforme a rolagem." },
  { name: "Fetch API", what: "Consumo das APIs externas." },
  { name: "Open-Meteo API", what: "Clima ao vivo de Recife na Home (gratuita, sem chave)." },
  { name: "GitHub REST API", what: "Lista os repositórios públicos na página de Projetos." },
  { name: "Fontsource", what: "Fontes Bricolage Grotesque e DM Sans instaladas via npm." },
  { name: "Git & GitHub", what: "Versionamento e hospedagem do código." },
  { name: "Vercel", what: "Publicação do site." },
];
