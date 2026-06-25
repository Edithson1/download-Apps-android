// Contenido de la landing: features estrella, tarjetas, idiomas, pasos e insignias.
//
// CAPTURAS: cada feature apunta a una imagen en /public/screenshots/. Mientras el
// archivo no exista se muestra automáticamente un placeholder de marca (no rompe
// nada). Para usar tu captura real, basta con dejar el PNG/JPG con ese nombre en
// `public/screenshots/` — no hay que tocar código.

export type FeatureStatus = 'available' | 'soon';

export type Feature = {
  id: string;
  icon: string;
  title: string;
  text: string;
  points: string[];
  screenshot?: string;
  screenLabel: string;
  status: FeatureStatus;
};

export const HERO_SCREEN = {
  screenshot: '/screenshots/home.png',
  label: 'Inicio · Dashboard',
};

export const FEATURES: Feature[] = [
  {
    id: 'visitas',
    icon: 'visits',
    title: 'Registro de visitas, sin internet',
    text: 'Del cuaderno al registro digital: anota cada visita en segundos y se guarda al instante, aunque no haya señal.',
    points: [
      'Nacionalidad con bandera y productos consumidos',
      'Descuentos fijos o porcentuales con total automático',
      'Multi-moneda: Soles, Dólares y Euros',
    ],
    screenshot: '/screenshots/visitas.png',
    screenLabel: 'Registro de visita',
    status: 'available',
  },
  {
    id: 'dashboard',
    icon: 'dashboard',
    title: 'Dashboard de insights',
    text: 'Convierte tus registros en gráficos claros para entender tu negocio de un vistazo.',
    points: [
      'KPIs: visitantes, país líder, ticket promedio e ingresos',
      'Visitas por día, ingresos en el tiempo y horas pico',
      'Filtros por periodo y resumen escrito en tu idioma',
    ],
    screenshot: '/screenshots/dashboard.png',
    screenLabel: 'Gráficos de insights',
    status: 'available',
  },
  {
    id: 'mapa',
    icon: 'map',
    title: 'Mapa de procedencias offline',
    text: 'Mira en un mapa de dónde viene cada turista, con marcadores por país y sin conexión.',
    points: [
      'OpenStreetMap incluido, funciona offline',
      'Marcadores por país según tus visitas',
      'Modo pantalla completa',
    ],
    screenshot: '/screenshots/mapa.png',
    screenLabel: 'Mapa de procedencias',
    status: 'available',
  },
  {
    id: 'audio',
    icon: 'audio',
    title: 'Audioguías por voz',
    text: 'Escucha tus resultados y consejos en voz alta. Pensado para accesibilidad y baja alfabetización.',
    points: [
      'Síntesis de voz offline en 4 idiomas (incluido quechua)',
      'Reproductor con velocidad y subtítulos',
      'Descarga de voces resumible y con caché local',
    ],
    screenshot: '/screenshots/audio.png',
    screenLabel: 'Audioguías',
    status: 'available',
  },
  {
    id: 'sync',
    icon: 'sync',
    title: 'Sincroniza entre dispositivos',
    text: 'Comparte tus datos entre teléfonos con un código QR en la red local, y respáldalos en la nube cuando haya internet.',
    points: [
      'Emparejamiento P2P por QR, sin internet',
      'Respaldo y sincronización en la nube',
      'Estado de sincronización siempre visible',
    ],
    screenshot: '/screenshots/sync.png',
    screenLabel: 'Sincronización',
    status: 'available',
  },
];

export type MoreFeature = { icon: string; title: string; text: string };

export const MORE_FEATURES: MoreFeature[] = [
  {
    icon: 'offline',
    title: 'Offline-first total',
    text: 'Registra, consulta y analiza sin conexión. Todo se sincroniza solo al recuperar la red.',
  },
  {
    icon: 'security',
    title: 'Cuenta segura',
    text: 'Inicia con correo o con Google y recupera tu acceso con un código enviado a tu correo.',
  },
  {
    icon: 'catalog',
    title: 'Catálogo de productos',
    text: 'Crea y edita tus productos y servicios con precio, categoría y moneda.',
  },
  {
    icon: 'lowend',
    title: 'Para gama baja',
    text: 'Ligera y rápida: diseñada para funcionar bien en teléfonos económicos.',
  },
];

export type Language = { name: string; native: string; featured?: boolean };

export const LANGUAGES: Language[] = [
  { name: 'Español', native: 'Castellano' },
  { name: 'Quechua', native: 'Runasimi', featured: true },
  { name: 'Inglés', native: 'English' },
  { name: 'Portugués', native: 'Português' },
];

export type Step = { title: string; text: string };

export const INSTALL_STEPS: Step[] = [
  {
    title: 'Descarga el APK',
    text: 'Pulsa «Descargar APK» o escanea el código QR con tu celular.',
  },
  {
    title: 'Permite la instalación',
    text: 'Si Android lo bloquea, activa «Instalar apps de orígenes desconocidos» para tu navegador o gestor de archivos.',
  },
  {
    title: 'Abre e instala',
    text: 'Abre el archivo descargado y sigue los pasos. ¡Listo para registrar tu primera visita!',
  },
];

export const CRED_BADGES = [
  { label: 'Reto', value: 'Del cuaderno al insight' },
  { label: 'Aliados', value: 'MINCETUR · ProInnovate' },
  { label: 'Plataforma', value: 'Android 7.0+' },
  { label: 'Idiomas', value: '4 (con quechua)' },
];
