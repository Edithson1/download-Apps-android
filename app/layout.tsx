import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { SITE } from './lib/site';

export const metadata: Metadata = {
  title: `${SITE.name} — Descargar app Android`,
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    'turismo rural',
    'Perú',
    'MINCETUR',
    'registro de visitas',
    'offline',
    'quechua',
    'emprendedores',
  ],
  openGraph: {
    title: `${SITE.name} — Del cuaderno al insight`,
    description: SITE.description,
    type: 'website',
    locale: 'es_PE',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf9f6' },
    { media: '(prefers-color-scheme: dark)', color: '#07090d' },
  ],
};

// Script síncrono: fija el tema antes del primer paint para evitar el "flash".
const themeScript = `(function(){try{var k='yupay-theme',s=localStorage.getItem(k),m=window.matchMedia('(prefers-color-scheme: dark)').matches,t=s||(m?'dark':'light');document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {children}
      </body>
    </html>
  );
}
