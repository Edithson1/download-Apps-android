// Constantes de marca y navegación de la landing.

export const SITE = {
  name: 'Yupay Turismo',
  tagline: 'Del cuaderno al insight',
  description:
    'App Android offline-first para emprendedores del turismo rural del Perú: registra visitas, descubre insights y haz crecer tu negocio, con o sin internet.',
  androidMin: 'Android 7.0 (API 24) o superior',
  downloadHref: '/api/download',
  apkName: 'yupay-turismo.apk',
  githubHref: 'https://github.com/Edithson1/rural-tourism-project',
  nav: [
    { href: '#caracteristicas', label: 'Características' },
    { href: '#idiomas', label: 'Idiomas' },
    { href: '#instalar', label: 'Instalar' },
  ],
  credit: {
    challenge: 'Reto «Del cuaderno al insight» — MINCETUR · ProInnovate',
    communities: 'Pensado para comunidades andinas como Luquina (Puno) y Misminay (Cusco).',
  },
} as const;
