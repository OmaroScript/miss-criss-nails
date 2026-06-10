# Nails By Cris

Sitio web para el salon de uñas **Nails By Cris**. La app presenta servicios,
galeria, informacion del estudio y un flujo visual para solicitar citas.

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Motion
- Lucide React

## Requisitos

- Node.js 20 o superior
- npm

## Configuracion

1. Instala dependencias:

   ```bash
   npm install
   ```

2. Crea el archivo de variables locales a partir del ejemplo:

   ```bash
   cp .env.example .env.local
   ```

3. Completa las variables necesarias en `.env.local`:

   ```env
   GEMINI_API_KEY="MY_GEMINI_API_KEY"
   APP_URL="http://localhost:3000"
   ```

> Nota: el sitio actual es principalmente frontend. Las variables vienen del
> proyecto generado en AI Studio y quedan documentadas para despliegues o
> integraciones futuras.

## Ejecutar en desarrollo

```bash
npm run dev
```

La aplicacion queda disponible en:

```text
http://localhost:3000
```

## Scripts disponibles

- `npm run dev`: inicia Next.js en modo desarrollo en el puerto 3000.
- `npm run build`: genera la version de produccion.
- `npm run start`: sirve la version de produccion en el puerto 3000.
- `npm run lint`: valida TypeScript sin emitir archivos.
- `npm run clean`: elimina artefactos generados por builds locales.

## Estructura principal

```text
app/
  layout.tsx       Layout raiz de Next.js y metadatos.
  page.tsx         Entrada de la pagina principal.
src/
  App.tsx          Composicion principal de la experiencia.
  data.ts          Servicios, galeria, calendario y horarios.
  index.css        Estilos globales y tokens visuales.
  components/      Secciones de la pagina.
assets/
  .aistudio/       Metadatos locales de AI Studio.
```

## Secciones del sitio

- Hero principal con llamada a reservar o ver catalogo.
- Catalogo de servicios con precios y duracion.
- Galeria de trabajos.
- Bloque informativo del estudio.
- Formulario visual para solicitar cita.
- Modal de catalogo completo.

## Personalizacion

- Servicios, precios y horarios: editar `src/data.ts`.
- Metadatos SEO basicos: editar `app/layout.tsx`.
- Estilos globales, paleta y utilidades: editar `src/index.css`.
- Componentes de interfaz: editar archivos en `src/components/`.

## Verificacion antes de subir cambios

Ejecuta:

```bash
npm run lint
npm run build
```
