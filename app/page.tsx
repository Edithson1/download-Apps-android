'use client';

import { QRCodeCanvas } from 'qrcode.react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [siteUrl, setSiteUrl] = useState('');

  useEffect(() => {
    setSiteUrl(window.location.origin);
  }, []);

  return (
    <main className="container">
      <div className="card">
        <h1>YUPAY TURISMO</h1>
        <p className="subtitle">Aplicación Android · descarga directa</p>

        <a className="download-btn" href="/api/download">
          ⬇️ Descargar APK
        </a>

        <p className="hint">
          Después de descargar, abre el archivo en tu teléfono. Si Android lo
          bloquea, permite{' '}
          <strong>“Instalar apps de orígenes desconocidos”</strong> para tu
          navegador o gestor de archivos.
        </p>

        {siteUrl && (
          <div className="qr">
            <p>O escanea este código desde tu celular:</p>
            <QRCodeCanvas value={siteUrl} size={160} />
          </div>
        )}

        <p className="footnote">Compatible con Android 7.0 (API 24) o superior.</p>
      </div>
    </main>
  );
}
