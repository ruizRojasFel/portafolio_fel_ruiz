
# Portafolio — Felipe Ruiz Rojas

Versión profesional del portafolio personal de Felipe Ruiz Rojas. Sitio web estático diseñado para presentar información profesional, proyectos y certificaciones, construido con HTML, CSS y JavaScript y preparado para desplegarse fácilmente en GitHub Pages u otro hosting estático.

## Descripción

Este repositorio contiene la implementación front-end del portafolio personal de Felipe Ruiz Rojas. La página estática incluye secciones principales como Inicio, Sobre mí, Proyectos, Certificaciones, Habilidades, CV y Contacto. El objetivo es ofrecer una presentación clara, accesible y moderna de la experiencia, proyectos y certificaciones profesionales.

Features principales:
- Diseño responsivo basado en Bootstrap 5
- Carrusel para proyectos
- Sección dinámica de certificaciones
- Efecto "typewriter" en el subtítulo del hero
- Carga perezosa y optimizaciones básicas de experiencia (reveal on scroll, smooth scroll, cierre de navbar en móvil)

## Demo en vivo

Si el repositorio está publicado en GitHub Pages o en otro hosting, la URL normalmente será:

- https://ruizRojasFel.github.io/portafolio_fel_ruiz (ejemplo — verificar despliegue real)

## Tecnologías y dependencias

- HTML5
- CSS3 (archivos en `styles/`)
- JavaScript (archivos en `js/` y `js/components/`)
- Bootstrap 5 (vía CDN)
- Bootstrap Icons, Font Awesome (vía CDN)
- Typed.js (efecto de escritura)

Archivos de datos:
- `data/proyects.json` — listados de proyectos mostrados en la sección Proyectos
- `data/certifications.json` — listados de certificaciones mostradas en la sección Certificaciones

Activos:
- `assets/img/` — logos, favicon y assets gráficos
- `assets/docs/cv_Felipe_Ruiz_Rojas.pdf` — CV en PDF

## Estructura del proyecto

Raíz (resumen):

```
index.html
README.md
assets/
	docs/
	img/
data/
	certifications.json
	proyects.json
js/
	main.js
	components/
		home.js
	modules/
		footer.js
		navigation.js
styles/
	main.css
	custom_styles.css
	... (otros css)
```

Descripción breve de archivos clave:
- `index.html` — entrada principal del sitio (estructura y contenido estático)
- `js/main.js` — inicialización global: tooltips, scroll suave, comportamiento del navbar, carrusel, lazy-loading y reveal-on-scroll
- `js/components/home.js` — comportamiento del hero (efecto typed)
- `data/proyects.json`, `data/certifications.json` — contenido consumido por la UI
- `styles/` — estilos personalizados y temas

## Ejecutar localmente

El sitio es una página estática; para probarlo localmente sólo necesitas servir los archivos desde un servidor HTTP (recomendado) o abrir `index.html` directamente.

Opciones recomendadas (macOS / zsh):

1) Servidor rápido con Python 3 (puerto 8000):

```bash
cd /Users/felruizrojas/fel_proyects/portafolio_fel_ruiz
python3 -m http.server 8000
# Abrir en el navegador: http://localhost:8000
```

2) Usando `http-server` (npm) si prefieres Node.js:

```bash
npm install --global http-server
cd /Users/felruizrojas/fel_proyects/portafolio_fel_ruiz
http-server -c-1 -p 8000
# Abrir en el navegador: http://localhost:8000
```

3) Abrir `index.html` directamente (no recomendable para comportamientos dependientes de CORS o rutas relativas dinámicas):

```bash
open index.html
```

## Despliegue recomendado

- GitHub Pages: publicar la rama `main` como sitio de usuario o proyecto.
- Netlify / Vercel / Amazon S3 + CloudFront para hosting estático profesional.

Observaciones:
- Asegúrate de usar rutas relativas al desplegar en GitHub Pages (por ejemplo, si publicas en `ruizRojasFel.github.io/portafolio_fel_ruiz`, revisa los paths a `assets/` y `data/`).

## Accesibilidad y SEO

- La estructura contiene landmarks (secciones) y atributos ARIA mínimos; se recomienda auditar con Lighthouse y extender etiquetas alt/aria cuando sea necesario.
- Optimizar imágenes (servir WebP y dimensiones adecuadas) y añadir meta tags adicionales para SEO si se desea mayor alcance.

## Buenas prácticas y mantenimiento

- Mantener las dependencias CDN actualizadas (Bootstrap, Font Awesome, Typed.js). Si se prefiere control de versiones, migrar a dependencias locales o un bundler.
- Añadir tests de accesibilidad y validación HTML periódica.
- Versionar cambios importantes y usar ramas para features o fixes.

## Contribuciones

Si deseas colaborar o sugerir mejoras:

1. Haz fork del repositorio
2. Crea una rama con tu feature: `git checkout -b feature/mi-mejora`
3. Realiza commits claros y crea un Pull Request describiendo el cambio

## Autor y contacto

Felipe Ruiz Rojas

- Repositorio: https://github.com/ruizRojasFel/portafolio_fel_ruiz
- CV (local): `assets/docs/cv_Felipe_Ruiz_Rojas.pdf`

Para consultas profesionales y colaboraciones, usar la sección de contacto del sitio o crear una issue en este repositorio.

## Licencia

El repositorio no contiene un archivo de licencia explícito. Si quieres publicar con una licencia abierta, se recomienda añadir un `LICENSE` (por ejemplo MIT) y actualizar este README.

## Cambios futuros (ideas)

- Migrar a un generador de sitios (Hugo, Eleventy o Next.js) para facilitar plantillas y contenido dinámico.
- Añadir analytics y pruebas automatizadas de accesibilidad.
- Mejorar SEO y optimización de imágenes.

---

Documento generado a partir del contenido del proyecto el 07/10/2025.

