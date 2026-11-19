import Reveal from "./Reveal";

export default function PageHeader({ kicker, title, highlight, text }) {
  return (
    <section className="page-header container">
      <Reveal>
        <span className="kicker">{kicker}</span>
      </Reveal>
      <Reveal delay={100}>
        <h1>
          {title} <span className="grad-text">{highlight}</span>
        </h1>
      </Reveal>
      {text && (
        <Reveal delay={200}>
          <p className="lead">{text}</p>
        </Reveal>
      )}
    </section>
  );
}
