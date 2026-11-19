import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { profile, skills, builtWith } from "@/data/content";

export const metadata = { title: "Sobre" };

export default function Sobre() {
  return (
    <>
      <PageHeader kicker="Sobre mim" title="Prazer, eu sou a" highlight="Raisa Alves" text={profile.objective} />

      <section className="section container about">
        <Reveal variant="left" className="about__photo">
          <Image src="/eventos/embarque-digital.jpg" alt="Raisa no Porto Digital" fill sizes="(max-width: 900px) 90vw, 380px" />
        </Reveal>
        <div className="about__text">
          {profile.summary.map((p, i) => (
            <Reveal key={i} delay={i * 120}>
              <p>{p}</p>
            </Reveal>
          ))}
          <Reveal delay={400} className="about__facts">
            <div><strong>📍</strong> {profile.location}</div>
            <div><strong>🎓</strong> Sistemas para Internet · Unicap</div>
            <div><strong>🚀</strong> Embarque Digital · Porto Digital</div>
          </Reveal>
        </div>
      </section>

      <section className="section container">
        <Reveal>
          <span className="kicker">Habilidades</span>
          <h2 className="section__title">
            Minha <span className="grad-text">caixa de ferramentas</span>
          </h2>
        </Reveal>
        <div className="skills">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 100}>
              <div className="card skill-group">
                <h3>{g.group}</h3>
                <div className="chips">
                  {g.items.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <Reveal>
            <span className="kicker">Bastidores</span>
            <h2 className="section__title">
              Como este site foi <span className="grad-text">construído</span>
            </h2>
            <p className="lead">Tecnologias, módulos e APIs utilizados no desenvolvimento deste portfólio.</p>
          </Reveal>
          <div className="stack">
            {builtWith.map((t, i) => (
              <Reveal key={t.name} delay={(i % 4) * 80}>
                <div className="card stack__item">
                  <span className="stack__num">{String(i + 1).padStart(2, "0")}</span>
                  <h4>{t.name}</h4>
                  <p>{t.what}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
