'use client';

import { useState } from 'react';
import PlaceholderScreen from './PlaceholderScreen';

// Muestra la captura real si existe; si falta (o falla al cargar) cae al
// placeholder de marca. Así basta con dejar el archivo en /public/screenshots/.
export default function ScreenImage({
  src,
  label,
  hint,
}: {
  src?: string;
  label: string;
  hint?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <PlaceholderScreen label={label} hint={hint} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`Captura de ${label} en Yupay Turismo`}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
