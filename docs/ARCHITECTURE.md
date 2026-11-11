## 📂 Arquitectura y Estructura del Proyecto

El código está estructurado de forma modular y limpia, facilitando la escalabilidad del sistema:

---

```text
CE-IPET424/
├── .github/                          # Configuraciones y workflows de GitHub
│   ├── ISSUE_TEMPLATE/               # Plantillas para issues
│   │   ├── bug_report.yml            # Plantilla para reporte de bugs
│   │   └── feature_request.yml       # Plantilla para solicitud de funciones
│   ├── workflows/                    # Flujos de trabajo de GitHub Actions
│   │   └── static.yml                # Configuración de despliegue estático
│   ├── CODE_OF_CONDUCT.md            # Código de conducta del proyecto
│   └── PULL_REQUEST_TEMPLATE.md      # Plantilla para pull requests
├── .well-known/                      # Archivos de seguridad e infraestructura
│   └── security.txt                  # Contacto oficial para reportes de seguridad
├── assets/                           # Recursos estáticos del sitio
│   ├── audio/                        # Archivos de audio
│   │   ├── effects/                  # Efectos sonoros de interfaz
│   │   └── music/                    # Pistas de audio o música ambiental
│   ├── docs/                         # Documentos descargables (PDFs, autorizaciones)
│   │   ├── arg/                      # Documentación y normativas generales
│   │   ├── downloads/                # Archivos generales para descarga
│   │   └── school/                   # Documentación institucional y escolar
│   ├── fonts/                        # Tipografías locales
│   ├── img/                          # Imágenes del sitio
│   │   ├── bg/                       # Imágenes tecnológicas de fondo (.jpg)
│   │   ├── cursors/                  # Punteros personalizados (.cur)
│   │   ├── favicons/                 # Favicons para modo claro y oscuro
│   │   ├── gallery/                  # Galería de fotos e instalaciones
│   │   ├── icons/                    # Íconos de interfaz y redes
│   │   │   ├── footer/               # Íconos específicos del pie de página
│   │   │   ├── header/               # Íconos de los botones del headeer
│   │   │   └── widget/               # Íconos para widgets interactivos
│   │   ├── logos/                    # Logos e insignias del CE e IPET
│   │   │   ├── app/                  # Logos adaptados para aplicaciones / PWA
│   │   │   ├── ce/                   # Insignias del Centro de Estudiantes
│   │   │   └── channel/              # Logos del canal de WhatsApp
│   │   │   └── ig/                   # Recursos gráficos para Instagram/redes
│   │   ├── mascot/                   # Ilustraciones de la mascota
│   │   ├── resources/                # Recursos gráficos adicionales
│   │   └── plano.jpg                 # Plano de las instalaciones
│   ├── libs/                         # Librerías externas
│   ├── models/                       # Modelos o recursos tridimensionales/estructurales
│   └── videos/                       # Archivos de video globales del proyecto
├── components/                       # Componentes HTML reutilizables
│   ├── _aside-news.html              # Aside desplegable modular de configuración (novedades en un futuro)
│   ├── _aside-widgets.html           # Aside desplegable modular de widgets
│   ├── _footer.html                  # Pie de página modular
│   ├── _header.html                  # Encabezado y navegación modular
│   ├── _modal-in-dev.html            # Modal de advertencia de desarrollo
│   ├── _modal-terms.html             # Modal para aceptar términos y condiciones
│   └── _modal-whats-new.html         # Modal de novedades de la versión
├── css/                              # Hojas de estilos CSS
│   ├── base/                         # Hojas de estilos principales
│   │   ├── accessibility.css         # Estilos para opciones de accesibilidad
│   │   ├── fonts.css                 # Carga y definición de tipografías
│   │   ├── normalize.css             # Normalización entre navegadores
│   │   ├── reset.css                 # Reset y estilos globales del DOM
│   │   ├── seasonal.css              # Estilos estacionales o temporales
│   │   ├── themes.css                # Variables CSS de temas de color
│   │   ├── typography.css            # Jerarquía y estilos tipográficos
│   │   └── variables.css             # Variables generales del sistema
│   ├── components/                   # Hojas de estilos por componente
│   │   ├── accordion.css             # Estilos para acordeones desplegables
│   │   ├── banners.css               # Banners informativos
│   │   ├── buttons.css               # Botones e interactividad
│   │   ├── calendar.css              # Módulo del calendario
│   │   ├── cards.css                 # Tarjetas de contenido
│   │   ├── controls.css              # Paneles de control y personalización
│   │   ├── inputs.css                # Campos de formulario y controles
│   │   ├── loader.css                # Pantalla y animación de carga
│   │   ├── modals.css                # Ventanas modales
│   │   ├── schedules.css             # Módulo de horarios
│   │   ├── scrollbar.css             # Personalización de la barra de desplazamiento
│   │   ├── toasts.css                # Notificaciones flotantes / mensajes emergentes
│   │   └── widgets.css               # Widgets (clima, accesibilidad, etc.)
│   ├── layout/                       # Hojas de estilos del layout
│   │   ├── asides.css                # Menús y paneles laterales
│   │   ├── content.css               # Disposición del contenedor principal
│   │   ├── footer.css                # Pie de página
│   │   ├── header.css                # Encabezado principal
│   │   └── nav.css                   # Barra de navegación
│   ├── misc/                         # Hojas de estilos específicas o random
│   │   ├── error.css                 # Estilos para la página 404 / errores
│   │   ├── secret.css                # Estilos para los elementos easter egg
│   │   └── specific.css              # Estilos específicos varios
│   └── styles.css                    # Hoja de ruta principal (@import maestro)
├── data/                             # Archivos de datos estructurados
│   ├── days.json                     # Efemérides y "días de..."
│   ├── events.json                   # Datos de eventos y calendario
│   ├── facts.json                    # Datos curiosos para widgets
│   ├── faqs.json                     # Preguntas frecuentes
│   ├── holidays.json                 # Días festivos o calendarios especiales
│   ├── manifest.json                 # Manifiesto para instalación PWA
│   ├── news.json                     # Noticias y comunicados
│   ├── quotes.json                   # Frases o citas célebres
│   ├── schedules.json                # Horarios de cada curso
│   ├── search-index.json             # Índice de palabras clave de búsqueda
│   ├── team.json                     # Integrantes del Centro de Estudiantes
│   └── version.json                  # Versión de desarrollo
├── docs/                             # Archivos de datos estructurados
│   ├── ARCHITECTURE.md               # Árbol de carpetas y archivos del proyecto
│   ├── CONTRIBUTING.md               # Guía de estándares y convenciones de desarrollo
│   └── ROADMAP.md                    # Hoja de ruta de próximas versiones
├── js/                               # Funciones Javascript
│   ├── extras/                       # Funciones random
│   ├── ui/                           # Funciones de la interfaz
│   │   ├── banners.js                # Control de banners de aviso
│   │   ├── buttons.js                # Comportamiento e interacción de botones
│   │   ├── calendar.js               # Control y renderizado del calendario
│   │   ├── components.js             # Control de componentes varios
│   │   ├── header.js                 # Control de los widget de opciones
│   │   ├── modals.js                 # Apertura y cierre de ventanas modales
│   │   ├── pdf-reader.js             # Contorl de modal de visor/lector de pdfs
│   │   ├── schedules.js              # Control y renderizado de horarios
│   │   ├── theme.js                  # Lógica de conmutación de temas (oscuro/claro)
│   │   ├── toasts.js                 # Manejo de los toasts flotantes
│   │   ├── version.js                # Extrar la versión desde el json
│   │   └── widgets.js                # Widgets interactivos
│   ├── utils/                        # Funciones utilitarias del sistema
│   │   ├── accessibility.js          # Controles de accesibilidad (fuente, animaciones)
│   │   ├── animations.js             # Aplicación de animaciones personalizadas
│   │   ├── changelog.js              # Estilizador del changelog para los modales
│   │   ├── font-size.js              # Ajuste dinámico de tamaño de fuente
│   │   ├── shortcuts.js              # Atajos de teclado
│   │   └── sound.js                  # Efectos de audio / feedback sonoro
│   └── main.js                       # Punto de entrada principal e inicializador
├── .gitignore                        # Ignora ciertos archivos al hacer commit
├── .nojekyll                         # Evita que GitHub Pages omita carpetas con guion bajo
├── 404.html                          # Página personalizada de error 404
├── calendario.html                   # Sub-página de calendario personalizable
├── CHANGELOG.md                      # Registro de cambios y actualizaciones
├── contacto.html                     # Sub-página con formulario y datos de contacto
├── creditos.html                     # Sub-página de créditos del equipo de desarrollo
├── escuela.html                      # Sub-página institucional de la escuela
├── herramientas.html                 # Sub-página de herramientas y utilidades estudiantiles
├── horarios.html                     # Sub-página de horario personalizable
├── humans.txt                        # Créditos e información de autores del proyecto
├── index.html                        # Portal principal (Landing Page)
├── LICENSE                           # Licencia de software libre (Licencia MIT)
├── nosotros.html                     # Sub-página institucional ("Sobre Nosotros")
├── notes.txt                         # Notas rápidas de desarrollo
├── proyectos.html                    # Sub-página de proyectos y propuestas
├── recursos.html                     # Sub-página de recursos y enlaces de utilidad
├── README.md                         # Documentación principal del repositorio
├── robots.txt                        # Instrucciones para motores de búsqueda
├── terminos.html                     # Sub-página de términos y condiciones de uso
└── tramites.html                     # Sub-página sobre trámites y gestiones escolares
```
