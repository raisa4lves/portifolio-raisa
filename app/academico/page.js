import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { education, techTraining, workshops } from "@/data/content";

export const metadata = { title: "Experiência Acadêmica" };

export default function Academico() {
  const totalHours = techTraining.courses.reduce((s, c) => s + c.hours, 0);

  return (
    <>
      <PageHeader
        kicker="Experiência acadêmica"
        title="Aprendendo"
        highlight="todos os dias"
        text="Da formação técnica em redes à graduação em Sistemas para Internet pelo Embarque Digital."
      />

      <section className="section container">
        <div className="timeline">
          {education.map((e, i) => (
            <Reveal key={e.title} variant={i % 2 ? "right" : "left"} className="timeline__item">
              <span className="timeline__dot" />
              <div className={`card timeline__card ${e.featured ? "is-featured" : ""}`}>
                <div className="timeline__top">
                  <span className="tag">{e.period}</span>
                  <span className={`status ${e.status === "Concluído" ? "status--done" : ""}`}>{e.status}</span>
                </div>
                <h3>{e.title}</h3>
                <p className="timeline__org">{e.org}</p>
                <p>{e.text}</p>
                {e.featured && <span className="featured-label">✦ Programa Embarque Digital</span>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <Reveal>
            <span className="kicker">Formação complementar</span>
            <h2 className="section__title">
              {techTraining.title} <span className="grad-text">· {totalHours}h</span>
            </h2>
            <p className="lead">
              {techTraining.org} · {techTraining.status}
            </p>
          </Reveal>

          <div className="courses">
            {techTraining.courses.map((c, i) => (
              <Reveal key={c.name} delay={i * 100}>
                <div className="card course">
                  <div className="course__hours">
                    {c.hours}<small>h</small>
                  </div>
                  <h4>{c.name}</h4>
                  <div className="bar">
                    <span style={{ "--w": `${(c.hours / 60) * 100}%` }} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <h3 className="sub-title">Conteúdos estudados</h3>
            <div className="chips chips--lg">
              {techTraining.topics.map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section container">
        <Reveal>
          <span className="kicker">Oficinas</span>
          <h2 className="section__title">
            Mão na <span className="grad-text">massa</span>
          </h2>
        </Reveal>
        <div className="two-col">
          {workshops.map((w, i) => (
            <Reveal key={w.title} delay={i * 120}>
              <div className="card workshop">
                <span className="workshop__icon">{i === 0 ? "🐍" : "🤖"}</span>
                <h4>{w.title}</h4>
                <p className="muted">{w.org}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
