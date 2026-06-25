import ScreenImage from './ScreenImage';

// Marco de teléfono (CSS) que envuelve la "pantalla". Se trata como una sola
// imagen para lectores de pantalla (role="img" + aria-label descriptivo).
export default function PhoneMockup({
  src,
  label,
  hint,
}: {
  src?: string;
  label: string;
  hint?: string;
}) {
  return (
    <div className="phone" role="img" aria-label={`Vista previa de ${label}`}>
      <div className="phone-screen">
        <ScreenImage src={src} label={label} hint={hint} />
      </div>
    </div>
  );
}
