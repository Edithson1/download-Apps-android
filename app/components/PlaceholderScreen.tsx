import Logo from './Logo';

// Pantalla de marca que se muestra mientras no exista la captura real.
export default function PlaceholderScreen({ label, hint }: { label: string; hint?: string }) {
  return (
    <div className="placeholder-screen">
      <Logo size={56} decorative />
      <span className="ph-label">{label}</span>
      <span className="ph-hint">{hint ?? 'Vista previa de la app'}</span>
    </div>
  );
}
