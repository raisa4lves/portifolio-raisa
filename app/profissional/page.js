import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { techExperience, adminExperience, events } from "@/data/content";

export const metadata = { title: "Experiência Profissional" };

function ExpCard({ e, delay }) {
  return (
    <Reveal delay={delay}>
      <article className="card exp">
        <span className="tag">{e.period}</span>
        <h3>{e.title}</h3>
        <p className="exp__org">{e.org}</p>
        <p>{e.text}</p>
        {e.steps && (
          <div className="steps">
            <span className="steps__label">Progressão</span>
            <ol>
              {e.steps.map((st, i) => (
                <li key={st}>
                  {i > 0 && <span className="steps__arrow">→</span>}
                  <span className="steps__item">{st}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
        <div className="chips">
          {e.tags.map((t) => (
            <span key={t} className="chip chip--sm">{t}</span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export default function Profissional() {
  return (
    <>
      <PageHeader
        kicker="Experiência profissional"
        title="Uma trajetória em"
        highlight="transição"
        text="Sou uma profissional em transição de carreira: trago mais de 5 anos de experiência em Departamento Pessoal, RH e Administração, somados a residência, hackathon e voluntariado em tecnologia."
      />

      <section className="section container">
        <Reveal>
          <h2 className="section__title section__title--sm">
            <span className="grad-text">Tecnologia</span>
          </h2>
        </Reveal>
        <div className="exp-grid">
          {techExperience.map((e, i) => (
            <ExpCard key={e.org} e={e} delay={i * 120} />
          ))}
        </div>
      </section>

      <section className="section container">
        <Reveal>
          <h2 className="section__title section__title--sm">
            <span className="grad-text">Administração & Pessoas</span>
          </h2>
          <p className="lead">A base que trago comigo: processos, dados e gente.</p>
        </Reveal>
        <div className="exp-grid">
          {adminExperience.map((e, i) => (
            <ExpCard key={e.title} e={e} delay={i * 120} />
          ))}
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <Reveal>
            <span className="kicker">Eventos e comunidade</span>
            <h2 className="section__title">
              Sempre <span className="grad-text">em movimento</span>
            </h2>
          </Reveal>
          <div className="events">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={i * 100} variant="right">
                <div className="event">
                  <span className="event__num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{e.title}</h4>
                    <p className="muted">{e.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
