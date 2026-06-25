// Captura secundaria recortada dentro de un contenedor cuadrado, para acompañar
// al teléfono inclinado. Renderiza las variantes clara/oscura (CSS muestra la activa).
export default function SquareShot({
  light,
  dark,
  label,
}: {
  light: string;
  dark: string;
  label: string;
}) {
  return (
    <div className="square-shot" role="img" aria-label={`Captura de ${label}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="shot shot-light" src={light} alt="" loading="lazy" decoding="async" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="shot shot-dark" src={dark} alt="" loading="lazy" decoding="async" />
    </div>
  );
}
