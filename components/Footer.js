import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__title">Vamos conversar?</p>
          <p className="muted">Aberta à primeira oportunidade em tecnologia 💜</p>
        </div>
        <div className="footer__links">
          <a href={`mailto:${profile.email}`}>✉️ {profile.email}</a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer">📱 {profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">💼 LinkedIn</a>
        </div>
      </div>
      <p className="footer__copy">
        © {new Date().getFullYear()} {profile.fullName} · Feito com React + Next.js · {profile.location}
      </p>
    </footer>
  );
}
