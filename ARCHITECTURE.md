## 📂 Arquitectura y Estructura del Proyecto

El código está estructurado de forma modular y limpia, facilitando la escalabilidad del sistema:

---

```text
CE-IPET424/
├── .well-known/                      # Archivos de seguridad e infraestructura
│   └── security.txt                  # Contacto oficial para reportes de seguridad
├── assets/                           # Recursos estáticos del sitio
│   ├── audio/                        # Archivos de audio (comunicados, accesibilidad)
│   ├── data/                         # Archivos de datos estructurados
│   │   ├── events.json               # Datos de eventos y calendario
│   │   ├── faqs.json                 # Preguntas frecuentes
│   │   ├── manifest.json             # Manifiesto para instalación PWA
│   │   ├── news.json                 # Noticias y comunicados
│   │   └── team.json                 # Integrantes del Centro de Estudiantes
│   ├── docs/                         # Documentos descargables (PDFs, autorizaciones)
│   ├── fonts/                        # Tipografías locales
│   ├── img/                          # Imágenes del sitio
│   │   ├── bg/                       # Imágenes tecnológicas de fondo (.jpg)
│   │   ├── cursors/                  # Punteros personalizados (.svg)
│   │   ├── favicons/                 # Favicons para modo claro y oscuro
│   │   ├── gallery/                  # Galería de fotos e instalaciones
│   │   ├── icons/                    # Íconos de interfaz y redes
│   │   ├── logos/                    # Logos e insignias del CE e IPET
│   │   └── mascot/                   # Ilustraciones de la mascota
│   └── videos/                       # Clips y videos institucionales
├── components/                       # Componentes HTML reutilizables
│   ├── _aside-config.html            # Aside desplegable modular
│   ├── _aside-news.html              # Aside desplegable modular
│   ├── _footer.html                  # Pie de página modular
│   ├── _header.html                  # Encabezado y navegación modular
│   └── _modal-whats-new.html         # Modal de novedades de la version
├── css/                              # Hojas de estilos CSS
│   ├── base/                         # Hojas de estilos principales
│   │   ├── accessibility.css         # Estilos para opciones de accesibilidad
│   │   ├── fonts.css                 # Carga y definición de tipografías
│   │   ├── normalize.css             # Normalización entre navegadores
│   │   ├── reset.css                 # Reset y estilos globales del DOM
│   │   ├── themes.css                # Variables CSS de temas de color
│   │   ├── typography.css            # Jerarquía y estilos tipográficos
│   │   └── variables.css             # Variables generales del sistema
│   ├── components/                   # Hojas de estilos por componente
│   │   ├── accordion.css             # Estilos para acordeones desplegables
│   │   ├── banners.css               # Banners informativos
│   │   ├── buttons.css               # Botones e interactividad
│   │   ├── cards.css                 # Tarjetas de contenido
│   │   ├── inputs.css                # Campos de formulario y controles
│   │   ├── loader.css                # Pantalla y animación de carga
│   │   ├── modals.css                # Ventanas modales
│   │   ├── scrollbar.css             # Personalización de la barra de desplazamiento
│   │   ├── toasts.css                # Notificaciones flotantes / mensajes emergentes
│   │   └── widgets.css               # Widgets (clima, accesibilidad, etc.)
│   ├── layout/                       # Hojas de estilos del layout
│   │   ├── asides.css                # Menús y paneles laterales
│   │   ├── content.css               # Disposición del contenedor principal
│   │   ├── footer.css                # Pie de página
│   │   ├── header.css                # Encabezado principal
│   │   └── nav.css                   # Barra de navegación
│   ├── pages/                        # Hojas de estilos específicas por página
│   │   ├── error.css                 # Estilos para la página 404 / errores
│   │   └── home.css                  # Estilos específicos de la página principal
│   └── styles.css                    # Hoja de ruta principal (@import maestro)
├── js/                               # Funciones Javascript
│   ├── ui/                           # Funciones de la interfaz
│   │   ├── banners.js                # Control de banners de aviso
│   │   ├── buttons.js                # Comportamiento e interacción de botones
│   │   ├── components.js             # Control de componentes varios
│   │   ├── modals.js                 # Apertura y cierre de ventanas modales
│   │   └── theme.js                  # Lógica de conmutación de temas (oscuro/claro)
│   ├── utils/                        # Funciones del back
│   │   ├── accessibility.js          # Utilidades generales de accesibilidad
│   │   ├── animations.js             # Efectos y animaciones
│   │   ├── dyslexia.js               # Modo de tipografía accesible (Atkinson)
│   │   ├── font-size.js              # Ajuste dinámico de tamaño de fuente
│   │   ├── shortcuts.js              # Atajos de teclado
│   │   └── sound.js                  # Efectos de audio / feedback sonoro
│   ├── config.js                     # Configuraciones
│   └── main.js                       # Punto de entrada principal e inicializador
├── .gitignore                        # Ignora ciertos archivos al hacer commit
├── .nojekyll                         # Evita que GitHub Pages omita carpetas con guion bajo
├── 404.html                          # Página personalizada de error 404
├── about.html                        # Sub-página institucional ("Sobre Nosotros")
├── changelog.txt                     # Registro de cambios y actualizaciones
├── contact.html                      # Sub-página con formulario y datos de contacto
├── credits.html                      # Sub-página de créditos del equipo de desarrollo
├── humans.txt                        # Créditos e información de autores del proyecto
├── index.html                        # Portal principal (Landing Page)
├── LICENSE                           # Licencia de software libre (Licencia MIT)
├── projects.html                     # Sub-página de proyectos y propuestas
├── README.md                         # Documentación principal del repositorio
├── robots.txt                        # Instrucciones para motores de búsqueda
└── school.html                       # Sub-página sobre la historia e instalaciones de la escuela
```
