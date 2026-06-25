// Contenido de la landing: features estrella, tarjetas, idiomas, pasos e insignias.
//
// CAPTURAS por tema: cada pantalla tiene su variante clara y oscura en
// /public/screenshots/ (p.ej. home-light.jpeg / home-dark.jpeg). La web muestra
// la del tema activo. `visits` solo existe en oscuro: se usa esa para ambos.

export type FeatureStatus = 'available' | 'soon';

/** Par de imágenes (clara/oscura) de una misma pantalla. */
export type Shot = { light: string; dark: string };

const DIR = '/screenshots';
const shot = (base: string): Shot => ({
  light: `${DIR}/${base}-light.jpeg`,
  dark: `${DIR}/${base}-dark.jpeg`,
});
// `visits` solo tiene captura en modo oscuro.
const visitsShot: Shot = { light: `${DIR}/visits-dark.jpeg`, dark: `${DIR}/visits-dark.jpeg` };

export type Tilt = 'left' | 'right';

export type Feature = {
  id: string;
  icon: string;
  title: string;
  text: string;
  points: string[];
  phone: Shot;
  /** Captura secundaria recortada en un cuadrado, superpuesta al teléfono. */
  square?: Shot;
  tilt?: Tilt;
  screenLabel: string;
  status: FeatureStatus;
};

export const HERO_SCREEN = {
  phone: shot('home'),
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
    phone: shot('new-visit'),
    square: visitsShot,
    tilt: 'right',
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
    phone: shot('dashboard'),
    tilt: 'left',
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
    phone: shot('maps'),
    tilt: 'right',
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
    phone: shot('modelos-voz'),
    tilt: 'left',
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
    phone: shot('dispositivos-conectados'),
    square: shot('qr'),
    tilt: 'right',
    screenLabel: 'Sincronización',
    status: 'available',
  },
  {
    id: 'cuenta',
    icon: 'security',
    title: 'Cuenta y seguridad',
    text: 'Crea tu cuenta y resguarda tus datos en la nube. Inicia sesión con correo o con Google de forma nativa.',
    points: [
      'Registro e inicio de sesión con correo',
      'Google nativo (Credential Manager)',
      'Recuperación de contraseña por código (OTP)',
    ],
    phone: shot('cuentas-google'),
    tilt: 'left',
    screenLabel: 'Cuenta y seguridad',
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
