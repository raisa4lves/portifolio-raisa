"use client";

import { useEffect } from "react";

// Atualiza a variável CSS --scroll (usada no parallax das formas
// do fundo) e a barra de progresso no topo da página.
export default function ScrollFx() {
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty("--scroll", y);
      document.documentElement.style.setProperty("--progress", max > 0 ? y / max : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <div className="bg-shapes" aria-hidden="true">
        <span className="shape shape--1" />
        <span className="shape shape--2" />
        <span className="shape shape--3" />
        <span className="shape shape--4" />
      </div>
    </>
  );
}
