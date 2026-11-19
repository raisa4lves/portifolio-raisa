"use client";

import { useEffect, useState } from "react";

// Integração com a API pública Open-Meteo (https://open-meteo.com)
// Mostra o clima atual de Recife — sem necessidade de chave.
const URL =
  "https://api.open-meteo.com/v1/forecast?latitude=-8.05&longitude=-34.88" +
  "&current=temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,wind_speed_10m,is_day" +
  "&timezone=America%2FRecife";

const codes = {
  0: ["Céu limpo", "☀️", "🌙"],
  1: ["Poucas nuvens", "🌤️", "🌙"],
  2: ["Parcialmente nublado", "⛅", "☁️"],
  3: ["Nublado", "☁️", "☁️"],
  45: ["Neblina", "🌫️", "🌫️"],
  48: ["Neblina", "🌫️", "🌫️"],
  51: ["Garoa fraca", "🌦️", "🌧️"],
  53: ["Garoa", "🌦️", "🌧️"],
  55: ["Garoa forte", "🌧️", "🌧️"],
  61: ["Chuva fraca", "🌦️", "🌧️"],
  63: ["Chuva", "🌧️", "🌧️"],
  65: ["Chuva forte", "🌧️", "🌧️"],
  80: ["Pancadas de chuva", "🌦️", "🌧️"],
  81: ["Pancadas de chuva", "🌧️", "🌧️"],
  82: ["Chuva intensa", "⛈️", "⛈️"],
  95: ["Trovoadas", "⛈️", "⛈️"],
};

export default function WeatherWidget() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch(URL, { signal: ctrl.signal })
      .then((r) => {
        if (!r.ok) throw new Error("Falha na API");
        return r.json();
      })
      .then((json) => setData(json.current))
      .catch((e) => e.name !== "AbortError" && setError(true));
    return () => ctrl.abort();
  }, []);

  if (error) {
    return (
      <div className="weather weather--error">
        <span>🌤️</span> Não consegui carregar o clima agora.
      </div>
    );
  }

  if (!data) {
    return (
      <div className="weather weather--loading" aria-busy="true">
        <span className="skeleton skeleton--circle" />
        <span className="skeleton skeleton--line" />
      </div>
    );
  }

  const [label, dayIcon, nightIcon] = codes[data.weather_code] || ["Tempo variável", "🌈", "🌙"];
  const icon = data.is_day ? dayIcon : nightIcon;

  return (
    <div className="weather">
      <div className="weather__icon">{icon}</div>
      <div>
        <p className="weather__kicker">Agora em Recife · ao vivo</p>
        <p className="weather__temp">
          {Math.round(data.temperature_2m)}°C <small>{label}</small>
        </p>
        <p className="weather__meta">
          Sensação {Math.round(data.apparent_temperature)}°C · Umidade {data.relative_humidity_2m}% · Vento{" "}
          {Math.round(data.wind_speed_10m)} km/h
        </p>
      </div>
      <span className="weather__src">via Open-Meteo API</span>
    </div>
  );
}
