import Icon from './Icons';
import { SITE } from '../lib/site';

type Props = {
  variant?: 'primary' | 'ghost';
  size?: 'default' | 'compact' | 'lg';
  block?: boolean;
  label?: string;
  className?: string;
};

// Enlace de descarga. Apunta a la ruta proxy /api/download (NO se hace fetch).
export default function DownloadButton({
  variant = 'primary',
  size = 'default',
  block = false,
  label = 'Descargar APK',
  className,
}: Props) {
  const classes = ['btn', variant === 'ghost' ? 'btn-ghost' : 'btn-primary'];
  if (size === 'compact') classes.push('btn-compact');
  if (size === 'lg') classes.push('btn-lg');
  if (block) classes.push('btn-block');
  if (className) classes.push(className);

  return (
    <a className={classes.join(' ')} href={SITE.downloadHref} download={SITE.apkName}>
      <Icon name="download" />
      {label}
    </a>
  );
}
