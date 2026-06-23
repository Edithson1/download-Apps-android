import { NextResponse } from 'next/server';

// Siempre dinámico y en runtime Node (necesario para hacer streaming del APK).
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';
// Máximo permitido en el plan Hobby de Vercel: deja margen para conexiones lentas.
export const maxDuration = 60;

const FILE_NAME = 'yupay-turismo.apk';

// IMPORTANTE: no redirigimos al usuario a Google Drive. Para archivos grandes
// (>25 MB) Drive muestra una "pantalla intermedia" de advertencia cuando la
// petición es una NAVEGACIÓN de navegador (Sec-Fetch-Mode: navigate), incluso
// con confirm=t. Un fetch CORS del navegador, en cambio, recibe un 403.
// La única forma fiable es que el SERVIDOR (sin cabeceras de navegador) baje el
// archivo y lo reenvíe (proxy). Reenviamos también la cabecera Range para
// permitir descargas reanudables en conexiones lentas (turismo rural).
export async function GET(request: Request) {
  const fileId = process.env.APK_FILE_ID;

  if (!fileId) {
    return NextResponse.json(
      { error: 'APK_FILE_ID no está configurado en el servidor.' },
      { status: 503 },
    );
  }

  const driveUrl = `https://drive.usercontent.google.com/download?id=${fileId}&export=download&confirm=t`;
  const range = request.headers.get('range');

  let upstream: Response;
  try {
    upstream = await fetch(driveUrl, {
      headers: range ? { Range: range } : {},
      // No mandamos cabeceras de navegador: así Drive entrega el binario.
      cache: 'no-store',
    });
  } catch {
    return NextResponse.json(
      { error: 'No se pudo contactar con Google Drive.' },
      { status: 502 },
    );
  }

  // 200 (completo) o 206 (parcial) son válidos; cualquier otra cosa es error.
  if (upstream.status !== 200 && upstream.status !== 206) {
    return NextResponse.json(
      { error: `Drive respondió ${upstream.status} al pedir el APK.` },
      { status: 502 },
    );
  }

  const headers = new Headers();
  headers.set('Content-Type', 'application/vnd.android.package-archive');
  headers.set('Content-Disposition', `attachment; filename="${FILE_NAME}"`);
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Cache-Control', 'no-store');

  // Reenvía tamaño y rango para que el navegador muestre progreso y pueda reanudar.
  const contentLength = upstream.headers.get('content-length');
  if (contentLength) headers.set('Content-Length', contentLength);
  const contentRange = upstream.headers.get('content-range');
  if (contentRange) headers.set('Content-Range', contentRange);

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers,
  });
}
