# COK Cerámica - Sitio Web

Sitio web informativo para COK Cerámica, un taller familiar de cerámica en Tucumán. Optimizado para captar consultas y alumnos, con diseño mobile-first y SEO optimizado.

## 🚀 Características

- **Mobile-first**: Diseño responsivo optimizado para dispositivos móviles
- **SEO optimizado**: Meta tags, JSON-LD y estructura semántica
- **Accesibilidad**: Contraste AA, alt texts y navegación por teclado
- **Rendimiento**: Optimización de imágenes y carga rápida
- **WhatsApp integrado**: Botón flotante para contacto directo
- **Catálogo oculto**: Preparado para fase 2 con feature flag

## 🛠️ Stack Tecnológico

- **Next.js 14** con App Router
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos
- **shadcn/ui** para componentes
- **Lucide React** para iconos
- **React Hook Form** para formularios
- **next-seo** para SEO

## 📁 Estructura del Proyecto

```
/app
  /(site)                    # Páginas públicas
    /page.tsx               # Home
    /sobre-nosotros/        # Sobre nosotros
    /servicios/             # Servicios
    /blog/                  # Blog/Novedades
    /contacto/              # Contacto
    /(oculto)/catalogo/     # Catálogo (fase 2)
/components                 # Componentes reutilizables
/content                    # Contenido JSON
/public/images             # Imágenes y assets
```

## ⚙️ Configuración Inicial

### 1. Instalación

```bash
npm install
```

### 2. Variables de Entorno

Crea un archivo `.env.local` basado en `env.example`:

```bash
cp env.example .env.local
```

Edita las variables según tu configuración:

```env
NEXT_PUBLIC_SITE_NAME="COK Cerámica"
NEXT_PUBLIC_WHATSAPP="+5493814427727"
NEXT_PUBLIC_WHATSAPP_TEXT="Hola COK Cerámica, quiero más info 🙌"
NEXT_PUBLIC_EMAIL="cokceramica@gmail.com"
NEXT_PUBLIC_ADDRESS="Don Bosco 1648, San Miguel de Tucumán, Tucumán"
NEXT_PUBLIC_HOURS="Lun a Vie 10:00–13:00 y 16:30–19:00 · Sáb 10:00–14:00"
NEXT_PUBLIC_MAPS_URL=""  # URL de Google Maps (opcional)
NEXT_PUBLIC_INSTAGRAM="" # URL de Instagram (opcional)
NEXT_PUBLIC_FACEBOOK=""  # URL de Facebook (opcional)
NEXT_PUBLIC_ENABLE_CATALOG=false  # true para mostrar catálogo
```

### 3. Desarrollo

```bash
npm run dev
```

Visita [http://localhost:3000](http://localhost:3000)

## 🎨 Personalización

### Textos y Contenido

Edita los archivos JSON en `/content/`:

- `home.json` - Contenido de la página principal
- `sobre.json` - Información sobre el taller
- `servicios.json` - Detalles de servicios
- `contacto.json` - Información de contacto
- `blog.json` - Posts del blog
- `catalogo.json` - Productos del catálogo

### Imágenes

Reemplaza las imágenes en `/public/images/`:

- `logo.png` - Logo del taller
- `hero/` - Imágenes del hero y galería
- `favicon.ico` - Icono del sitio

### Colores y Tipografías

Edita las variables CSS en `app/globals.css`:

```css
:root {
  --cok-cyan: #15bfbd;
  --cok-orange: #de6a00;
  --cok-gray: #737373;
}
```

### Menú de Navegación

Edita `components/Header.tsx` para modificar el menú de navegación.

### Habilitar Catálogo

Para mostrar el catálogo en el menú:

1. Cambia `NEXT_PUBLIC_ENABLE_CATALOG=true` en `.env.local`
2. El enlace "Catálogo" aparecerá automáticamente en el navbar

## 🚀 Deployment

### Opción 1: Vercel (Recomendado)

1. **Subir a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/tu-usuario/cok-ceramica.git
   git push -u origin main
   ```

2. **Deploy en Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu repositorio de GitHub
   - Añade las variables de entorno
   - Deploy automático

3. **Configurar dominio** (opcional):
   - En Vercel Dashboard → Settings → Domains
   - Añade tu dominio personalizado

### Opción 2: Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `.next`
3. **Variables de entorno**: Añade las variables de `env.example`

### Opción 3: Servidor propio

```bash
npm run build
npm start
```

## 📱 Optimizaciones

### Imágenes

- Usa `next/image` para optimización automática
- Formato WebP/AVIF para mejor compresión
- Lazy loading para imágenes de galería

### SEO

- Meta tags únicos por página
- JSON-LD para datos estructurados
- Sitemap automático
- Open Graph para redes sociales

### Rendimiento

- Componentes lazy-loaded
- CSS crítico inline
- Preload de recursos importantes
- Compresión gzip/brotli

## 🔧 Mantenimiento

### Actualizar Contenido

1. **Textos**: Edita archivos JSON en `/content/`
2. **Imágenes**: Reemplaza archivos en `/public/images/`
3. **Configuración**: Modifica `.env.local`

### Agregar Nuevas Páginas

1. Crea archivo en `/app/(site)/nueva-pagina/page.tsx`
2. Añade enlace en `components/Header.tsx`
3. Crea contenido JSON si es necesario

### Agregar Nuevos Posts

Edita `/content/blog.json`:

```json
{
  "id": "nuevo-post",
  "title": "Título del post",
  "excerpt": "Resumen del post",
  "date": "2024-01-15",
  "category": "Categoría",
  "image": "/images/hero/imagen.jpg",
  "readTime": "5 min"
}
```

## 🐛 Solución de Problemas

### Error de Build

```bash
npm run build
```

### Variables de Entorno no Cargadas

- Verifica que el archivo sea `.env.local` (no `.env`)
- Reinicia el servidor de desarrollo
- Verifica que las variables empiecen con `NEXT_PUBLIC_`

### Imágenes no Cargan

- Verifica que las rutas sean correctas
- Usa rutas absolutas desde `/public/`
- Verifica que los archivos existan

### WhatsApp no Funciona

- Verifica el formato del número (con código de país)
- Asegúrate de que el número esté en formato internacional

## 📞 Soporte

Para dudas sobre el desarrollo:

1. Revisa la documentación de Next.js
2. Consulta la documentación de Tailwind CSS
3. Verifica los logs del navegador para errores

## 📄 Licencia

Este proyecto es privado y está destinado exclusivamente para COK Cerámica.

---

**Desarrollado con ❤️ para COK Cerámica**
