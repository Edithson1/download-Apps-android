import PhoneMockup from './PhoneMockup';
import SquareShot from './SquareShot';
import type { Feature } from '../lib/features';

// Media de una feature: teléfono (inclinado) y, en algunos casos, una captura
// secundaria recortada en un cuadrado superpuesto a una esquina del teléfono.
export default function FeatureMedia({ feature }: { feature: Feature }) {
  return (
    <div className={feature.square ? 'media-compo has-square' : 'media-compo'}>
      <PhoneMockup
        light={feature.phone.light}
        dark={feature.phone.dark}
        label={feature.screenLabel}
        hint={feature.title}
        tilt={feature.tilt}
      />
      {feature.square && (
        <SquareShot
          light={feature.square.light}
          dark={feature.square.dark}
          label={`${feature.screenLabel} (detalle)`}
        />
      )}
    </div>
  );
}
