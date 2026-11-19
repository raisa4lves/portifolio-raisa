import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import GithubRepos from "@/components/GithubRepos";
import { projects, profile } from "@/data/content";

export const metadata = { title: "Projetos Desenvolvidos" };

export default function Projetos() {
  return (
    <>
      <PageHeader
        kicker="Projetos desenvolvidos"
        title="Ideias que viraram"
        highlight="solução"
        text="Hackathon, residência, oficinas e experimentos com IA e automação."
      />

      <section className="section container">
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 120} variant="zoom">
              <article className="card project">
                <div className="project__art" data-i={i % 5}>
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="project__body">
                  <span className="project__badge">{p.badge}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="chips">
                    {p.tags.map((t) => (
                      <span key={t} className="chip chip--sm">{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <Reveal>
            <span className="kicker">Integração com API</span>
            <h2 className="section__title">
              Direto do <span className="grad-text">GitHub</span>
            </h2>
            <p className="lead">Repositórios públicos carregados em tempo real pela GitHub REST API.</p>
          </Reveal>
          <GithubRepos user={profile.githubUser} />
        </div>
      </section>
    </>
  );
}
