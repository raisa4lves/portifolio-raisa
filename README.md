# Portfólio · Raisa Alves

Site-currículo feito com **React 19 + Next.js 16 (App Router)** e CSS puro.

## Páginas
- `/` Home — destaques (Embarque Digital, HackaZero, SWITAB), carrossel de eventos e clima ao vivo
- `/sobre` — resumo, habilidades e todas as tecnologias usadas no site
- `/academico` — formação acadêmica e cursos
- `/profissional` — experiências em tecnologia, administração e eventos
- `/projetos` — projetos + repositórios do GitHub

## APIs integradas
- **Open-Meteo** — clima atual de Recife (Home)
- **GitHub REST API** — repositórios públicos (Projetos). Defina `githubUser` em `data/content.js`.

## Rodar localmente
```bash
npm install
npm run dev
```
Abra http://localhost:3000

## Editar conteúdo
Todos os textos, links e fotos estão em `data/content.js`. Fotos ficam em `public/eventos/`.
