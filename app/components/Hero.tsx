import DownloadButton from './DownloadButton';
import QrCard from './QrCard';
import PhoneMockup from './PhoneMockup';
import { SITE } from '../lib/site';
import { HERO_SCREEN } from '../lib/features';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <span className="badge">
            <span className="dot" aria-hidden="true" />
            Hecho para el Perú rural · MINCETUR · ProInnovate
          </span>
          <h1 className="hero-title">{SITE.name}</h1>
          <p className="hero-tagline accent">{SITE.tagline}</p>
          <p className="hero-sub">
            Registra visitas, entiende tu negocio con gráficos y voz, y haz crecer tu
            turismo rural — con o sin internet.
          </p>
          <div className="hero-cta">
            <DownloadButton size="lg" />
            <span className="hero-meta">APK gratuito · {SITE.androidMin}</span>
          </div>
          <div style={{ marginTop: 'var(--space-3)', maxWidth: 300 }}>
            <QrCard />
          </div>
        </div>

        <div className="hero-media">
          <PhoneMockup
            src={HERO_SCREEN.screenshot}
            label={HERO_SCREEN.label}
            hint="Resumen del día e insights"
          />
        </div>
      </div>
    </section>
  );
}
