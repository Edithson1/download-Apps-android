import { NextResponse } from 'next/server';

// Siempre dinámico: lee la variable de entorno en cada request.
export const dynamic = 'force-dynamic';

export function GET() {
  const fileId = process.env.APK_FILE_ID;

  if (!fileId) {
    return NextResponse.json(
      { error: 'APK_FILE_ID no está configurado en el servidor.' },
      { status: 503 },
    );
  }

  const url = `https://drive.usercontent.google.com/download?id=${fileId}&export=download&confirm=t`;
  return NextResponse.redirect(url, 302);
}
