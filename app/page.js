import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Carousel from "@/components/Carousel";
import WeatherWidget from "@/components/WeatherWidget";
import { profile, highlights, eventPhotos, skills } from "@/data/content";

export default function Home() {
  const marquee = skills.slice(0, 3).flatMap((s) => s.items);

  return (
    <>
      {/* HERO */}
      <section className="hero container">
        <div className="hero__text">
          <Reveal>
            <span className="pill">
              <span className="pill__dot" /> Aberta a oportunidades em tecnologia
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="hero__title">
              Oi, eu sou a <span className="grad-text">Raisa</span>
              <span className="wave">👋</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="hero__role">{profile.role}</p>
            <p className="lead">{profile.tagline}. Residente no Porto Digital pelo <strong>Embarque Digital</strong>.</p>
          </Reveal>
          <Reveal delay={300} className="hero__ctas">
            <Link href="/projetos" className="btn">Ver projetos</Link>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost">
              LinkedIn ↗
            </a>
          </Reveal>
          <Reveal delay={400}>
            <WeatherWidget />
          </Reveal>
        </div>

        <Reveal variant="zoom" delay={150} className="hero__photo-wrap">
          <div className="hero__photo">
            <Image src={profile.photo} alt={profile.fullName} fill priority sizes="(max-width: 900px) 80vw, 420px" />
          </div>
          <div className="float-badge float-badge--1">🏆 Finalista HackaZero</div>
          <div className="float-badge float-badge--2">🚀 Embarque Digital</div>
          <div className="float-badge float-badge--3">💜 Voluntária SWITAB</div>
        </Reveal>
      </section>

      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee].map((s, i) => (
            <span key={i}>{s} <i>✦</i></span>
          ))}
        </div>
      </div>

      {/* DESTAQUES */}
      <section className="section container">
        <Reveal>
          <span className="kicker">Destaques</span>
          <h2 className="section__title">
            O que me <span className="grad-text">move</span>
          </h2>
        </Reveal>
        <div className="highlights">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 120}>
              <article className="card highlight">
                <span className="highlight__icon">{h.icon}</span>
                <span className="highlight__kicker">{h.kicker}</span>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CARROSSEL DE EVENTOS */}
      <section className="section section--tinted">
        <div className="container">
          <Reveal>
            <span className="kicker">Por onde andei</span>
            <h2 className="section__title">
              Eventos e <span className="grad-text">comunidade</span>
            </h2>
            <p className="lead">
              Hackathons, summits, oficinas e encontros que fazem parte da minha transição para a tecnologia.
            </p>
          </Reveal>
          <Reveal variant="zoom" delay={150}>
            <Carousel photos={eventPhotos} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section container">
        <Reveal variant="zoom">
          <div className="cta">
            <div>
              <h2>Da administração para o código.</h2>
              <p>
                Organização, análise e trabalho em equipe agora a serviço de soluções digitais com IA e automação.
              </p>
            </div>
            <div className="cta__btns">
              <Link href="/sobre" className="btn btn--light">Conheça minha história</Link>
              <a href={`mailto:${profile.email}`} className="btn btn--outline-light">Enviar e-mail</a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
