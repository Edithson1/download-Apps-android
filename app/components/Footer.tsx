import Logo from './Logo';
import { SITE } from '../lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="footer-col">
          <div className="footer-brand">
            <Logo size={28} variant="duo" decorative />
            <span>{SITE.name}</span>
          </div>
          <p style={{ marginTop: 12, maxWidth: '34ch' }}>
            {SITE.tagline}. Registro de visitas e insights para el turismo rural del Perú.
          </p>
        </div>

        <div className="footer-col">
          <h4>Navegación</h4>
          <ul>
            {SITE.nav.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
            <li>
              <a href={SITE.downloadHref}>Descargar APK</a>
            </li>
            <li>
              <a href={SITE.githubHref} target="_blank" rel="noopener noreferrer">
                Código en GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Proyecto</h4>
          <ul>
            <li>{SITE.credit.challenge}</li>
            <li>Compatible con {SITE.androidMin}</li>
            <li>
              <a href={SITE.githubHref} target="_blank" rel="noopener noreferrer">
                Repositorio en GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">{SITE.credit.communities}</div>
    </footer>
  );
}
