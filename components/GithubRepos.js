"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

// Integração com a GitHub REST API: busca o perfil e os
// repositórios públicos mais recentes do usuário informado.
export default function GithubRepos({ user }) {
  const [state, setState] = useState({ loading: true, repos: [], profile: null, error: null });

  useEffect(() => {
    if (!user) {
      setState({ loading: false, repos: [], profile: null, error: "nouser" });
      return;
    }
    const ctrl = new AbortController();
    const opts = { signal: ctrl.signal, headers: { Accept: "application/vnd.github+json" } };
    Promise.all([
      fetch(`https://api.github.com/users/${user}`, opts).then((r) => (r.ok ? r.json() : Promise.reject(r.status))),
      fetch(`https://api.github.com/users/${user}/repos?sort=updated&per_page=6`, opts).then((r) =>
        r.ok ? r.json() : Promise.reject(r.status)
      ),
    ])
      .then(([profile, repos]) =>
        setState({ loading: false, profile, repos: repos.filter((r) => !r.fork), error: null })
      )
      .catch((e) => e?.name !== "AbortError" && setState({ loading: false, repos: [], profile: null, error: String(e) }));
    return () => ctrl.abort();
  }, [user]);

  if (state.loading) {
    return (
      <div className="repo-grid">
        {[0, 1, 2].map((i) => (
          <div key={i} className="card repo repo--loading">
            <span className="skeleton skeleton--line" />
            <span className="skeleton skeleton--line short" />
          </div>
        ))}
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="card gh-empty">
        <p>
          {state.error === "nouser"
            ? "Configure o usuário do GitHub em data/content.js (githubUser) para listar os repositórios aqui."
            : "Não foi possível carregar os repositórios do GitHub agora. Tente novamente em instantes."}
        </p>
      </div>
    );
  }

  const { profile, repos } = state;

  return (
    <>
      {profile && (
        <Reveal className="gh-profile card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profile.avatar_url} alt={profile.login} width={56} height={56} />
          <div>
            <strong>@{profile.login}</strong>
            <span>
              {profile.public_repos} repositórios públicos · {profile.followers} seguidores
            </span>
          </div>
          <a href={profile.html_url} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
            Ver GitHub ↗
          </a>
        </Reveal>
      )}
      <div className="repo-grid">
        {repos.length === 0 && <p className="muted">Nenhum repositório público ainda.</p>}
        {repos.map((r, i) => (
          <Reveal key={r.id} delay={i * 80}>
            <a href={r.html_url} target="_blank" rel="noreferrer" className="card repo">
              <div className="repo__top">
                <span className="repo__icon">{"</>"}</span>
                <span className="repo__arrow">↗</span>
              </div>
              <h4>{r.name}</h4>
              <p>{r.description || "Sem descrição."}</p>
              <div className="repo__meta">
                {r.language && <span className="repo__lang">● {r.language}</span>}
                <span>★ {r.stargazers_count}</span>
                <span>Atualizado em {new Date(r.updated_at).toLocaleDateString("pt-BR")}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </>
  );
}
