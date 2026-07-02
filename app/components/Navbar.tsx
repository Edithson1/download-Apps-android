'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';
import Icon from './Icons';
import ThemeToggle from './ThemeToggle';
import DownloadButton from './DownloadButton';
import { SITE } from '../lib/site';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
      <nav className="wrap nav-inner" aria-label="Navegación principal">
        <a className="nav-brand" href="#inicio" onClick={close}>
          <Logo size={30} variant="duo" decorative />
          <span>{SITE.name}</span>
        </a>

        <ul className="nav-links">
          {SITE.nav.map((item) => (
            <li key={item.href}>
              <a className="nav-link" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a
            className="icon-link"
            href={SITE.githubHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver el código en GitHub"
          >
            <Icon name="github" />
          </a>
          <ThemeToggle />
          <span className="download-compact">
            <DownloadButton size="compact" />
          </span>
          <button
            type="button"
            className="hamburger"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="menu-movil"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      <div id="menu-movil" className={open ? 'nav-mobile open' : 'nav-mobile'}>
        <ul>
          {SITE.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={close}>
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a href={SITE.githubHref} target="_blank" rel="noopener noreferrer" onClick={close}>
              Código en GitHub
            </a>
          </li>
          <li>
            <DownloadButton size="compact" block />
          </li>
        </ul>
      </div>
    </header>
  );
}
