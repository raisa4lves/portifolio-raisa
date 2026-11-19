"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Carousel({ photos, interval = 4500 }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef(null);
  const total = photos.length;

  const go = useCallback((i) => setIndex(((i % total) + total) % total), [total]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(next, interval);
    return () => clearTimeout(t);
  }, [index, paused, next, interval]);

  const onKey = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  // posição relativa de cada slide (-2..2) para o efeito 3D
  const offsetOf = (i) => {
    let d = i - index;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onKeyDown={onKey}
      tabIndex={0}
      aria-roledescription="carrossel"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
    >
      <div className="carousel__stage">
        {photos.map((p, i) => {
          const d = offsetOf(i);
          const hidden = Math.abs(d) > 2;
          return (
            <figure
              key={p.src}
              className={`carousel__slide ${d === 0 ? "is-active" : ""}`}
              style={{
                "--d": d,
                "--abs": Math.abs(d),
                opacity: hidden ? 0 : 1,
                pointerEvents: hidden ? "none" : "auto",
                zIndex: 10 - Math.abs(d),
              }}
              onClick={() => d !== 0 && go(i)}
              aria-hidden={d !== 0}
            >
              <Image
                src={p.src}
                alt={p.title}
                fill
                sizes="(max-width: 700px) 80vw, 420px"
                priority={i < 2}
                style={{ objectFit: "cover" }}
              />
              <figcaption>
                <strong>{p.title}</strong>
                <span>{p.place}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="carousel__controls">
        <button className="carousel__btn" onClick={prev} aria-label="Foto anterior">←</button>
        <div className="carousel__dots">
          {photos.map((p, i) => (
            <button
              key={p.src}
              className={`carousel__dot ${i === index ? "is-active" : ""}`}
              onClick={() => go(i)}
              aria-label={`Ir para ${p.title}`}
            />
          ))}
        </div>
        <button className="carousel__btn" onClick={next} aria-label="Próxima foto">→</button>
      </div>
    </div>
  );
}
