# web-descarga

Sitio **Next.js** (App Router) que expone un botón para descargar el APK de
YUPAY TURISMO alojado en Google Drive. Pensado para desplegarse en **Vercel**.

## Cómo funciona
- `app/page.tsx`: página con el botón **Descargar APK** (y un QR para el móvil).
- `app/api/download/route.ts`: **proxy**. El servidor baja el APK de Google Drive
  y lo reenvía al usuario con cabecera de descarga (`attachment`). Reenvía la
  cabecera `Range` para permitir descargas reanudables.

El ID del archivo de Drive **no** está en el código: vive en `APK_FILE_ID`.

> ⚠️ **Por qué un proxy y no un redirect a Drive:** para archivos >25 MB, Drive
> muestra una pantalla intermedia de advertencia ("no se pudo analizar en busca
> de virus") cuando la petición es una navegación de navegador, incluso con
> `confirm=t`; y un `fetch` CORS recibe un 403. Solo una petición desde el
> servidor (sin cabeceras de navegador) obtiene el binario directo, así que el
> route handler lo descarga y lo retransmite. Por eso el route corre en runtime
> Node con `maxDuration = 60`.

## Desarrollo local
```bash
cd web-descarga
npm install
echo APK_FILE_ID=TU_ID_DE_DRIVE > .env.local
npm run dev
# abre http://localhost:3000
```

## Despliegue en Vercel
1. Sube esta carpeta a un repo (o conéctala como proyecto en Vercel).
2. En Vercel, **Project Settings → Environment Variables**, añade:
   - `APK_FILE_ID` = el ID que imprimió `npm run release` de `apk-pipeline`.
3. Deploy. El botón ya funcionará.

> Como el APK en Drive mantiene un **ID estable**, no necesitas volver a
> desplegar cuando publiques una versión nueva: el mismo enlace sirve el APK
> actualizado.
