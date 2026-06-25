'use client';

import { useState } from 'react';
import PlaceholderScreen from './PlaceholderScreen';

// Muestra la captura del tema activo (claro/oscuro) — se renderizan ambas y el CSS
// enseña la que toca según [data-theme]. Si faltan (o fallan), cae al placeholder.
// Las imágenes son decorativas (alt=""): el marco contenedor aporta el aria-label.
export default function ScreenImage({
  light,
  dark,
  label,
  hint,
}: {
  light?: string;
  dark?: string;
  label: string;
  hint?: string;
}) {
  const [failed, setFailed] = useState(false);

  if ((!light && !dark) || failed) {
    return <PlaceholderScreen label={label} hint={hint} />;
  }

  const onError = () => setFailed(true);
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="shot shot-light" src={light ?? dark} alt="" loading="lazy" decoding="async" onError={onError} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="shot shot-dark" src={dark ?? light} alt="" loading="lazy" decoding="async" onError={onError} />
    </>
  );
}
