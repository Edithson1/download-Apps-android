import ScreenImage from './ScreenImage';
import type { Tilt } from '../lib/features';

// Marco de teléfono (CSS) que envuelve la "pantalla". Se trata como una sola
// imagen para lectores de pantalla (role="img" + aria-label descriptivo).
// `tilt` lo inclina ligeramente (se endereza al pasar el cursor).
export default function PhoneMockup({
  light,
  dark,
  label,
  hint,
  tilt,
}: {
  light?: string;
  dark?: string;
  label: string;
  hint?: string;
  tilt?: Tilt;
}) {
  const className = tilt ? `phone phone--tilt-${tilt}` : 'phone';
  return (
    <div className={className} role="img" aria-label={`Vista previa de ${label}`}>
      <div className="phone-screen">
        <ScreenImage light={light} dark={dark} label={label} hint={hint} />
      </div>
    </div>
  );
}
