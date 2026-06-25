'use client';

import { QRCodeSVG } from 'qrcode.react';
import { useEffect, useState } from 'react';

const QR_SIZE = 148;

// Genera el QR del origen actual (la propia web), para abrirla desde el celular.
// El valor se calcula tras montar para coincidir con el render del servidor.
export default function QrCard({
  caption = 'Escanea para abrir esta web desde tu celular',
}: {
  caption?: string;
}) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    setUrl(window.location.origin);
  }, []);

  return (
    <div className="qr-card">
      <div className="qr-frame">
        {url ? (
          <QRCodeSVG value={url} size={QR_SIZE} bgColor="#ffffff" fgColor="#1a1a1a" />
        ) : (
          <div style={{ width: QR_SIZE, height: QR_SIZE }} aria-hidden="true" />
        )}
      </div>
      <p>{caption}</p>
    </div>
  );
}
