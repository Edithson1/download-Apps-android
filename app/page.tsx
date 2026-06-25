import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import FeatureCard from './components/FeatureCard';
import LanguageBadges from './components/LanguageBadges';
import Credibility from './components/Credibility';
import DownloadButton from './components/DownloadButton';
import QrCard from './components/QrCard';
import Footer from './components/Footer';
import { FEATURES, MORE_FEATURES, INSTALL_STEPS } from './lib/features';
import { SITE } from './lib/site';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Características estrella (alternadas) */}
        <section id="caracteristicas" className="section" aria-labelledby="caracteristicas-title">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Características</span>
              <h2 id="caracteristicas-title" className="section-title">
                Todo lo que necesitas, también sin internet
              </h2>
              <p className="section-sub">
                Del registro de cada visita a los insights que te ayudan a decidir.
              </p>
            </div>
            {FEATURES.map((feature, i) => (
              <FeatureSection key={feature.id} feature={feature} reverse={i % 2 === 1} />
            ))}
          </div>
        </section>

        {/* Más características (grid de tarjetas) */}
        <section className="section" style={{ paddingTop: 0 }} aria-labelledby="mas-title">
          <div className="wrap">
            <div className="section-head">
              <h2 id="mas-title" className="section-title">
                Más características
              </h2>
            </div>
            <div className="cards">
              {MORE_FEATURES.map((item) => (
                <FeatureCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* Idiomas */}
        <section
          id="idiomas"
          className="section"
          style={{ background: 'var(--color-surface-variant)' }}
          aria-labelledby="idiomas-title"
        >
          <div className="wrap cred">
            <span className="eyebrow">Inclusión</span>
            <h2 id="idiomas-title" className="section-title">
              En tu idioma, con voz
            </h2>
            <p className="section-sub" style={{ marginInline: 'auto' }}>
              La interfaz y las audioguías hablan español, quechua, inglés y portugués.
              Pensado para la accesibilidad y las comunidades quechuahablantes.
            </p>
            <LanguageBadges />
          </div>
        </section>

        {/* Credibilidad */}
        <section className="section cred" aria-labelledby="proyecto-title">
          <div className="wrap">
            <span className="eyebrow">El proyecto</span>
            <h2 id="proyecto-title" className="section-title">
              Nacido del reto «Del cuaderno al insight»
            </h2>
            <Credibility />
          </div>
        </section>

        {/* Instalar */}
        <section
          id="instalar"
          className="section"
          style={{ background: 'var(--color-surface-variant)' }}
          aria-labelledby="instalar-title"
        >
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Instalar</span>
              <h2 id="instalar-title" className="section-title">
                Descarga e instala en 3 pasos
              </h2>
            </div>
            <div className="install-grid">
              <div>
                <ol className="steps">
                  {INSTALL_STEPS.map((step, i) => (
                    <li key={step.title} className="step">
                      <span className="step-num">{i + 1}</span>
                      <div>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div style={{ marginTop: 'var(--space-3)' }}>
                  <DownloadButton size="lg" />
                </div>
              </div>
              <QrCard caption="O escanea este código desde tu celular para abrir esta web" />
            </div>
            <p
              style={{
                marginTop: 'var(--space-3)',
                textAlign: 'center',
                color: 'var(--color-text-muted)',
                fontSize: '0.85rem',
              }}
            >
              Compatible con {SITE.androidMin}.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
